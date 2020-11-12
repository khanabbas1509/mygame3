const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg
var bg2


var GREENTEAM,BLUETEAM,YELLOWTEAM,REDTEAM;
var player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13,player14,player15,
player16;

var groupgreen = new Group();
var groupblue = new Group();
var groupyellow = new Group();
var groupred = new Group();

function preload(){
bg = loadImage("background.jpg")
}
function setup(){
	createCanvas(1200,1200)
	engine = Engine.create();
    world = engine.world;

    bg2 = createSprite(200,200,1200,1200);
	bg2.addImage(bg);
	player1 = new GreenPlayer(200,200,10,10);
	//player2 = new GreenPlayer(200,200,10,10);
	//player3 = new GreenPlayer(200,200,10,10);
	//player4 = new GreenPlayer(200,200,10,10);
	//player5 = new RedPlayer(200,200,10,10);
	//player6 = new  RedPlayer(200,200,10,10);
	//player7 = new  RedPlayer(200,200,10,10);
	//player8 = new  RedPlayer(200,200,10,10);
	//player9 = new YellowPlayer(200,200,10,10);
	//player10 = new YellowPlayer(200,200,10,10);
	//player11 = new YellowPlayer(200,200,10,10);
	//player12 = new YellowPlayer(200,200,10,10);
	//player13 = new BluePlayer(200,200,10,10);
	//player14 = new BluePlayer(200,200,10,10);
	//player15 = new BluePlayer(200,200,10,10);
	//player16 = new BluePlayer(200,200,10,10);
	//ground = new Ground (200,200,10,10); 
	player100 = createSprite(200,200,10,10);
	player200 = createSprite(200,200,10,10)
}

function draw(){
 drawSprites();
 Engine.update(engine);
 bg2.display();
 player1.display();
 //player2.display();
 //player3.display();
 //player4.display();
 //player4.display();
 //player5.display();
 //player6.display();
 //player6.display();
 //player7.display();
 //player8.display();
 //player9.display();
 //player10.display();
 //player11.display();
 //player12.display();
 //player13.display();
 //player14.display();
 //player15.display();
 //player16.display();
 //ground.display();

 groupgreen.add(player1);
 groupgreen.add(player2);
 groupgreen.add(player3);
 groupgreen.add(player4);
}
function keydown(){
	if (keydown(up_Arrow)){
	groupgreen.velocityX = -1
	}

	if (keydown(down_Arrow)){
		groupgreen.velocityX = 1
		 }

		 if (keydown(right_Arrow)){
			groupgreen.velocityY = -2
			 }

			 if (keydown(left_Arrow)){
				groupgreen.velocityY = 2
				 }

				 if (keydown(up_Arrow)){
					groupblue.velocityX = -1
					 }
				 
					 if (keydown(down_Arrow)){
						groupblue.velocityX = 1
						  }
				 
						  if (keydown(right_Arrow)){
							groupblue.velocityY = -2
							  }
				 
							  if (keydown(left_Arrow)){
								groupblue.velocityY = 2
								  }
								  if (keydown(up_Arrow)){
									groupred.velocityX = -1
									 }
								 
									 if (keydown(down_Arrow)){
										groupred.velocityX = 1
										  }
								 
										  if (keydown(right_Arrow)){
											groupred.velocityY = -2
											  }
								 
											  if (keydown(left_Arrow)){
												groupred.velocityY = 2
												  }
												  if (keydown(up_Arrow)){
													groupyellow.velocityX = -1
													 }
												 
													 if (keydown(down_Arrow)){
														groupyellow.velocityX = 1
														  }
												 
														  if (keydown(right_Arrow)){
															groupyellow.velocityY = -2
															  }
												 
															  if (keydown(left_Arrow)){
																groupyellow.velocityY = 2
																  }
}
