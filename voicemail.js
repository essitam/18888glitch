let inc = 0.01;
let start = 0;
function preload(){
sound = loadSound('vm1.mp3');
}

function setup(){
let cnv = createCanvas(windowWidth, windowHeight);
cnv.parent('canvasParent')
cnv.mouseClicked(togglePlay);
fft = new p5.FFT();
sound.amp(0.2);
}

function draw(){
// background(4, 94, 120);
// background(0);
background(139, 195, 193);
// background(128, 189, 187);
// let spectrum = fft.analyze();
// noStroke();
// fill(255, 0, 255);
// for (let i = 0; i< spectrum.length; i++){
//   let x = map(i, 0, spectrum.length, 0, width);
//   let h = -height + map(spectrum[i], 0, 255, height, 0);
//   rect(x, height, width / spectrum.length, h )
// }

let waveform = fft.waveform();
noFill();
beginShape();

let xoff = start;
for (let i = 0; i < waveform.length; i++){
let x = map(i, 0, waveform.length, 0, width);
// let y = ;
let y = noise(xoff)* height;
let z = map( waveform[i], -1, 1, 0, height)
stroke(202, 255, 45);
// stroke(197, 253, 24);
vertex(x,y);
// vertex(y,y);
vertex(z, y);
// vertex(x,x);
// vertex(x,x);
  xoff += inc;
}
endShape();
start += inc;
// text('tap to play', 20, 20);


  var sparkle = {
      locationX: random(width),
      locationY: random(height),
      size: random(1, 6)
  }

  fill (215, 251, 56);
  noStroke();
  ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
  ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}

function togglePlay() {
if (sound.isPlaying()) {
sound.pause();
} else {
sound.loop();
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
