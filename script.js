// global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

// Global Variables
var numButtons = 8; // number of buttons on the screen
var pattern = [];
var patternLen = 8; // default pattern length
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound

function setNumButtons(input) {
  // hide setting buttons
  for (let i = 2; i <= numButtons; i++) {
    document.getElementById("numButtons" + i).classList.add("hidden");
  }
  
  numButtons = input;
  
  // hide game buttons
  for (let i = 8; i > numButtons; i--) {
    document.getElementById("button" + i).classList.add("hidden");
  }
  
  // show control buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("resetBtn").classList.remove("hidden");
}

function generatePattern() {
  var randNumber = 0;
  
  // based on patternLen create a random pattern based on the chosen number of buttons
  for (let i = 0; i < patternLen; i++) {
    randNumber = Math.floor(Math.random() * numButtons + 1);
    pattern.push(randNumber);
  }
}

function startGame() {
  // initialize game variables
  generatePattern();
  progress = 0;
  gamePlaying = true;
  
  // change control buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("resetBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function resetGame() {
  // hide control buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("resetBtn").classList.add("hidden");
  
  // show game buttons
  for (let i = 8; i > numButtons; i--) {
    document.getElementById("button" + i).classList.remove("hidden");
  }
  
  numButtons = 8;
  
  // show setting buttons
  for (let i = 2; i <= numButtons; i++) {
    document.getElementById("numButtons" + i).classList.remove("hidden");
  }
}

function stopGame() {
  // reset game variables
  pattern = []
  gamePlaying = false;
  clueHoldTime = 1000;
  
  // hide control button
  document.getElementById("stopBtn").classList.add("hidden");
  
  // show game buttons
  for (let i = 8; i > numButtons; i--) {
    document.getElementById("button" + i).classList.remove("hidden");
  }
  
  numButtons = 8;
  
  // show setting buttons
  for (let i = 2; i <= numButtons; i++) {
    document.getElementById("numButtons" + i).classList.remove("hidden");
  }
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  // speed up game for difficulty
  clueHoldTime -= 50
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations. You won!");
}

function guess(btn) {
  // log user guess
  console.log("user guessed: " + btn);
  
  // check if game is in progress
  if (!gamePlaying) {
    return;
  }
  
  // is guess correct?
  if (pattern[guessCounter] == btn) {
    // is turn over?
    if (guessCounter == progress) {
      // is this the last turn?
      if (progress == pattern.length - 1) {
        // game won
        winGame();
      } else {
        // increment progress, play next clue sequence
        progress++;
        playClueSequence();
      }
    } else {
      // increment guessCounter
      guessCounter++;
    }
  } else {
    // lose game
    loseGame();
  }
}

// Sound Synthesis Functions

const freqMap = {
  // fun fact: this is the c major scale
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493.88,
  8: 523.25
}

function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  }, len)
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)
