function preload(){
    clown_nose = loadImage('https://i.postimg.cc/CLBt2gr2/43d55ca7266bb03e9336d01ab59a0f64.jpghttps://i.postimg.cc/QCksPKbj/43d55ca7266bb03e9336d01ab59a0f64-removebg-preview.png');
    }

function setup() {
    createCanvas(100, 100);
    background(200);
    circle(50, 50, 25);
    video = createCapture(VIDEO);
    video.size(250, 250);
  }

