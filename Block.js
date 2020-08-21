class blocks {
  constructor(x,y) {
    var gravity = {
      'isStatic': false,
    }
    this.body = Bodies.rectangle(x,y,25,30,gravity);
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      rect(pos.x, pos.y,30,35);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       pop();
     }
    
  }
}