function preload(){

}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
console.log(ml5.version +" is the version on ML5");

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X1c6TeHqx/model.json", modelLoaded);
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult)

}
function modelLoaded(){
    console.log("model is working...");
}
function gotresult(error,result){
    if (error){
        console.error("3rr0r");
    }
    else{
        console.log(result);
        ob_name=result[0].label
        ob_ac=result[0].confidence
        console.log(ob_name);
        console.log(ob_ac);
        ob_ac=ob_ac.toFixed(2)
        ob_ac=ob_ac*100
        document.getElementById("object").innerHTML= ob_name;
        document.getElementById("accuracy").innerHTML= ob_ac + " %";
    }
}