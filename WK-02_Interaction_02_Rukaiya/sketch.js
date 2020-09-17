let boxDim = 50 ;
let boxScale = 1;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(192);

//Mask Body

  stroke (255);
  strokeWeight(4);
  fill (102,178,255);
  rect (200,250,200,100);

  strokeWeight(2.3);
  fill (153,204,255);
  rect (220,250,160,25);
  rect (220,275,160,25);
  rect (220,300,160,25);
  rect (220,325,160,25);

//Mask Details
  strokeWeight(2);
  ellipse (213,257,4,4);
  ellipse (213,343,4,4);
  ellipse (387,257,4,4);
  ellipse (387,343,4,4);

  //Right Earloop
  let p1 = { x: 395, y: 255 };
  let p2 = { x: 440, y: 300 };
  let p3 = { x: 440, y: 325 };
  let p4 = { x: 395, y: 345 };
  noFill();
  stroke(255);
  strokeWeight(3);

  if (boxDim > 50 || boxDim <49) {
      boxScale = boxScale*-1;
    } boxDim = boxDim + boxScale;
  push();
  scale(boxScale);

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


}
