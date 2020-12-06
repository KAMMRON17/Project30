class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visible=255;
    this.image = loadImage("sprites/enemy.png");
  }
display(){
  if(this.body.speed<3){
    super.display();

  }else{
    World.remove(world,this.body);
   push();
    var pos=this.body.position;
    this.visible=this.visible-5;
    tint(255,this.visible);
  image(this.image,pos.x,pos.y,50,50);
 
  pop();


}
}
};