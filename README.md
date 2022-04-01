# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Esau Veliz**

Time spent: **20** hours spent in total

Link to project: https://glitch.com/edit/#!/adhesive-spicy-vision

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Player can choose the number of game buttons they want to play with

## Video Walkthrough (GIF)

![](https://i.imgur.com/LHuVzt5.gif)

![](https://i.imgur.com/K81c8gG.gif)

![](https://i.imgur.com/PNpmDHR.gif)

![](https://i.imgur.com/ws1wWi8.gif)

![](https://i.imgur.com/bDdBeb2.gif)

![](https://i.imgur.com/JWmRmo4.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css/default.asp
https://www.w3schools.com/js/default.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[While developing code that gave the user the ability to choose the number of buttons they want, I came across a problem with generating the random pattern for the game that contained only the buttons the user specified. The first major step I took in resolving the issue was creating a global variable to keep track of how many buttons were currently present on the screen. Within my function that generated the pattern, I then used that global random variable to correctly generate the random numbers to add to the pattern based on the user's input. However, since I also allowed the user the ability to reset their choice and repeat the whole process, I had issues with correctly updating the global variable. To combat the issue, I proceeded to debug major the major functions that started, reset, and stopped the game by logging the state of the global variable. Using this method, I was able to identify that I needed to correctly update the global variable when the game was reset or stopped. This was due to the fact that when the variable changed by the user input before the game started, and the user proceeded to either reset or stop the game, the variable did not reflect the game changing to its original state.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing my submission, I have further questions about user input and interactions with a website. While I was able to log user input by using buttons that were labeled, I am curious as to whether there are any further ways to interpret user input. A few ideas in mind include how to log user keyboard input, or mouse movement across a website, and a website's response to these actions. The reason I am interested in this subject is due the fact that websites are extremely centered on user experience and choice. Specifically, continuing to develop websites, I want make sure users are getting quality in terms of website interactions and choices.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, I would spend them decomposing pieces of code and adding additional features. For example, within my code, I frequently add and remove "hidden" from certain elements. In order to improve on this, I would find a method to decompose my code into a helper function that would consist of adding and removing "hidden" based on the scenario. In terms of adding additional features, along with giving the user the ability to choose how many buttons they want to play with, I would develop a process that would also allow the user to choose the pattern length they want to play with. This would consist of receiving a certain input from the user, not sustainable through a series of buttons if the user wants a big number, and updating the correct variables in the code. Furthermore, I would continue to integrate the optional features into my game.]

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright [Esau Veliz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
