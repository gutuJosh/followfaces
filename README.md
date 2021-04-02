# About Followfaces
This javascript plugin add a cool effect to a profile image by making the face in the image to follow the mouse cursor or a touching point. This plugin can be use to enhance a profile page, an online cv or the team page in your website.
The project use [webapck](https://webpack.js.org) module bundler to manage the javascript and asset files.

## Demo
Click [here](https://www.bancomail.com/en/about/team) to see it on action.

## Available Scripts

In the project directory, you can run:

to install dependencies:
### `npm install`

to start the application in development mode:
### `npm run dev`

to build the bundle file in the /dist dir:
### `npm run build`

Runs the app in the development mode.<br />
Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.



## HOW TO USE
The key of the success is a good headshot picture, so let's say a few words on how to build your profile picture.
First of all arm yourself with a tripod in order to get sharp images. Then position yourself preferable against of single color tint wall. Focus the camera on your face and try to get the best lighting and facial expression. You will have to take 8 shots while you move your head(important:only your head!) counterclockwise. So begin by looking at 12 hour, then look between 11 and 10 hours, go ahead by looking at 9, take another shot while looking between 8 and 7, after that look down at 6 hour. Only 3 shots are missing, stay with me. Proceed with the sixth shot looking within 5 and 4, then take the seventh shot looking at 3 hour and finally take a shot while looking amid 1 and 2 hours. Now you will have to take a last picture by looking stright to your camera. That's it! The photo session is over.
<br/>
Now will pass to the post-production phase. You will have to merge the fisrt 8 shots in the same order in which they where made, ending with an eight frame filmstrip. Look in "src" folder for the "strip.jpg" picture to get what I mean. Use Adobe Photoshop or other image manipulation software, to do that.
<br/>
Now that you have a pofile picture, add this code to your html page:
<div class="highlight highlight-text-html-basic">
  <pre>&lt;<span class="pl-ent">body</span>&gt;
  ..................
  &nbsp;&lt;<span class="pl-ent">div</span> class="strip-holder"&gt;
  &nbsp;&nbsp;&lt;<span class="pl-ent">img</span> <span class="pl-e">src</span>="your-ninth-shot"/&gt;
  &nbsp;&lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">script <span class="pl-e">src</span>="followFaces.bundle.js"</span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
  &lt;/<span class="pl-ent">body</span>&gt;
  </pre>
</div>
By default the image has a maximum width of 280 pixels. If you want to change this, modify the style.css file in /src folder and run `npm run build` to rebuild the bundle file.
<br/>
Enjoy!

