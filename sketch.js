const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,iron,rubber,hammer;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane= new Plane(1200,height,1200,20)

    stone= new Stone(700,320,100,100);
    iron= new Iron(300,350);
    rubber= new Rubber(600,450,70);
    hammer= new Hammer(20,100);

    
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();

    iron.display();
    
}