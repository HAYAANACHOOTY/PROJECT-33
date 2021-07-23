class Snowfall{
    constructor(){
        var options={isStatic : false,
        restitution : 0.04}
        this.snowfall = Bodies.rectangle(random(1,600,10,10,options))
        World.add(world,this.snowfall)
    }
    display(){
    imageMode(CENTER)
    image(snowimg,this.snowfall.position.x,this.snowfall.position.y,10,10)
    }
}