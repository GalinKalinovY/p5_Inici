class Roca extends GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(){
    /*rocaImng ha de estar definida y cargada ne preload del sketch*/

    image(rocaImg,this.coordX,this.coordY);
  }

}
