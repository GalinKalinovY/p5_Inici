
const s = ( p ) => {
  var rocaImg;
  var jocActual= new Game(19,21);
  var arrayRoca = [];
  var arrayMenjar = [];
  var pacman;
  var arrayBanana = [];
  var usuarisLog = [];

  var font,fontsize= 25;
  var fontGameOver = 35;
  var timer;
  var seconds, minutes;
  var songPartidaInici;
  var pacmanMovimentSo;
  var pacmanMortSo;
  var bananMenjadaSo;
  var victoriaSo;

  var fiJoc = "false";
  var loginUsuariText;
  var loginUsuari;

  p.preload = function() {
    //loading all images
    menjarImg = p.loadImage ('imatges/menjarPunts.png');
    bananaImg = p.loadImage('imatges/banana.png');
    rocaImg = p.loadImage ('imatges/cubitoLava.png');
    pacmanImgRight = p.loadImage ('imatges/pacman1.gif');
    pacmanImgLeft = p.loadImage ('imatges/pacman4.gif');
    pacmanImgUp = p.loadImage ('imatges/pacman3.gif');
    pacmanImgDown = p.loadImage ('imatges/pacman2.gif');
    //punts vides i tot lo altre
    font = p.loadFont('fonts/Permanent_Marker/PermanentMarker-Regular.ttf');
    //so del joc
    p.soundFormats('wav' , 'ogg');
    songPartidaInici = p.loadSound('sounds/pacman_beginning.wav');
    pacmanMovimentSo = p.loadSound('sounds/pacman_chomp.wav');
    pacmanMortSo = p.loadSound('sounds/pacman_death.wav');
    bananMenjadaSo = p.loadSound('sounds/puijadevida.wav');
    victoriaSo = p.loadSound('sounds/victoria.wav');
  }

  p.setup = function() {
      //abans de crear el canvas mirar la dificultat del jocs per el localstorage
      var dificultat= localStorage.getItem("dificultat");
      var usuari= localStorage.getItem("nomUsuari");
      if(dificultat === null && nomUsuari === ""){
          alert("Has de introduir un usuari al Player Settings per començar el joc!!!");
          p.noLoop();
      }else {
          p.createCanvas(jocActual.rowGame * jocActual.sizeImage, jocActual.columnGame * jocActual.sizeImage); // Size must be the first statement
          pacman = new Pacman(9 * jocActual.sizeImage, 10 * jocActual.sizeImage);
          p.frameRate = 30;

          jocActual.dificultat = dificultat;
          console.log("dificulat: "+ dificultat);
          console.log("joc actual dificulat: "+ jocActual.dificultat);
          p.iniciJoc();

      }

  }
  p.loginUsuari = function () {
      var dificultat= localStorage.getItem("dificultat");
      var usuari= localStorage.getItem("nomUsuari");
      var contrasenya= localStorage.getItem("contra");

      loginUsuariText = p.createDiv('Usuari: ');
      loginUsuariText.style('color','#ff0000');
      loginUsuariText.style('font-size', '35px');
      loginUsuariText.style('font-family', 'Brush Script MT');
      loginUsuariText.position(1200,25);

      loginUsuari = p.createDiv(usuari);
      loginUsuari.style('color','#ff0000');
      loginUsuari.style('font-size', '35px');
      loginUsuari.style('font-family', 'Brush Script MT');
      loginUsuari.position(1350,25);
      //alert("Benvingut "+ usuari+" al joc PacMan");

      usuarisLog.push(usuari,contrasenya,dificultat);
      console.log("Els usuaris: \n"+ usuarisLog);
  }
    p.iniciJoc = function(){//funcio de iniciar el joc on tindrem el pacman, timer i mes coses inicialitzades.
      p.noLoop();

      pacman.coordX = 9*jocActual.sizeImage;
      pacman.coordY = 10*jocActual.sizeImage;
      pacman.score= 0;

      //awitch per la dificultat , si es 1 mes temps, 2...
        switch (jocActual.dificultat) {
            case "1":
                timer = 120;
                pacman.lives=3;
                break;
            case "2":
                timer = 80;
                pacman.lives=2;
                break;
            case "3":
                timer = 60;
                pacman.lives=1;
                break;
            default:
                console.log("no tenim dificultat establerta." );
        }
      fiJoc = "false";
      p.clear();
      p.loop();
      p.dibuixarMapa();
      p.comptadorText();
      p.loginUsuari();

    }
    p.dibuixarMapa = function(){//funcio de dibuixarMapa on tindrem a dins el maze i el canvas.
        songPartidaInici.play();

        for (let i=0 ; i < jocActual.maze.length;i++) {
           for (let j=0; j < jocActual.maze.length;j++) {
              if ( jocActual.maze[i][j] === 1){
                  arrayRoca.push( new Roca(i*jocActual.sizeImage, j*jocActual.sizeImage));
              }
              if ( jocActual.maze[i][j] === 0){
                  arrayMenjar.push( new Menjar(i*jocActual.sizeImage, j*jocActual.sizeImage));
              }
               if ( jocActual.maze[i][j] === 2){
                   arrayBanana.push( new Banana(i*jocActual.sizeImage, j*jocActual.sizeImage));
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
        setInterval(p.comptadorText, 10000000);
      /*if (p.frameCount % 60 == 0 && timer > 0) {
            timer -=1;
        }
        if (timer == 0) {
            p.gameOver();
        }*/
        if (p.frameCount % p.frameRate == 0 && timer > 0) {
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
        victoriaSo.play();
        fiJoc = "true";
        alert("!!!!VICTORIA!!!!");
        p.noLoop();
    }
    p.gameOver = function (){//funcio de la derrota final
        p.noLoop();
        p.fill('red');
        p.textSize(fontGameOver);
        p.text("GAME OVER", 200, 647);
        fiJoc = "true";
        pacmanMortSo.play();
        pacmanMovimentSo.stop();
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
    arrayBanana.forEach((item)=> {
        item.showInstanceMode(p,bananaImg);
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
      }
    }
    //fer lo mateix amb els altres tipus de menjars
      for(let i=0; i< arrayBanana.length;i++){
          if(pacman.testCollideMenjar(p,arrayBanana[i])){
              arrayBanana.splice(i,1);
              pacman.lives = pacman.lives + 1;
              pacman.score = pacman.score +10;
              timer = timer + 20;
              bananMenjadaSo.play();
          }
      }
    //comprovarVictoria
    if(arrayMenjar.length === 0 || arrayMenjar===null){
      console.log("victoria");
      p.victory();
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
     if(fiJoc == "true") {
         pacmanMovimentSo.stop();
     }else{
         pacmanMovimentSo.play();
     }

      if (p.key === 'd'){
        pacman.moveRight();
        console.log("coordx",pacman.coordX);
      }
      if (p.key === 'a'){
        pacman.moveLeft();
        console.log("coordx",pacman.coordX);
      }
      if (p.key === 'w'){
        pacman.moveUp();
        console.log("coordx",pacman.coordY);
      }
      if (p.key === 's'){
        pacman.moveDown();
        console.log("coordx",pacman.coordY);
      }
  }

}
var myp5 = new p5(s, 'myContainer');
