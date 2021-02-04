

//const ROWS= 4;
//const COLUMNS= 4;
const SIZE_IMAGE = 32;

class Game {

 constructor(ROWS,COLUMNS){
     this.rowGame = ROWS;
     this.columnGame = COLUMNS;
     this.sizeImage = SIZE_IMAGE;

     this.maze = [//MAZE ES EL MAPA ON TINDREM LES BOLES I LES ROQUES. HO DEFINIM EN 0 I 1. 1 ES ROCA.
                  [1,1,1,1,1,1,1,1,1,1],
                  [1,0,0,0,0,1,1,0,0,1],
                  [1,0,1,0,0,0,1,0,0,1],
                  [1,0,0,1,0,0,0,0,1,1],
                  [1,0,1,1,1,1,1,0,1,1],
                  [1,0,0,1,1,1,0,0,0,1],
                  [1,0,0,1,1,0,1,0,0,1],
                  [1,0,0,1,0,0,1,0,1,1],
                  [1,0,1,0,0,0,0,0,0,1],
                  [1,1,1,1,1,1,1,1,1,1],
                ];

 }
 /*
 for(let i= 0; i< ROWS;i++){
   maze[i]= [];
   for(let j=0; j< COLUMNS; j++){
     //let temp = Math.floor(Math.random());
     maze[i][j]= Math.floor(Math.random());
   }
 }
 */
 /*constructor(ROWS,COLUMNS){
   this.rowGame = ROWS;
   this.columnGame = COLUMNS;
   this.size_image = SIZE_IMAGE;


 }*/

}
//constructor
