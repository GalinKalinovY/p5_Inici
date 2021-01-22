class Roca extends GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(p){
    /*rocaImng ha de estar definida y cargada ne preload del sketch*/
    p.image(rocaImg,this.coordX,this.coordY);
  }
  showInstanceMode(p,rocaImg){
    p.image(rocaImg,this.coordX,this.coordY);
  }
}
