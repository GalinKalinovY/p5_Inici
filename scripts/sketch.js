/*
var pacman;
var rocaImg;
var jocActual = new Game();
//var roca =  new Rock();
//var nouJoc= new Game(4,4);
var arrayRoca = [];

function preload(){
  //loading all three images
  menjarImg = loadImage ('../imatges/menjar.JPG');
  rocaImg = loadImage ('../imatges/roca.png');
  pacman = loadImage ('../imatges/pacman.png');
}

function setup() {

  createCanvas(jocActual.rowGame*jocActual.sizeImage, jocActual.columnGame*jocActual.sizeImage); // Size must be the first statement

  for (let i=0 ; i < jocActual.maze.length;i++) {
     for (let j=0; j < jocActual.maze.length;j++) {
        if ( jocActual.maze[i][j] === 1){
            arrayRoca.push( new Roca(i*jocActual.sizeImage, j*jocActual.sizeImage));
            console.log("estem posant una roca");
        }else{
            console.log("estem posant algo != de roca ");
        }
        if ( jocActual.maze[i][j] === 0){
            arrayRoca.push( new Menjar(i*jocActual.sizeImage, j*jocActual.sizeImage));
            console.log("estem posant el menjar");
        }else{
            console.log("estem posant algo != de menjar ");
        }
      } //for de les j
    } //for de les i

}

function draw() {
  background(51);
  // 2 maneres diferents de fer-ho, amb un for i recorrer la longiud o amb un for each
  for(let i=0; i<arrayRoca.length; i++)
    {
      arrayRoca[i].show();
    }

  arrayRoca.forEach((item)=> {
	   item.show();
   });

  //image(pacman,mouseX,32,32,32);
  //roca.show();

  for(let i=0; i<jocActual.maze.length; i++)
  {
    if(jocActual.maze[i] === 1 ){
      console.log("rows ",jocActual.ROWS);

      let columnaActual = i % jocActual.ROWS ;//-1
      let filaActual = i / jocActual.COLUMNS ;
      console.log("columnaActual ",columnaActual);
      console.log("filaActual ",filaActual);
      console.log("i ",i);
      image(roca, columnaActual*SIZE_IMAGE,filaActual*SIZE_IMAGE );
    }else{
      console.log("estem a la posicio 0");
    }
    noLoop();
  }


}
*/

var rocaImg;

const s = ( p ) => {
  var pacman;
  var jocActual = new Game();
  //var roca =  new Rock();
  //var nouJoc= new Game(4,4);
  var arrayRoca = [];


  p.preload = function() {
    //loading all three images
    menjarImg = p.loadImage ('../imatges/menjar.JPG');
    rocaImg = p.loadImage ('../imatges/roca.png');
    pacman = p.loadImage ('../imatges/pacman.png');
  }

  p.setup = function() {

    p.createCanvas(jocActual.rowGame*jocActual.sizeImage, jocActual.columnGame*jocActual.sizeImage); // Size must be the first statement

    for (let i=0 ; i < jocActual.maze.length;i++) {
       for (let j=0; j < jocActual.maze.length;j++) {
          if ( jocActual.maze[i][j] === 1){
              arrayRoca.push( new Roca(i*jocActual.sizeImage, j*jocActual.sizeImage));
              console.log("estem posant una roca");
          }else{
              console.log("estem posant algo != de roca ");
          }
          if ( jocActual.maze[i][j] === 0){
              arrayRoca.push( new Menjar(i*jocActual.sizeImage, j*jocActual.sizeImage));
              console.log("estem posant el menjar");
          }else{
              console.log("estem posant algo != de menjar ");
          }
        } //for de les j
      } //for de les i

  }

  p.draw = function() {
    p.background(51);

    arrayRoca.forEach((item)=> {
  	   item.show(p);
     });

  }
}
var myp5 = new p5(s, 'myContainer');
