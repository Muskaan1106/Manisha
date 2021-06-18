const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2, stand3;
var ball;
var slingShot;
var polygon_img;
var score=0
var backgroundImg
function preload(){
  polygon_img = loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
    engine = Engine.create();
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  polygon = Bodies.circle(50,50,20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

 
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);
  stand1 = new Stand(390,300,250,10);
 

  
  

}
function draw() {
  if(backgroundImg)
  background(backgroundImg)
 noStroke()
 fill("red")
  text("Score "+ score,width-300,50)

  

  slingShot.display();
  ground.display();
  stand1.display();
  

  strokeWeight(2);
  stroke(15);
  fill("brown");
  block1.display();
  block1.score();

  block2.display();
  block2.score();
  block3.display();

  block3.score();
  block4.display();
  block4.score();
  block5.display();

  block5.score();
  block6.display();

  block6.score();
  block7.display();

  block7.score();
  fill("yellow");
  block8.display();

  block8.score();
  block9.display();

  block9.score();
  block10.display();


  block10.score();

  block11.display();

  block11.score();
  block12.display();

  block12.score();
  fill("black");
  block13.display();
  block14.display();

  block13.score();
  block14.score();
  block15.display();

  block15.score();
  fill("white");
  block16.display()
  block16.score();


 
 

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}



async function getBackgroundImg(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON =await response.json()

  var datetime=responseJSON.datetime;
  var hour  = datetime.slice(11,13)

  if(hour>=06 && hour<=18){
    bg="bg.jpg"
  }
  else{
    bg="bg2.jpg"
  }
  backgroundImg=loadImage(bg)
  console.log(backgroundImg)
}