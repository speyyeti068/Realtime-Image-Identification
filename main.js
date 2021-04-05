function preload(){

}

function setup(){
    canvas = createCanvas(300,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/t1BE4jTP-/model.json",function(){
        console.log("Model Loaded");
    })
}

function draw(){
    image(video,0,0,300,250);

    classifier.classify(video,function(error,result){
        if(error){
            console.error(error);
        } else {
            console.log(result[0].label);

            document.getElementById("object").innerHTML = result[0].label;
            document.getElementById("accuracy").innerHTML = ((result[0].confidence * 100).toFixed(2) + "%");
        }
    });
}