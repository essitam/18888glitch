let id = 0;
let src = 'logo-600.png';

function buildSketch(elm, type){
  let parent = document.getElementById(elm);
  new p5( function(sketch){
    sketch.glitch;

    sketch.setup = () => {
      let cvn = sketch.createCanvas(600, 200);
      sketch.glitch = new Glitch(sketch);
      sketch.glitch.loadType(type);
      sketch.glitch.loadQuality(1.0);
      sketch.glitch.loadImage(src, function(){
        sketch.glitched();
      });
      cvn.mouseMoved(sketch.glitched);
      sketch.glitch.errors(false);
      sketch.disableFriendlyErrors = true;
      sketch.imageMode(sketch.CENTER);
      sketch.background(0, 0, 255);
      sketch.frameCount = sketch.floor(sketch.random(9999));
      sketch.rot = 0;
    };

    sketch.draw = () => {
      // sketch.x = sketch.width - sketch.frameCount * 2 % sketch.width;
      // sketch.y = sketch.height / 2 + sketch.sin(sketch.frameCount * 0.05) * sketch.height/4;
      // sketch.translate(sketch.x, sketch.y);
      // sketch.rotate(-sketch.radians(sketch.cos(sketch.frameCount*.05))*5);
      sketch.image(sketch.glitch.image,  sketch.width / 2, sketch.height / 2);
      // sketch.glitched();
      sketch.glitch.resetBytes();
      sketch.glitch.randomBytes(1); // randomize 10 bytes
      sketch.glitch.buildImage();
      sketch.glitch.loadImage(src, function(){
        sketch.glitched();
      });
        // sketch.background(0);
    }

    sketch.glitched = () => {
      sketch.glitch.resetBytes();
      sketch.glitch.randomBytes(1); // randomize 10 bytes
      sketch.glitch.buildImage();
        sketch.background(252, 240, 3);
    }
  }, parent);

  id++;
}
function buildSketch2(elm, type){
  let parent = document.getElementById(elm);
  new p5( function(sketch){
    let inc = 0.01;
    let start = 0;
    let sound, fft;
    sketch.preload = () => {
    sound = sketch.loadSound('vm1.mp3');

    };

    sketch.setup = () => {
      let cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      cnv.mouseClicked(sketch.togglePlay);
      fft = new p5.FFT();
      sound.amp(0.2);
    };

    sketch.draw = () => {
      sketch.background(139, 195, 193);
      let waveform = fft.waveform();
      sketch.noFill();
      sketch.beginShape();

      let xoff = start;
      for (let i = 0; i < waveform.length; i++){
      let x = sketch.map(i, 0, waveform.length, 0, sketch.width);
      // let y = ;
      let y = sketch.noise(xoff)* sketch.height;
      let z = sketch.map( waveform[i], -1, 1, 0, sketch.height)
      sketch.stroke(202, 255, 45);
      sketch.vertex(x,y);
      sketch.vertex(z, y);
        xoff += inc;
      }
      sketch.endShape();
      start += inc;
        var sparkle = {
            locationX: sketch.random(sketch.width),
            locationY: sketch.random(sketch.height),
            size: sketch.random(1, 6)
        }

        sketch.fill (215, 251, 56);
        sketch.noStroke();
        sketch.ellipse(sketch.mouseX, sketch.mouseY, sparkle.size, sparkle.size);
        sketch.ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
    }

    sketch.togglePlay= () =>{
      if (sound.isPlaying()) {
      sound.pause();
      } else {
      sound.loop();
      }
    }

    sketch.windowResized=()=>{
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    }
  }, parent);

  id++;
}
