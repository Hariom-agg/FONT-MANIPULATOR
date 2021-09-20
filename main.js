

noseX = 0;
noseY = 0;
WristX_right = 0;
WristX_left = 0;
difference = 0;

function setup() {
video = createCapture(VIDEO);
video.size(550,500)
video.position(100,130)

canvas = createCanvas(550,400);
canvas.position(750,180)

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResult);
}

function gotResult(results)
{
   if(results.length>0){
       console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
  WristX_right = results[0].pose.rightWrist.x;
  WristX_left = results[0].pose.leftWrist.x;
  difference = floor(WristX_left-WristX_right);
   }
}

function modelLoaded ()
{
    console.log("modelLoaded!");
}


function draw()
{
  background("#FFC0CB");
  fill('blue');
  stroke('white');
  text( 'Hariom' ,noseX , noseY );
  textSize(difference);
}

function preload ()
{
    
}