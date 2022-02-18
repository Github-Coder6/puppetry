noseX = 0;
noseY = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
difx = 0;
dify = 0;
function preload()
{
    doreamon = loadImage('dorae.png');
    rat = loadImage('rat.png');
    sound = loadSound('Shout.mp3');    
}
function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(140, 100);

    canvas= createCanvas(550,400);
    canvas.position(660, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded!!");
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x -150;
        leftWristY = results[0].pose.leftWrist.y -250;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y -250;
        difx = leftWristX - rightWristX;
        dify = leftWristY - rightWristY;
    }
}
function draw()
{
    background('#008b8b')
    /*fill('whitesmoke');
    stroke('whitesmoke');
    square(noseX, noseY, difx);*/
    //image(image_load, noseX, noseY, difx, dify);
    image(doreamon, leftWristX, leftWristY, 300, 300);
    image(rat, rightWristX, rightWristY, 200, 200);
    sound.play();
}
