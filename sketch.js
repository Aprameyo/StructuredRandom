
var canvas;
var hyperlink;
var windowObjectReference;
var url = "Design_1/rain.html"
var butt;
var words = ["Welcome", "To", "My", "Mindspace", "Explore My", "Conciousness Of", "Random", "via ", "Code" ];
var timestamp = 1000;
var index = 0;
var fontnew;
var fontn;
var amp;
var volhistory =[];

function preload(){
	fontnew = loadFont('HUMANOIDSTRAIGHT.TTF');
	fontn   = loadFont('space age.otf');
	song = loadSound("mayday.mp3", loaded)
	amp = new p5.Amplitude();

}


function loaded(){

	song.loop();
}
// var x_ref = 0;
// var y_ref = 0;
// var flag  = -1;

function cosco(x, y){
	this.x  = x;
	this.y  = y;
	// this.xspeed = xspeed;
	// this.yspeed = yspeed;

	this.move = function(){
		this.y += random(0, 10);
		if(this.y > windowHeight ){
			this.y = 0;
			this.x = random(0, windowWidth)
		}

		this.x += random(0,10);
		if(this.y > windowWidth ){
			this.x =  0;
			this.y = random(0, windowHeight)
		}



	this.show = function(){

		fill(153, 235, 255, 200);
		ellipse(this.x, this.y, 40, 40);
	}


	}

}



function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.style('z-index', '-1');

	//var Heading = createDiv("Welcome to Random")
	Heading = createElement('kbd', "aprameyo.roy");
	Heading.style("color", "#99ebff");
	Heading.style("font-size", "20px");
	Heading.style('font-family', 'Courier New')
 	Heading.position(windowWidth/2 - 80, 2);
	Heading.mousePressed(openInNewTab);






	drop = new cosco(200, 200);

// 	function openRequestedPopup() {
//   windowObjectReference = window.open(
//     "Design_1/rain.html",
//     "DescriptiveWindowName",
//     "resizable,scrollbars,status"
//   );
// }




function openInNewTab() {
  var win = window.open(url, '_blank');
  win.focus();
}



}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}


function draw() {
	clear()
	noStroke();
	fill(220, 127, 80, 100);

	//ellipse(windowWidth/2, windowHeight/2, 30, 30);
	//drop.move()
	//drop.show()

	textAlign(CENTER);
	fill(200, 200, 40)
  textSize(80);
	textFont(fontnew)
  text(words[index], width/2, height/2);

  if (millis() - timestamp > 1000) {
    index++;
    timestamp = millis();

    if (index > words.length - 1){
      index = 0;
    }
  }
	textFont(fontn)
	fill(100, 235, 100, 80);
	textSize(20);
	text("Press on my Identity to Take You to Another Place of my Solace", windowWidth/2, 60);

	//ellipse(random(windowWidth),random(windowHeight), 20 ,20);

	var vol = amp.getLevel();
	volhistory.push(vol);
  stroke(0, 80);
	strokeWeight(8);
  noFill();
  push();
  var currentY = map(vol, 0, 1, height, 0);
  //translate(0, height / 2 - currentY) //- currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  //line(volhistory.length, 0, volhistory.length, height);



}


function mousePress(){
	//clear();
}
