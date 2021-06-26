class Stone{
	constructor(x,y,width,height)
	{
		var options={
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x,this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            rect()
			pop()
	}

}