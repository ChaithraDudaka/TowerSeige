
  class Box{
    constructor(x, y, w, h, angle) {
        //this.image = loadImage("sprites/wood1.png");
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        //this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        var angle = this.body.angle;
        /*push();
        this.visibility= this.visibility-5;
        tint(255, this.visibility);
        pop();
        */
       push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0 ,this.width, this.height);
        pop();
        }
      }
