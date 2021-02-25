
const s = ( p ) => {
  //var jocActual = new Game();
  //var roca =  new Rock();
  var rocaImg;
  var jocActual= new Game(19,21);
  var arrayRoca = [];
  var arrayMenjar = [];
  var pacman;

  var font,fontsize= 25;
  var fontGameOver = 35;
  var timer;
  var seconds, minutes;
  var button;
  var songPartidaInici;
  var pacmanMoviment;
  var pacmanMort;

  p.preload = function() {
    //loading all three images
    menjarImg = p.loadImage ('imatges/menjarPunts.png');
    rocaImg = p.loadImage ('imatges/cubitoLava.png');
    pacmanImgRight = p.loadImage ('imatges/pacman1.gif');
    pacmanImgLeft = p.loadImage ('imatges/pacman4.gif');
    pacmanImgUp = p.loadImage ('imatges/pacman3.gif');
    pacmanImgDown = p.loadImage ('imatges/pacman2.gif');
    //punts vides i ttot lo altre
    font = p.loadFont('fonts/Permanent_Marker/PermanentMarker-Regular.ttf');
    //so del joc
    p.soundFormats('wav' , 'ogg');
    songPartidaInici = p.loadSound('sounds/pacman_beginning.wav');
    pacmanMoviment = p.loadSound('sounds/pacman_chomp.wav');
    pacmanMort = p.loadSound('sounds/pacman_death.wav');
  }

  p.setup = function() {

      p.iniciJoc();

      /*button = p.createButton('Reiniciar Partida');
      button.position(19, 19);
      button.mousePressed(p.restartGame);
      */

  }
    p.iniciJoc = function(){//funcio de iniciar el joc on tindrem el pacman, timer i mes coses inicialitzades.
      pacman = new Pacman(9*jocActual.sizeImage,10*jocActual.sizeImage);
      pacman.lives= 3;
      pacman.score= 0;
      p.loop();
      p.clear();
      timer=120;
      p.dibuixarMapa();
      songPartidaInici.play();
    }
    p.dibuixarMapa = function(){//funcio de dibuixarMapa on tindrem a dins el maze i el canvas.
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

    p.drawText = function()//text per els punts i les vides
    {
        p.textFont(font);
        p.textSize(fontsize);

        p.fill(255);
        p.text('Punts: ', 10, 647);
        p.text(pacman.score, 120, 647);

        p.text('Vides : ', 470, 647);
        p.text(pacman.lives, 570, 647);
    }
    p.comptadorText = function (){//funcio del comptador de la partida.

        setInterval(p.comptadorText, 100000);

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

        if (timer == 0) {
            p.gameOver();
        }
    }
    p.victory = function (){//funcio de la victoria
        p.fill('green');
        p.textSize(fontGameOver);
        p.text("VICTORY!!!", 200, 647);
        p.noLoop();
    }
    p.gameOver = function (){//funcio de la derrota final
        p.fill('red');
        p.textSize(fontGameOver);
        p.text("GAME OVER", 200, 647);
        p.noLoop();

        pacmanMort.play();
        pacmanMoviment.stop();
        //p.restartGame();
    }

    p.restartGame= function (){//funcio de reiniciar la partida.
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
    p.drawText();
    p.comptadorText();

    arrayRoca.forEach((item)=> {
  	   item.showInstanceMode(p,rocaImg);
    });
    arrayMenjar.forEach((item)=> {
       item.showInstanceMode(p,menjarImg);
    });

    //comprobar choque rocas
    for(let i=0; i< arrayRoca.length;i++){
      pacman.testCollideRock(p,arrayRoca[i])

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
     songPartidaInici.stop();
     if(pacman.lives >0 ) {
         pacmanMoviment.play();
     }
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


}
var myp5 = new p5(s, 'myContainer');
