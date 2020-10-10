class Paper { 
    constructor(x, y){
    var options = { isStatic:false,restitution:0.3, friction:0.5, density:1.2 } 
    this.body = Bodies.circle(x, y, 70, options); 
    this.radius = 70; 
    this.image=loadImage("Images/paper.png")
    World.add(world, this.body); }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(3)
    imageMode(CENTER)
    image(this.image,150,600,70,70);
    pop()
    }
}