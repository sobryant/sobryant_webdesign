alert("Hello");
// function setup() {
//   createCanvas(800,400);
//   createSprite(400, 200, 50, 50);
// }

// function draw() {
//   background(255,255,255);  
//   drawSprites();
// }

//Moving sprites
var ghost, circle;
var direction = 90; //circle initial direction moving down

function setup() {
  createCanvas(1000,1000);
  
  //create the sprites
  ghost = createSprite(600, 200, 10, 10);
  ghost.addAnimation("floating");
  
  ghost1 = createSprite(600, 200, 10, 10);
  ghost1.addAnimation("floating");
  
 
  ghost2 = createSprite(600, 200, 10, 10);
  ghost2.addAnimation("floating");
  
   ghost3 = createSprite(600, 200, 10, 10);
  ghost3.addAnimation("floating");
  
   ghost4 = createSprite(600, 200, 10, 10);
  ghost4.addAnimation("floating");
  
   ghost5 = createSprite(600, 200, 10, 10);
  ghost5.addAnimation("floating");
  
  
}

function draw() {
  background(255,255,255);  
  
  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle

  ellipse(0,0, 100);
  
  //you can rotate the sprite according the directio it is moving
  //uncomment this
  //circle.rotateToDirection = true;
  
  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  ghost.attractionPoint(.2, mouseX, mouseY);
   ghost1.attractionPoint(.3, mouseX, mouseY);
    ghost2.attractionPoint(.1, mouseX, mouseY);
    ghost3.attractionPoint(.15, mouseX, mouseY);
    ghost4.attractionPoint(.25, mouseX, mouseY);
    ghost5.attractionPoint(.35, mouseX, mouseY);
  //since the force keeps incrementing the speed you can 
  //set a limit to it with maxSpeed
  ghost.maxSpeed = 5;
  ghost1.maxSpeed = 10;
  ghost2.maxSpeed = 7;
  ghost3.maxSpeed = 12;
  ghost4.maxSpeed = 2;
  ghost5.maxSpeed = 17;
  
  //draw the sprite
  drawSprites();
}
