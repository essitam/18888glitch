/**
* Element.requestFullScreen() polyfill
* @author Chris Ferdinandi
* @license MIT
*/
if (!Element.prototype.requestFullscreen) {
Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}

// Listen for clicks
document.addEventListener('click', function (event) {

// Check if clicked element is a video thumbnail
var videoId = event.target.getAttribute('data-video');
if (!videoId) return;

// Create iframe
var iframe = document.createElement('div');
iframe.innerHTML = '<p>x</p><iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
var video = iframe.childNodes[1];

// Replace the image with the video
event.target.parentNode.replaceChild(video, event.target);

// Enter fullscreen mode
video.requestFullscreen();

}, false);
