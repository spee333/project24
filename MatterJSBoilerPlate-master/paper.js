class Paper
{
 constructor(x,y,radius)
 {
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:0.2

   }
   this.body=Bodies.circle(x,y,50,options);
   this.radius=50;
   World.add(world,this.body)
  }
   
   
   
   display(){
    var pos =this.body.position;
    rectMode(CENTER)
    fill("white");
   ellipse(pos.x,pos.y,this.radius);
  
  }
}
