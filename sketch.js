
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,ig

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800,400)
  monkey=createSprite(30,250,10,10)
  monkey.addAnimation("moving" ,monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(30,300,1000,10)
  ground.velocityX=-7
  ground.x=ground.width/2
  console.log(ground.x)
  
  ig=createSprite(30,302,1000,10)
   ig.velocityX=-7
  ig.x=ig.width/2
  ig.visible = false;
  
 
 
  
}


function draw() {
  background("white")
  text("survival time: "+score ,100,50);
  survivalTime=Math.ceil(frameCount/frameRate())
  
  
   if(keyDown("space") && monkey.y >= 250) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (ig.x < 100){
      ig.x = ig.width/2;
    }
  
 monkey.collide(ig)
  
  spawnBanana();
  spawnObstacles();
  drawSprites();

  
}
function spawnBanana() {
 
  if (frameCount % 80 === 0) {
    banana=createSprite(100,240,30,30)
  
 
     banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage)
     banana.scale=0.1 
     banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //adjust the depth
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
  }
}

function spawnObstacles() {
 
  if (frameCount % 300 === 0) {
    obstical=createSprite(100,275,30,30)
obstical.addImage(obstaceImage)
  obstical.scale=0.1
  
obstical.velocityX = -3;
    
     //assign lifetime to the variable
obstical.lifetime = 500;
    
    
   
  
  }
}





