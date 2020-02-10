const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   // getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    box1 = new Box(700,360,70,70);
    box2 = new Box(920,380,70,70);
    
   
    box3 = new Box(700,340,70,70);
    box4 = new Box(920,340,70,70);
   

   
    box5 = new Box(810,380,70,70);
    

    bird = new Bird(200,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
  
        background(0);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();

    box3.display();
    box4.display();
   
   

    box5.display();
   
    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){

        bird.trajectory=[];
        Matter.Body.setPosition(bird.body, {x: 200 , y:200});
        console.log(bird.trajectory)
       slingshot.attach(bird.body);
    }
}

/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/