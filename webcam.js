let mode = "NORMAL"
let img;
let x = 0;
let cells = 10;

// function preload() {
//   font = loadFont('RadioGrotesk-Regular.otf')
// }

function setup() {
  cnvs = createCanvas(700, 500);

  cnvs.position(width/2,150);
  pixelDensity(1);
  img = createCapture(VIDEO);
  img.size(width, height);
  img.hide();

  //background(220);
    //buttons
     p = createP("Press 's' to save image ")
     p.position(width/2,60);
     p.style('font-size', '30px');

     pMode = createP("MODES")
     pMode.position(200,160);
     pMode.style('font-size', '30px');

  normalButton = createButton("Normal")
  normalButton.mousePressed(setNormal)
  normalButton.position(200,250);

  reverseButton = createButton("Slit-scan")
  reverseButton.mousePressed(setScan)
  reverseButton.position(200,300);

  pixelButton = createButton("Pixelate")
  pixelButton.mousePressed(setPixel)
  pixelButton.position(200,350);

  multiplyButton = createButton("Multiply")
  multiplyButton.mousePressed()
  multiplyButton.position(200,400);

  abcButton = createButton("ABC")
  abcButton.mousePressed()
  abcButton.position(200,450);

  //sliders?
  s1 = createSlider(0,100,50);
  s1.position(1100,250);

  s2 = createSlider(0,100,50);
  s2.position(1100,300);

  s3 = createSlider(0,100,50);
  s3.position(1100,350);
}
//modes
function setNormal() {
  mode = "NORMAL"
}

function setScan() {
  mode = "SCAN"
}

function setPixel() {
  mode = "PIXEL"
}

function draw() {
 // background(220);

  if (mode === "NORMAL") {
    normalMode()
  } else if (mode === "SCAN") {
    scanMode()
  } else if (mode === "PIXEL") {
    background(0);
    pixelMode()
  }
}

//functions
function normalMode() {
  // console.log("normal")
  image(img, 0, 0, width, height);
}

function scanMode() {
 // background(0);
    img.loadPixels();
  let w = img.width;
  let h = img.height;
  copy(img, w/2, 0, 1, h, x, 0, 1, h);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}

function pixelMode() {
  // cells = map(mouseX, 0, width, 10, 80);
  // cells = ceil(cells / 10) * 10;

  cells = 50;
  for (let y = 0; y < img.height; y += cells) {
  for (let x = 0; x < img.width; x += cells) {
    noStroke();
  fill(img.get(x, y));
  rect(x, y, cells, cells);
}
    }
  }

// save png
function keyPressed() {
  if (key == 's') {
    save("gene_photo.png");
  }
}
    