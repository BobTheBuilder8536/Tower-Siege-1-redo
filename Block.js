class Block{
    constructor(x,y,color){

        var options = {
            restitution: 0.4,
            friction: 0.65,
            density: 0.2
        }
        this.color = color;
        this.x = x;
        this.y = y;
        
        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);        
    }
    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,40,40);
        pop();
    }
}