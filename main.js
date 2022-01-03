//Define img variable as empty
img = "";
status = "";
object = [];

function preload()
{
    //Write preload function
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    //Create the Canvas and place it in center of the screen
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.error(error);
    }

    console.log(results);
    object = results;

}

function draw()
{
    //Write Draw Function
    image(img , 0 , 0 , 640 , 420);
    
  if(status != "")
  {
    
    for(i = 0; i < objects.length; i++ )
    {
  
    document.getElementById("status").innerHTML = "Status: Object(s) Detected";
    fill("#FF0000");
    percent = floor(object[i].confidence * 100);
    text(object[i].label + " " + percent + "%" , object[i].x , object[i].y);
    noFill();
    stroke("#FF0000");
    rect(object[i].x , object[i].y , object[i].width , object[i].height);
    }

   
  }
}

