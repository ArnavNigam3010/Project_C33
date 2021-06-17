class Snow {
    constructor(){
        var options = {
            isStatic : false
        }
        this.body = Bodies.rectangle(random(0,800), 0, 20, 20, options);
        World.add(world, this.body);
        this.img = loadImage("snow4.webp");
    }

    display(){
        imageMode(CENTER);
        image(this.img, this.body.position.x, this.body.position.y,20,20);

    }
}