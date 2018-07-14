
function preload(){
	song = loadSound("rain.mp3", loaded)
	fontn   = loadFont('space age.otf');
}


var canvas;
let rain = [];
let rainbold = [];
var back = {
	r: 220,
	g: 220,
	b: 220
};
var flag = -1;


// r: 215,
// g: 225,
// b: 242
//drop_temp = new Raindrops(mouseX, mouseY, 8, 25, 200, random(2,3));


function loaded(){
	song.loop();

}



function Raindrops(x, y, h, w, alpha, speed){
	this.x = x;
	this.y = y;
	this.h = h;
	this.w = w;
	this.alpha = alpha;
	this.speed = speed;

	this.fall = function(){
		this.y+= speed;
		if(this.y > windowHeight){
			this.y = random(-1000, 0);
		}
	}


	this.show = function(){
		noStroke();
		fill(125, 192, 216, this.alpha);
		rect(this.x, this.y, this.h, this.w, 8);
		// if(this.y > windowHeight-10 ){
		// 	ellipse(this.x, this.y, 70, 70);
		//
		// }else{
		// 	rect(this.x, this.y, this.h, this.w, 8);
		//
		// }



	}


}


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < 250; i++){
		rain[i] 		= new Raindrops(random(windowWidth), random(-1000, 0), 5, 20, 180, random(1,2));
		rainbold[i] = new Raindrops(random(windowWidth), random(-1000, 0), 8, 25, 200, random(2,3));

	}

	slider = createSlider(0, 1, .5, .05);
	slider.position(windowWidth/2, windowHeight - 30);

	//song.play();
  	//song.loop();




}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(back.r, back.g, back.b);

	for(i = 0; i< rain.length; i++){
		rain[i].fall();
		rain[i].show();

	}

	song.setVolume(slider.value());
	for( drops of rainbold){
		drops.fall()
		drops.show()
	}



	textFont(fontn)
	fill(100);
	textSize(20);
	text(" Add Your Drops by dragging the mouse", windowWidth/2 - 300, 60);




}



function mousePressed(){
	back.r = back.r + flag*220;
	back.g = back.g + flag*220;
	back.b = back.b + flag*220;
	flag = flag*-1;



}





function mouseDragged(){

	drop_temp = new Raindrops(mouseX, mouseY, 8, 25, 200, random(2,3));
	rainbold.push(drop_temp);

}
