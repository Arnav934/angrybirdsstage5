class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
                    }
                    
               this.sling1 = loadImage ("sprites/sling1.png")   
               this.sling2 = loadImage ("sprites/sling2.png")    
               this.sling3 = loadImage ("sprites/sling3.png")  
                    this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){//the bird is detached from the sling
        this.sling.bodyA = null;
    }

    display(){
        image (this. sling1,200,20);
        image (this.sling2,175,20);

     
        if(this.sling.bodyA){ //when bird is detached the sling will disappear
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
          
            stroke ("#301608"); //determined the hexadecimal code using color zilla          
            if (pointA.x<220) {//the bird is pulled backwards
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
                image (this.sling3,pointA.x-30,pointA.y-10,15,30);
                
            }
            else {//when the bird is pulled forward
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);   
                image (this.sling3,pointA.x+25,pointA.y-10,15,30);
                
            }
            pop();
                    }
    }
    
}