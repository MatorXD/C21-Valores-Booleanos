var rectangleF,rectangleM;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,400);
  rectangleF = createSprite(200, 200, 50, 80);
  rectangleM = createSprite(400,200,80,50);
  rectangleM.shapeColor = "green";
  rectangleF.shapeColor = "blue";
  rectangleM.debug=true;
  rectangleF.debug=true;
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "pink";
  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "pink";
  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "pink";
  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  
  rectangleM.x = World.mouseX;
  rectangleM.y = World.mouseY;
  console.log(rectangleM.x - rectangleF.x);
  if(isTouching(rectangleM,obj1)){
    rectangleM.shapeColor= "red";
    obj1.shapeColor= "red"; 
  }
  else{
    rectangleM.shapeColor= "orange";
    obj1.shapeColor= "purple";
  }
  
  
  
  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2&&
    obj2.x-obj1.x<obj2.width/2+obj1.width/2&&
    obj1.y-obj2.y<obj2.width/2+obj1.width/2&&
    obj2.y-obj2.y<obj2.width/2+obj1.width/2){
      return true;
 }
 else{
   return false;
 }
}
