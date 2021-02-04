
const s = ( p ) => {
  //var jocActual = new Game();
  //var roca =  new Rock();
  var rocaImg;
  var jocActual= new Game(10,10);
  var arrayRoca = [];
  var arrayMenjar = [];
  var pacman = new Pacman(5*jocActual.sizeImage,6*jocActual.sizeImage);
  p.preload = function() {
    //loading all three images
    menjarImg = p.loadImage ('imatges/menjar.JPG');
    rocaImg = p.loadImage ('imatges/roca.png');
    pacmanImg = p.loadImage ('imatges/pacman.png');
  }

  p.setup = function() {

    p.createCanvas(jocActual.rowGame*jocActual.sizeImage, jocActual.columnGame*jocActual.sizeImage); // Size must be the first statement

    for (let i=0 ; i < jocActual.maze.length;i++) {
       for (let j=0; j < jocActual.maze.length;j++) {
          if ( jocActual.maze[i][j] === 1){
              arrayRoca.push( new Roca(i*jocActual.sizeImage, j*jocActual.sizeImage));
            //  console.log("estem posant una roca");
          }else{
              //console.log("estem posant algo != de roca ");
          }
          if ( jocActual.maze[i][j] === 0){
              arrayMenjar.push( new Menjar(i*jocActual.sizeImage, j*jocActual.sizeImage));
              //console.log("estem posant el menjar");
          }else{
              //console.log("estem posant algo != de menjar ");
          } 
        } //for de les j
      } //for de les i

  }

  p.draw = function() {
    p.background(51);

    arrayRoca.forEach((item)=> {
  	   item.showInstanceMode(p,rocaImg);
    });
    arrayMenjar.forEach((item)=> {
       item.showInstanceMode(p,menjarImg);
    });

    //comprobar choque rocas
    for(let i=0; i< arrayRoca.length;i++){
      pacman.testCollideRock(p,arrayRoca[i]);
    }
    //comprobar choque comida
    for(let i=0; i< arrayMenjar.length;i++){
      if(pacman.testCollideMenjar(p,arrayMenjar[i])){
        arrayMenjar.splice(i,1);
        pacman.score = pacman.score +1;
      }else{
        console.log("No menja");
      }
    }
    //fer lo mateix amb els altres tipous de menjars

    //comprovarVictoria
    if(arrayMenjar.length === 0 || arrayMenjar===null){
      console.log("victoria");
        window.prompt('Victoria');
      //es pot fer un prompt
    }
    //comprovarDerrota
    if(pacman.lives === 0){
      console.log("derrota");
        window.prompt('Derrota');
      //es pot fer un prompt
    }
    //p.drawText(){
      //podem dibuixar el text
    //}
      pacman.showInstanceMode(p,pacmanImg);
  }
  /*switch (direction) {
    case 1: pacman.showInstanceMode(p,pacmanImg);
      break;
    case 2: pacman.showInstanceMode(p,pacmanImg);
      break;
    case 3: pacman.showInstanceMode(p,pacmanImg);
      break;
    case 4: pacman.showInstanceMode(p,pacmanImg);
      break;
    default:

  }*/

 p.keyTyped = function() {
      if (p.key === 'd'){
        console.log("Estem a dins de moure cap a la dreta");
        pacman.moveRight();
        console.log("coordx",pacman.coordX);
      }
      if (p.key === 'a'){
        console.log("Estem a dins de moure cap a l'esquerra");
        pacman.moveLeft();
        console.log("coordx",pacman.coordX);
      }
      if (p.key === 'w'){
        console.log("Estem a dins de moure cap a dalt");
        pacman.moveUp();
        console.log("coordx",pacman.coordY);
      }
      if (p.key === 's'){
        console.log("Estem a dins de moure cap a baix");
        pacman.moveDown();
        console.log("coordx",pacman.coordY);
      }
  }
/*  p.eatRock = function(arrayRoca){
    var distanceRockPacman = dist( this.x, pacman.coordY, arrayRoca.coordX, arrayRoca.coordY);
  };*/


}
var myp5 = new p5(s, 'myContainer');
