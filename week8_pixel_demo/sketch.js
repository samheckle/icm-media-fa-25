// creating global variables that will store our image data
let myimg;
let transparent;

function preload() {
  // load our image using old method
  myimg = loadImage("flyer.jpeg");
}

function setup() {
  // create our canvas to fill the whole website
  createCanvas(window.innerWidth, window.innerHeight);

  // creating an image that will exist in the webpage as the html
  // the image will be injected via an html tag <img> that exists on the webpage
  // let myimg2 = createImg('flyer.jpeg')
  // myimg2.position(300,0)

  // drawing image from the center of the image
  // works just like rect mode
  imageMode(CENTER);

  // loads the pixels of the WHOLE canvas
  // loadPixels();
  // console.log(pixels);
}

function draw() {
  background("green");

  // loads the pixels of a single image on the canvas
  myimg.loadPixels();
  console.log(myimg.pixels);

  // creates a transparent layer of a image
  transparent = createImage(myimg.width, myimg.height);
  transparent.loadPixels();

  // go through the pixels of the transparent image
  // reset each pixel of the image
  for (let i = 0; i < transparent.pixels.length; i += 4) {
    transparent.pixels[i] = myimg.pixels[i];
    transparent.pixels[i + 1] = myimg.pixels[i + 1];
    transparent.pixels[i + 2] = myimg.pixels[i + 2];
    transparent.pixels[i + 3] = myimg.pixels[i + 3];
  }

  // once done setting the pixels, update them so the changes are reflected
  transparent.updatePixels();

  // add a red tint to our original image by going through the array
  for (let i = 0; i < myimg.pixels.length; i += 4) {
    // changing the r channel by 50
    // let r = myimg.pixels[i] + 50
    myimg.pixels[i] = 255;
  }

  // update the pixels based on the changes
  myimg.updatePixels();

  // drawing the image to the screen with adjusted x and y positions based on the imageMode
  image(myimg, 100, height / 2, 200, 200);
  // draw the transparent image to the screen
  image(transparent, 100, 100, 200, 200);
  // noloop because we don't want to print out a bunch of the image data
  noLoop();
}
