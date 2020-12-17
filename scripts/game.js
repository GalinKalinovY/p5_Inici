

const ROWS= 4;
const COLUMNS= 4;
const SIZE_IMAGE = 32;

class Game {

 constructor(){
     this.rowGame = ROWS;
     this.columnGame = COLUMNS;
     this.sizeImage = SIZE_IMAGE;
     this.maze = [//MAZE ES EL MAPA ON TINDREM LES BOLES I LES ROQUES. HO DEFINIM EN 0 I 1. 1 ES ROCA.
                  [1,0,0,1],
                  [1,0,0,1],
                  [0,0,0,1],
                  [0,0,0,1],
                ];

 }
 /*constructor(ROWS,COLUMNS){
   this.rowGame = ROWS;
   this.columnGame = COLUMNS;
   this.size_image = SIZE_IMAGE;


 }*/

}
//constructor
