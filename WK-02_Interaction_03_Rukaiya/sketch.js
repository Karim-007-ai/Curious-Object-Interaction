let angle = 0;

function setup() {
  createCanvas(600, 600);
 angleMode(DEGREES)
}

function draw() {
  background(192);

//Mask Body


  stroke (255);
  strokeWeight(4);
  fill (102,178,255);
  push();
  translate(200,250);
  rotate(angle);
  rect (0,0,200,100);
  pop();


  strokeWeight(2.3);
  fill (153,204,255);
  push();
  translate(220,250);
  rotate(angle);
  rect (0,0,160,25);
  pop();

  push();
  translate(220,275);
  rotate(angle);
  rect (0,0,160,25);
  pop();

  push();
  translate(220,300);
  rotate(angle);
  rect (0,0,160,25);
  pop();

  push();
  translate(220,325);
  rotate(angle);
  rect (0,0,160,25);
  pop();


  //Right Earloop
  let p1 = { x: 395, y: 255 };
  let p2 = { x: 440, y: 300 };
  let p3 = { x: 440, y: 325 };
  let p4 = { x: 395, y: 345 };
  noFill();
  stroke(255);
  strokeWeight(3);
  push();
  translate(p1,p2,p3,p4);
  rotate(angle);
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
  pop();

  //Left Earloop
  let p5 = { x: 205, y: 255 };
  let p6 = { x: 160, y: 300 };
  let p7 = { x: 160, y: 325 };
  let p8 = { x: 205, y: 345 };
  noFill();
  stroke(255);
  strokeWeight(3);
  push();
  translate(p5,p6,p7,p8);
  rotate(angle);
  curve(p5.x, p5.y, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
  curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y);
  curve(p6.x, p6.y, p7.x, p7.y, p8.x, p8.y, p8.x, p8.y);
  pop();

  //Mask Details
    ellipse (213,257,4,4);
    ellipse (213,343,4,4);
    ellipse (387,257,4,4);
    ellipse (387,343,4,4);
    angle++;

}
