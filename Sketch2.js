function setup() 
{
	createCanvas(750, 200);
}

function draw() 
{
	let diameter = 30;
	let radius = 15;
	
	background(32);

	for (let i = 0; i <= width; i += diameter) 
	{
		
		if (mouseX > i - radius && mouseX < i + radius && mouseY > height / 2 - radius && mouseY < height / 2 + radius) 
		{
			fill(30, 200, 200); 
		} 
		else 
		{
			fill(255);
		}
		ellipse(i, height / 2, diameter, diameter);
	}
}