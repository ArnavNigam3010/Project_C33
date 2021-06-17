const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, array = [];
var kid;

function preload(){
  bg = loadImage("snow1.jpg");
  kid = loadImage("kid1.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  kid1 = createSprite(300, 280, 30, 40);
  kid1.addImage(kid, "kid");
  kid1.scale = 0.25;
 
}

function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%10 === 0){
    array.push(snow = new Snow());
    console.log(array);
  }

  for(var i = 0; i < array.length; i++){
    array[i].display();
  }

    
  drawSprites();
}