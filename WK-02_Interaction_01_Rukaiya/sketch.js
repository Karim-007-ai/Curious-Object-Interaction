let boxX = 200;
let boxY = 220;
let boxZ = 275;
let boxI = 325;
let speed = 1;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(192);

//Right Earloop
let p1 = { x: 395, y: 255 };
let p2 = { x: 440, y: 300 };
let p3 = { x: 440, y: 325 };
let p4 = { x: 395, y: 345 };
noFill();
stroke(255);
strokeWeight(3);
curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);

//Left Earloop
let p5 = { x: 205, y: 255 };
let p6 = { x: 160, y: 300 };
let p7 = { x: 160, y: 325 };
let p8 = { x: 205, y: 345 };
noFill();
stroke(255);
strokeWeight(3);
curve(p5.x, p5.y, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y);
curve(p6.x, p6.y, p7.x, p7.y, p8.x, p8.y, p8.x, p8.y);

//Mask Body

  stroke (255);
  strokeWeight(4);
  fill (102,178,255);
  rect (boxX,250,200,100);
  if (boxX > 400) {
    speed = speed*-1
  } else  if (boxX< 0) {speed = speed*-1
  }
  boxX = boxX + speed;

  strokeWeight(2.3);
  fill (153,204,255);
  rect (boxY,250,160,25);
  rect (220,boxZ,160,25);
  rect (boxY,300,160,25);
  rect (220,boxI,160,25);

  if (boxY > width) {
    speed = speed*-1
  } else  if (boxY< 0) {speed = speed*-1
  }
  boxY = boxY + speed;

  if (boxZ > width) {
    speed = speed*-1
  } else  if (boxZ< 0) {speed = speed*-1
  }
  boxZ = boxZ + speed;

  if (boxI > width) {
    speed = speed*-1
  } else  if (boxI< 0) {speed = speed*-1
  }
  boxI = boxI + speed;

//Mask Details
  strokeWeight(2);
  ellipse (213,257,4,4);
  ellipse (213,343,4,4);
  ellipse (387,257,4,4);
  ellipse (387,343,4,4);

}
