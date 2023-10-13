# vanilla-js-text-animation-points
Posting my drafts so anyone who wants to create similar thing wont have to start from nothing (like I did lol) <br />

Demo: https://somethingspecial2.github.io/vanilla-js-text-animation-points/

# Explanation of everything
So, in the beginning I hoped that I can find already existing working demo, but I didnt :/ <br />
Also, three.js and pixi.js offered no tools to make the task easier <br />
We start from scratch then <br />
# How it works
First,we go here https://danmarshall.github.io/google-font-to-svg-path/ <br />
and grab our text as svg path <br />
then if needed we go here https://yqnn.github.io/svg-path-editor/ and edit it as we need <br />
and then we think about how wonderful those people who created this tools ~~and give them a head~~ <br />
Then we use svg path and isPointInPath to generate random coordinates inside svg bbox, and if coordinates are inside svg path we add a point with this coordinates
Then we animate points we got

