	let speed = 0.05;	
	let cloudx = 100;
	let cloudy = 100;
	var colorValue
	let counter = 0;
	let myColor;

function setup() {
	createCanvas(500, 500);
	frameRate(60);
	colorValue = 'white';
	myColor = color(random(255), random(255), random(255)); //Sets the color value to random on all 3 r,g,b scales
}

function draw() { 
	
	//Background color changes based on position of mouse
	background(mouseX,150,mouseY);
	
	//Setting speed of clouds
	let deltaX = speed * deltaTime;
	
	//Relating speed to x value
	cloudx+=deltaX
	
	//Resets of clouds hit a certain number
	if (cloudx > 400)  {
    cloudx = 0;
  }
	
	//Blade
	rectMode(CENTER);
	fill(colorValue);
	rect(width/2,height/2,50,200);
	
	//Inner Blade
	rectMode(CENTER);
	strokeWeight(3);
	fill(153,0,0);
	rect(width/2,height/2,25,175);
	strokeWeight(1);
	
	//Handle
	rectMode(CENTER);
	fill(51,0,0);
	rect(width/2,height/4,25,100);
	
	//Butt
	ellipseMode(CENTER);
	fill(0,0,0);
	ellipse(width/2,height/6, 50, 50);
	
	//Guard
	fill(64,64,64);
	triangle(200, 150, width/2, height/2.25, 300, 150);
	
	//Tip
	fill(255,0,127);
	triangle(225, 350, width/2, height/1.2, 275, 350);
	
	//Rock
	ellipseMode(CENTER);
	fill(125,125,125);
	ellipse(width/2,height/1.15,200,200);
	
	//Grass
	rectMode(CENTER);
	fill(0,255,0);
	rect(width/2,height,500,150);
	
	//Dirt
	rectMode(CENTER);
	fill(139,69,19);
	rect(width/2,height,500,100);
	
	//Runs function Clouds with (x,y) coords
  Clouds(cloudx, cloudy-50);
	
  //Same thing but +100 units on (x,y)
	Clouds(cloudx + 100, cloudy + 100);
	
}

//Pressing <- or -> will change the color of a certain part of the sword
function keyPressed() {
  if (keyCode === LEFT_ARROW) 
	{
    colorValue = 255;
  } 
	else if (keyCode === RIGHT_ARROW)
	{
		colorValue = 125;
	}
	else
	{
    colorValue = 0;
  }
}

//Function that creates the clouds
function Clouds(cloudx, cloudy) {
	fill(myColor);
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
	
	//Timer for the change in color
	if (counter > 100) {
    //Switch the colour to a new random colour:
    myColor = color(random(255), random(255), random(255));

    //Reset the counter to zero:
    counter = 0;
  }
	
  //At the end of each frame increase the counter
  counter = counter + 1;
}
