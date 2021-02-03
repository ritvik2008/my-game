function preload(){
  backgroundImg=loadImage("images/b1.jfif")
  bulletImg=loadImage("images/bu.png")
  ballonImg=loadImage("images/den.png")
  redballonImg=loadImage("images/redbn.png")
  greenballonImg=loadImage("images/g.png")
  yellowballonImg=loadImage("images/y.png")
  blueballonImg=loadImage("images/bb.png")
 awmgun= loadImage("images/gun.png")
  
}

function setup() {
  createCanvas(1200, 600);
}
var bullet=createSprite(-5,-5,1,1);

var ballon = createSprite(345,35,10,10);
ballon.addImage(ballonImg)
ballon.scale = 0.3
var redballon = createSprite(345,130,10,10);
redballon.addImage(redballonImg)
redballon.scale = 0.1
var greenballon = createSprite(348,200,10,10);
greenballon.addImage(greenballonImg)
greenballon.scale = 0.3
var yellowballon = createSprite(345,270,10,10);
yellowballon.addImage(yellowballonImg)
yellowballon.scale = 0.3
var blueballon = createSprite(345,350,10,10);
blueballon.addImage(blueballonImg)
blueballon.scale = 0.17

var awmgun = createSprite(73,214,10,10);
awmgun.addImage(awmgun)
awmgun.scale = 0.3



function draw(){
 background(backgroundImg)
 
 awmgun.y = World.mouseY
 if (keyDown("space")) {
   fireBullet()
 }
if(bullet.isTouching(ballon)){
   ballon.visible=false
 }
if(bullet.isTouching(redballon)){
  redballon.visible=false
}
if(bullet.isTouching(greenballon)){
  greenballon.visible=false
}
if(bullet.isTouching(yellowballon)){
  yellowballon.visible=false
}
if( bullet.isTouching(blueballon)){
  blueballon.visible=false
}

text("who invented the exam", 161,22 )


    drawSprites()
 
}
function fireBullet(){
 bullet = createSprite(131,208,10,10)
bullet.y=World.mouseY
bullet.setAnimation("bu")
bullet.scale= 0.1
bullet.velocityX=6

}
