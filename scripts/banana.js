class Banana extends GameObject{
    constructor(x,y){
        super(x,y);
    }

    show(p){
        /*rocaImng ha de estar definida y cargada ne preload del sketch*/
        p.image(bananaImg,this.coordX,this.coordY);
    }
    showInstanceMode(p,bananaImg){
        p.image(bananaImg,this.coordX,this.coordY);
    }

}