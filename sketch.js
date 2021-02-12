var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 80, 30);
  movingrect = createSprite(200, 200, 30, 80);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.velocityX = -2;
  movingrect.velocityX = 2;
}

function draw() {
  background(255,255,255);  

  //movingrect.x = mouseX;
  //movingrect.y = mouseY;

  fixedrect.debug = true;
  movingrect.debug = true;

  if(movingrect.x-fixedrect.x <= movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x <= movingrect.width/2+fixedrect.width/2
    && fixedrect.y-movingrect.y <= movingrect.height/2+fixedrect.height/2
    && movingrect.y-fixedrect.y <= movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  if(movingrect.x-fixedrect.x <= movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x <= movingrect.width/2+fixedrect.width/2){
      fixedrect.velocityX = fixedrect.velocityX*(-1);
      movingrect.velocityX = movingrect.velocityX*(-1);
    }

  if(fixedrect.y-movingrect.y <= movingrect.height/2+fixedrect.height/2
    && movingrect.y-fixedrect.y <= movingrect.height/2+fixedrect.height/2){
      fixedrect.velocityY = fixedrect.velocityY*(-1);
      movingrect.velocityY = movingrect.velocityY*(-1);
    }

  drawSprites();
}