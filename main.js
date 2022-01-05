//Define img variable as empty
status = "";
object = [];

function preload()
{
    //Write preload function
    
}

function setup()
{
    //Create the Canvas and place it in center of the screen
    canvas = createCanvas(380 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();    
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    
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
    image(video , 0 , 0 , 640 , 420);
    
    
  if(status != "")
  {

    r = random(255);
    g = random(255);
    b = random(255);

    objectDetector.detect(video , gotResults);
    for(i = 0; i < object.length; i++ )
    {
      
  
    document.getElementById("status").innerHTML = "Status: Object(s) Detected";
    document.getElementById("objects_detected").innerHTML = "Number of objects detected are: " + object.length
    fill(r , g , b);
    percent = floor(object[i].confidence * 100);
    text(object[i].label + " " + percent + "%" , object[i].x + 15, object[i].y + 15);
    noFill();
    stroke(r , g , b);
    rect(object[i].x , object[i].y , object[i].width , object[i].height);
    }

   
  }
}

