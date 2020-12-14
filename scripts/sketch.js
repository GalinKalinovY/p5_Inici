
var pacman;
var roca;
var jocActual = new mapa();


function preload(){
  //loading all three images
//roca= loadImage ('../imatges/roca.png');
pacman = loadImage ('../imatges/pacman.png');
}

function setup() {

  createCanvas(ROWS*SIZE_IMAGE, COLUMNS*SIZE_IMAGE); // Size must be the first statement

}

function draw() {
background(51);
  image(pacman,mouseX,32,32,32);
  for(let i=0; i<jocActual.maze.length; i++)
  {
    if(jocActual.maze[i] === 1 ){
      console.log("rows ",jocActual.ROWS);

      let columnaActual = i % jocActual.ROWS ;//-1
      let filaActual = i/jocActual.COLUMNNS ;
      console.log("columnaActual ",columnaActual);
      console.log("filaActual ",filaActual);
      console.log("i ",i);
    //image(roca, COLUMNACTUAL*sizeimage,FILAACUAL*sizeimage );
    }else{
      console.log("estem a la posicio 0");
    }

  }




}
