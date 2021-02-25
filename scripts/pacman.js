class Pacman extends GameObject{
  constructor(x,y){
    super(x,y);
    //this.frame =1;
    this.direction=2;
    this.score = 0;
    this.lives = 3;
    this.speed=32;
  }

  showInstanceMode(p,pacmanImg){
    //p.image(pacmanImg, this.x,this.y, IMAGE_SIZE, IMAGE_SIZE, IMAGE_SIZE*this.frame, IMAGE_SIZE*this.direction, IMAGE_SIZE,IMAGE_SIZE);
    p.image(pacmanImg,this.coordX,this.coordY);
    /*console.log("Frame actual pacman:" + this.frame);
    console.log("Direccion actual pacman:" + this.direction);
    console.log("Posicion X pacman:" + this.x);
    console.log("Posicion Y pacman:" + this.y);
    this.frame++;
    if ( this.frame == 5) this.frame =0;*/
  }
  testCollideRock(p,rock){
    let distanceRockPacman = p.dist(this.coordX, this.coordY, rock.coordX, rock.coordY);
    if(distanceRockPacman < 16){ //o sizeImage
      //es pot posar un switch
      if(this.direction === 0){//dreta
        //moveLeft();
        this.coordX = this.coordX - this.speed;
      }else if (this.direction === 2) {
        this.coordX = this.coordX + this.speed;
      }else if (this.direction=== 1) {
        this.coordY = this.coordY - this.speed;
      }else if (this.direction=== 3) {
        this.coordY = this.coordY + this.speed;
      }
      this.lives -=1;
      this.score -=10;
      if(this.lives>0) {
        alert("Has perdut una vida! \n Vigila et queden: " + this.lives + " vides");
      }else{
        alert("Ja no et queden mes vides!");
      }
      console.log("CHoque");
    } else{
     // console.log("La roca es trobe lluny");
    }
  }
  testCollideMenjar(p,menjar){
    let distanceRockPacman = p.dist(this.coordX,this.coordY,menjar.coordX,menjar.coordY);
    if(distanceRockPacman < 16){
      return true;
    }else{
      return false;
    }
  }
    // Las direcciones de Pacman seran : ( es arbitrario y hemos elegido
    //estas por las imagen= la fila cero son el pacman hacia derecha
    // fila 1 son pacman hacia abajo..y asi... ver pac.png)
    // 0 -> pacman va hacia derecha
    // 1 -> pacman va hacia abajo
    // 2 -> pacman va hacia izuierda
    // 3 -> pacman va hacia arriba
  moveRight(){
  //Update the direction
    this.direction = 0;
  //Update the x Position
    this.coordX = this.coordX +this.speed;
  }
  moveDown(){
  //Update the direction
    this.direction = 1;
  //Update the x Position
    this.coordY = this.coordY + this.speed;
  }
  moveLeft(){
  //Update the direction
    this.direction = 2;
  //Update the x Position
    this.coordX = this.coordX - this.speed;
  }
  moveUp(){
  //Update the direction
    this.direction = 3;
  //Update the x Position
    this.coordY = this.coordY - this.speed;
  }

  teatFood(comida){
    var distanceFoodPacman = dist( this.x, this.y, comida.x, comida.y);
      if ( distanceFoodPacman < 16)
          {
            this.score++; //Update the scores
            return true;
            //this.score++; //Update the scores
          }
      else //Distance is largerthan
      {
        return false;
      }
  }

  eatGrapes(grape){
    var distanceGrapePacman = dist( this.x, this.y, grape.x, grape.y);
  }

  eatRock(arrayRoca){
    var distanceRockPacman = dist( this.coordX, this.coordY, arrayRoca.coordX, arrayRoca.coordY);
  }

}
