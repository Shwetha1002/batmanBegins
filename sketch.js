const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var drop = []
var umbrella;
var maxDrops = 100;

function preload(){
    
}

function setup(){
 createCanvas(800,1000);
 engine = Engine.create();
	world = engine.world;
    //drop = new Drops(200,10, 10)
    umbrella = new Umbrella(500, 650, 100);

    for(var i = 0; i < maxDrops; i++){
        drop.push(new Drops(random(0,400), random(0,400)))
    }
    
}

function draw(){
background("navy")
    Engine.run(engine);
    //drop.display();
  
    for (var f = 0; f < drop.length; f++) {
        drop[f].display();
        drop[f].update();
        
      }
    umbrella.display();
    
    
    
    
}   

