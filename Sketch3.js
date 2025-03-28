

let pointX = [];
pointX.length = 100;
let pointY = [];
pointY.length = 100;

let move = 1.25;

function setup() 
{
	createCanvas(800, 800);

	
	for (let i = 0; i < pointX.length; i++) 
	{
		pointX[i] = random(width);
		pointY[i] = random(height);
	}
}

function draw() 
{
	background(0);

	
	stroke(100);
	noFill();

	
	for (let i = 0; i < pointX.length; i++) 
	{
		ellipse(pointX[i] + move, pointY[i], 20, 20);
	}

	
	stroke(255, 0, 0);
	for (let i = 0; i < pointX.length; i++) 
	{
		line(pointX[i], pointY[i], mouseX, mouseY);

		
		if (pointX[i] + move > width * 2 || pointX[i] + move < -width) 
		{
			move = -move;
		} 
		else 
		{
			pointX[i] += move;
		}
	}
}