class ThrowBlock{
    constructor(x,y){

        var options = {
            restitution: 0.5,
            density: 1,
            friction: 1
        }

        this.image = loadImage("circle.png");

        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }

    display(){
        push();
        image(this.image,this.body.position.x-20,this.body.position.y-20,40,40);
        pop();
    }
}