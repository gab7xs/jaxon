var rua
var ruaimg
var corredor
var corredorimg


function preload(){
  //imagens pré-carregadas
   ruaimg = loadImage("path.png")
  corredorimg = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
   rua = createSprite(200,25)
   rua.addImage(ruaimg)
  
  corredor = createSprite(200, 300)
   corredor.addAnimation("correndo", corredorimg)
   corredor.scale = 0.03

  rua.velocityY = 5;
  
}

function draw() {
  background(0);
  drawSprites()

 if(rua.y > height){
 rua.y = 25;



 }


}
