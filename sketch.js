//constants
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;

//variables
var engine, world;

var drops=[];
var maxDrops = 100; 
var walkframeAni, walking;
var thunderSprite, thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var rand;





function preload(){
    walkframeAni = loadImage("/images/Walking Frame/walking_1.png")
    thunderImg1 = loadImage("/images/thunderbolt/1.png");
    thunderImg1 = loadImage("/images/thunderbolt/2.png");
    thunderImg1 = loadImage("/images/thunderbolt/3.png");
    thunderImg1 = loadImage("/images/thunderbolt/4.png");
}

function setup(){
   createCanvas (1000,1000);
   
   engine = Engine.create();
   world = engine.world;
  
   for(var i = 0; i<=maxDrops; i++) {
       drops.push(new Rain(random(0,1000), random(0,1000)));
   }

   walking = Bodies.circle(487, 870, 65*2, {isStatic:true, friction: 0.1});
   World.add(world, walking);
   
    
}

function draw(){
    Engine.update(engine);
    background(0);

    
        for(var a = 0; a < 100; a++) {
        drops[a].display();
        drops[a].updateDrops()

        }
    
    imageMode(CENTER);    
    image(walkframeAni, walking.position.x, walking.position.y, 65*4+50, 65*4+50);
    
    
        
   createThunder();
    
    

    drawSprites();
    
}   
function createThunder() {
    rand = Math.round(random(1,4)) 
    if(frameCount % 80 === 0) {
    thunderSprite = createSprite(Math.round(random(500,1000)), 50)
        switch(rand) {
            case 1: thunderSprite.addImage(thunderImg1);
            break;
            case 2: thunderSprite.addImage(thunderImg2);
            break;
            case 3: thunderSprite.addImage(thunderImg3);
            break;
            default: break;
        }
        thunderSprite.scale = 1.5;
    }
}

