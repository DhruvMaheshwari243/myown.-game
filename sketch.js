const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg;
var crane;
var hook;
var chain;
var garbage1,garbage2,garbage3;

function preload() {
   backGroundImg = loadImage("images/background.gif");

   garbage1 = loadImage("images/bottle.png");
   garbage2 = loadImage("images/poly-bag.png");
   garbage3 = loadImage("images/polythene.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-10,displayHeight-200);
    engine = Engine.create();
    world = engine.world;

    crane = new Crane(displayWidth-200,displayHeight/2 - 50);
    hook = new Hook(displayWidth-400,displayHeight/2 - 50);
    chain = new Chain(hook.body,crane.body,-130,-130);

    for(var i = 0; i < 5; i++){
        garbage = createSprite(random(300,1100),random(400,480));
        var randomNumber = Math.round(random(1,3))
        switch(randomNumber){
            case 1 : garbage.addImage(garbage1);
                    garbage.scale = 0.15;
                    break;
            case 2 : garbage.addImage(garbage2);
                    garbage.scale = 0.15;
                    break;
            case 3 : garbage.addImage(garbage3);
                    garbage.scale = 0.5;
                    break;
        }
    }
}

function draw(){
    background(backGroundImg);
    Engine.update(engine);

   crane.display();
   hook.display();
   chain.display();
   
   drawSprites();
}

function keyPressed(){
    if(keyCode === 37){
     //   Matter.Body.setStatic(crane.body,true);
        crane.body.position.x -= 15;
    }
    if(keyCode === 39){
      //  Matter.Body.setStatic(crane.body,true);
        crane.body.position.x += 15;
    }
}
