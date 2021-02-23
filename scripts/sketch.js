
const s = ( p ) => {
  //var jocActual = new Game();
  //var roca =  new Rock();
  var rocaImg;
  var jocActual= new Game(19,21);
  var arrayRoca = [];
  var arrayMenjar = [];
  var pacman = new Pacman(9*jocActual.sizeImage,10*jocActual.sizeImage);

  var font,fontsize= 25;
  var fontGameOver = 35;
  var timer = 120;
  var seconds, minutes;
  var button;

  p.preload = function() {
    //loading all three images
    menjarImg = p.loadImage ('imatges/menjarPunts.png');
    rocaImg = p.loadImage ('imatges/cubitoLava.png');
    pacmanImgRight = p.loadImage ('imatges/pacman1.gif');
    pacmanImgLeft = p.loadImage ('imatges/pacman4.gif');
    pacmanImgUp = p.loadImage ('imatges/pacman3.gif');
    pacmanImgDown = p.loadImage ('imatges/pacman2.gif');
    font = p.loadFont('fonts/Permanent_Marker/PermanentMarker-Regular.ttf');
  }

  p.setup = function() {

    p.createCanvas(jocActual.rowGame*jocActual.sizeImage, jocActual.columnGame*jocActual.sizeImage); // Size must be the first statement
      button = p.createButton('Reiniciar Partida');
      button.position(19, 19);
      button.mousePressed(p.restartGame);

      p.textFont(font);
      p.textSize(fontsize);
      setInterval(p.comptadorText, 1000);

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

    p.drawText = function()
    {//text per els punts i les vides
        p.fill(255);
        p.text('Punts: ', 10, 647);
        p.text(pacman.score, 120, 647);

        p.text('Vides : ', 470, 647);
        p.text(pacman.lives, 570, 647);
    }
    p.comptadorText = function (){

        /*if (p.frameCount % 60 == 0 && timer > 0) {
            timer -=1;
        }
        if (timer == 0) {
            p.gameOver();
        }*/
        if (p.frameCount % 60 == 0 && timer > 0) {
            timer-=1;
        }
        minutes = p.floor(timer/60);
        seconds = timer % 60;
        p.text(minutes+":"+seconds, 300, 647);

        if (timer < 1) {
            p.gameOver();
        }
    }
    p.victory = function (){
        p.fill('green');
        p.textSize(fontGameOver);
        p.text("VICTORY!!!", 200, 647);
        p.noLoop();
    }
    p.gameOver = function (){
        p.fill('red');
        p.textSize(fontGameOver);
        p.text("GAME OVER", 200, 647);
        p.noLoop();
        //p.restartGame();
    }
    p.pacmanSpawn= function (){
       pacman = new Pacman(9*jocActual.sizeImage,10*jocActual.sizeImage);
        p.setup();
        p.draw();
        console.log("dibuixem el segon pacman");
    }

    p.restartGame= function (){
        pacman = new Pacman(9*jocActual.sizeImage,10*jocActual.sizeImage);
        pacman.lives= 3;
        pacman.score= 0;
        p.loop();
        p.clear();
        p.setup();
        p.draw();
        timer=120;
    }

  p.draw = function() {
    p.background(0);

    arrayRoca.forEach((item)=> {
  	   item.showInstanceMode(p,rocaImg);
    });
    arrayMenjar.forEach((item)=> {
       item.showInstanceMode(p,menjarImg);
    });

    //comprobar choque rocas
    for(let i=0; i< arrayRoca.length;i++){
      if(pacman.testCollideRock(p,arrayRoca[i])) {
          //tornar el pacman a la posicio de inici treient li una vida i fent el soroll del xoc.
          p.pacmanSpawn();
      }
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
      //funcoins de dubuixar al canvas
      p.drawText();
      p.comptadorText();

    //fer lo mateix amb els altres tipus de menjars

    //comprovarVictoria
    if(arrayMenjar.length === 0 || arrayMenjar===null){
      console.log("victoria");
      p.victory();
      //es pot fer un prompt
    }
    //comprovarDerrota
    if(pacman.lives === 0){
      console.log("derrota");
      p.gameOver();
      p.noLoop();
    }

      switch (pacman.direction) {
        case 0: pacman.showInstanceMode(p,pacmanImgRight);
          break;
        case 1: pacman.showInstanceMode(p,pacmanImgDown);
          break;
        case 2: pacman.showInstanceMode(p,pacmanImgLeft);
          break;
        case 3: pacman.showInstanceMode(p,pacmanImgUp);
          break;
        default:

      }

  }



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
