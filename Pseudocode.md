# Pseudocode for Coding Quiz

1. Have button to start
    1. Have event on button to listen for click
    2. Change screen to new screen containing the first question (Most likely using javascript DOM manipulation to set the display value of one div to hidden and another to display)
2. Create timer
    1. On average, user is given 10 seconds per question, with 6 questions, adds up to 60 seconds on the timer
3. Create an object containing questions and answers
4. Create several buttons for each answer
    1. Create event on button to listen for click
5. Match user's answer against the answer inside the object
    1. If answer is right, add one point to a variable holding the amount of correct answers
    2. If false, subtract time from timer
6. Change screen to next question
7. If timer reaches 0 or user answers all questions, end game
8. After game, have an input box where they can put their initials in to save their high score
    1. Also have button to clear HS