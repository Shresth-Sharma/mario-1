var back,back1,back2,back3,back4;
var mar,mar1,mar2;
var inv;
var backGround;
var score=0;
var kidda,kidda1,kiddaG;
var mob,mob1,mob2;
var END=0;
var PLAY=1;
var START=2;
var gamestate=START;
var GameOver,GameOverImage;
var win,win1;
var key1,key2;
function preload(){
back1=loadImage("New-Super-Mario-Bros.Unused-Tilesets-And-Backgrounds-The-.png")
  //mar2=loadAnimation("Untitled-2.png","Untitled - Copy.png")
  mar2=loadAnimation("mario4.png","mario3.png")
  mar1=loadImage("mario3.png")
  mob1=loadImage("mushroom.png")
  GameOverImage=loadImage("GAMEOVER.png")
  kidda1=loadImage("mushroom1.png")
  win1=loadImage("WIN.png")
  key2=loadImage("mario game.png")
}


function setup() {
 createCanvas(600,300);
  back2=createSprite(1050,150,600,300);
  back2.addImage("back",back1)
  back2.scale=1.17
  
  back3=createSprite(750,150,600,300);
  back3.addImage("back",back1)
  back3.scale=1.17
  
  back4=createSprite(450,150,600,300);
  back4.addImage("back",back1)
  back4.scale=1.17
  
  back=createSprite(150,150,600,300);
  back.addImage("back",back1)
  back.scale=1.17
  
  
  mar=createSprite(50,150,10,10)
  mar.addImage("mar",mar1);
  mar.scale=0.1
  
  inv=createSprite(300,270,600,5)
  inv.visible=false;
  
  GameOver=createSprite(300,150,10,10);
  GameOver.addImage("k",GameOverImage)
  GameOver.visible=false;
  
  win=createSprite(300,150,10,10);
  win.addImage("kf",win1)
  win.visible=false;
  
  key1=createSprite(300,150,10,10);
  key1.addImage("key2",key2)
  key1.scale=0.8
  key1.visible=true;
  
  backGround=createGroup();
  backGround.add(back);
  backGround.add(back2);
  backGround.add(back3);
  backGround.add(back4);
  kiddaG=createGroup();
  mob2=createGroup();
  
}

function draw() {
  
  background("red")
 
  backGround.setVelocityEach(0,0);
   mar.velocityY=mar.velocityY+1
  
  mar.collide(inv);
  if(gamestate===START){
    if (keyWentDown("enter")){
      gamestate=PLAY;
      
  
    }
   
  }
  if (gamestate===PLAY){
     key1.visible=false;
        if (mar.y-kiddaG.y<kiddaG.height/2+mar.height/2){
        score=score+1
        }
    if (keyDown("right")){
    backGround.setVelocityEach(-5,0);
    
    }
    if(keyWentDown("right")){
    mar.addAnimation("mar",mar2);
    }
    if (keyWentUp("right")){
    mar.addImage("mar",mar1);
      if(score>5){
        win.visible=true;
        kiddaG.destroyEach();
        kiddaG.setVelocityEach(0,0);
      }
      
  
 
    }
  }
      if(gamestate===END){
          mar.addImage("mar",mar1);
        GameOver.visible=true;
      }
  console.log(score)
  if(back.x<-150){
    back.x=750
  }
   if (back2.x<-150){
     back2.x=750
   }
  if(back3.x<-150){
    back3.x=750
  }
  if(back4.x<-150){
    back4.x=750
  }
  
  if(keyDown("space")&&mar.y>220){
      mar.velocityY=-10
       }
  kiddda()
  mobb()
  //kidda.velocityY=kidda.velocityY+1
  kiddaG.setVelocityYEach(5)
  kiddaG.collide(inv)
  if(mar.isTouching(kiddaG)){
    gamestate=END
  }
  if(mar.isTouching(mob2)){
    score=score+1
    mob2.destroyEach();
  }
 drawSprites();
  textSize(30)
  fill("red")
  stroke("green")
  strokeWeight(20);
   text("Score="+score,200,25)
 
}

function kiddda(){
  if (gamestate===PLAY&&frameCount%40===0){
    kidda=createSprite(650,220,10,10);
    kidda.addImage("kh",kidda1)
    kidda.velocityX=-26 ;
    kidda.scale=0.15
    kidda.collide(inv);
    kiddaG.add(kidda);
    
  }
}
function mobb(){
  if (gamestate===PLAY&&frameCount%110===0){
    mob=createSprite(650,250,10,10);
    mob.addImage("kh",mob1)
    mob.velocityX=-26 ;
    mob.scale=0.15
    mob.collide(inv);
    mob2.add(mob);
    
  }
}














