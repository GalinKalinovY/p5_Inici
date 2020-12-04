
let pacman
// The statements in the setup() function
// execute once when the program begins
function setup() {
  createCanvas(720, 400); // Size must be the first statement

}
function preload(){
  //loading all three images

pacman = loadImage ('../imatges/pacman.png');
}
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
function draw() {

  background(10,10, 255);
  image(pacman,mouseX,50,50,50);




}
