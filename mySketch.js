const xinc = 6;
const yinc = 100;

      function setup() {
        createCanvas(1200, 800);
				colorMode(HSB, 360, 100, 100);
				//noLoop();
      }

      function draw() {
       // background(42,122,62); //original nice green background in RGB change to HSB below
				background(135,66,48); // should be same as rgb 42,122,62
        noFill();
       // stroke(227, 190, 25); //original this seems to work
				strokeWeight(1);
				var off = 0;
				var damp = 0.3;
				frameRate(4);
				
				let gradient = drawingContext.createLinearGradient(width/2, 0, 
                                                     width/2, height);
        gradient.addColorStop(0, color(65,100,100));
       // gradient.addColorStop(0.5, color(250,100,100,100));
				gradient.addColorStop(1, color(120,100,100));
  
        //drawingContext.fillStyle = gradient;
       drawingContext.strokeStyle = gradient;
  

				for (x = 0; x <= width; x=x+xinc) { //figure out how to vary colors, within and extra to each line
					beginShape();
					curveVertex(x,0);
					for (y = 0; y <= height; y=y+yinc) {
						off = damp * random(-1*xinc/2, xinc/2);
						if (y != 0 && y!= height) {
							curveVertex(x + off, y);
						} else {
							curveVertex(x, y);
						}
					}
					curveVertex(x,height);
					endShape();
				}
		}		