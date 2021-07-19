class Boat{
    constructor(x,y,width,height,Bpos){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
          };
          this.width = width;
          this.height = height;
          this.Bpos = Bpos;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options);
          World.add(world, this.body);
          this.image = loadImage("./assets/boat.png");

    }
    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.Bpos, this.width, this.height);
        pop();

    }
}