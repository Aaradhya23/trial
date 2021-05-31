var wall,thickness,bullet; 
var speed,weight; 




function setup() {
  createCanvas(1600,400) 
  weight = random(30,52); bullet = createSprite(50,200,50,5);
  speed = random(223,321); bullet.velocityX=speed;
  thickness=random(22,83)
wall.createSprite(1200,200,thickness,height/2); }
function hascollided()



function draw() {

  background("black");

  if (hascollided(bullet,wall)) { bullet.velocityX=0; var damage = (0.5* weight * speed * speed) / (thickness * thickness * thickness); 

    if (damage>10) { wall.shapeColor="red"; }

    if (damage<10) { wall.shapeColor="green"; } } 

    drawSprites(); }


    function hascollided(lbullet,lwall) 
    { bulletRightEdge=lbullet.x+ lbullet.width; wallLeftEdge=lwall.x; 

      if (bulletRightEdge>=wallLeftEdge) 
      { return true; }
       return false; }


