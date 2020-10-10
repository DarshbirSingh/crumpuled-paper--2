class Dustbin { 
    constructor(x, y, width, height){
    var options = { isStatic:true} 
    this.body = Bodies.rectangle(x, y, width, height, options); 
    this.width = width; 
    this.image=loadImage("Images/dustbingreen.png")
    this.height = height;
    World.add(world, this.body); }
    display(){
    push();
     var pos=this.body.position
    rectMode(CENTER)
    fill("red")
    imageMode(CENTER)
    image(this.image,805 ,500 ,250 , 300);
    rect(pos.x,pos.y,this.width,this.height)
    pop()
    }
}