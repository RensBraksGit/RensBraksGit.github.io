# Image Path Issue

**Published on:** 2025-02-23  
**Tags:** JavaScript, Images, Paths  

## Issue Description
The issue with the image not displaying was due to the path being relative to the location of the `blogs.js` file.
This is a file where I have an array with blog information stored. 
<img src="assets/images/blog1screenshot1.png" alt="Screenshot" style="width: 100%;  height: auto; display: block; margin: 0 auto;">
I actually load the image on the `blogGrid.html` page. Where I would get this error in the console:

<img src="assets/images/blog1screenshot3.png" alt="Screenshot" style="width: 100%;  height: auto; display: block; margin: 0 auto;">
And this would show on my `blogGrid.html` page.
<img src="assets/images/blog1screenshot2.png" alt="Screenshot" style="width: 100%;  height: auto; display: block; margin: 0 auto;">

## Solution
To resolve this issue, I had to make sure the image paths in my `blogs.js` file are relative to the HTML file `blogGrid.html` that renders the content, not the `blogs.js` JavaScript file. For safety I just did the full path:
<img src="assets/images/blog1screenshot4.png" alt="Screenshot" style="width: 100%;  height: auto; display: block; margin: 0 auto;">
And with that the image was able to load properly:
<img src="assets/images/blog1screenshot5.png" alt="Screenshot" style="width: 100%;  height: auto; display: block; margin: 0 auto;">

### Final Note
I know this isn't the most exciting blog, but time was ticking haha.