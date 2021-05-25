class Box{
constructor(x,y,width,height){
    var options = {
    restitution:0.8,
    friction:0.3,
    dencity:1.0,
       }
       this.body= Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body)  
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
rectMode(CENTER);
fill("lightblue");
stroke("blue")
strokeWeight(4)
rect(pos.x,pos.y,this.width,this.height);
pop();
}
}