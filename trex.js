console.log("hola");
var trex;

//cargar las imagenes
function preload(){


}
//crear sprites
function setup(){
   Canvas(600,200);
   trex= createSprites(200,50,40,10);
}

//funcionamiento
function draw(){
     background(red);
     drawSprites();
}