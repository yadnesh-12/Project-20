var bg, bgImg;
var cat,catImg,catImgSit,catImgFin;
var jerry, jerryImg; 
var collision=0;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImgSit=loadAnimation("images/cat1.png");
    catImgFin=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,1000,800);
    bg.addImage(bgImg);

    cat=createSprite(850,660,10,10);
    cat.addAnimation("sitting",catImgSit);
    cat.addAnimation("final",catImgFin);
    
    cat.scale=0.2;

    jerry=createSprite(300,630,10,10);
    jerry.addAnimation("standing",jerryImg);
    jerry.scale=0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    //cat.velocityX=-1;
    text(mouseX+","+mouseY,10,45);

    text("Collisions = "+collision,10,75);

    drawSprites();


}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("walking",catImg);
        cat.changeAnimation("walking");
    }
    
}
