class Menjar extends GameObject{
  constructor(x,y){
    super(x,y);
  }

  show(p){
    /*rocaImng ha de estar definida y cargada ne preload del sketch*/
    p.image(menjarImg,this.coordX,this.coordY);
  }
  showInstanceMode(p,menjarImg){
    p.image(menjarImg,this.coordX,this.coordY);
  }

}
