class Paper{
constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        speed:0.5,
        density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
    World.add(world,this.body)
}
display(){
var pos=this.body.position
push ()
transalate (pos.x,pos.y)
fill (255,0,255)
ellipse(0,0,this.radius)
pop ();
}
}