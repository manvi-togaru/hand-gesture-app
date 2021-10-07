var prediction1=""
var prediction2=""
Webcam.set({
 width:350,
 height:400,
 image_format:'png',
 png_qaulity:90   
})
var camera=document.getElementById("camera")
Webcam.attach('#camera')
function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'">'
    }
)
}
console.log('ml5version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oW717HfP3/model.json',modelloaded)
function modelloaded()
{
 console.log("modelloaded")
}
function speak()
{
 var synth=window.SpeechSynthesis;
 var speakdata1="1stpredictionis" +prediction1;
 var speakdata2="2ndpredictionis" +prediction2
 var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
 synth.speak(utterthis)
}
function check()
{
 img=document.getElementById('captureimage');
 classifier.classify(img,gotresult)
}
function gotresult(error,results)
{
    if (error) {
       console.log(error)
    } else {
        console.log(results)
        document.getElementById("resultemojiname").innerHTML=results[0].label
        document.getElementById("resultemojiname2").innerHTML=results[1].label 
        prediction1=results[0].label
        prediction2=results[1].label
        speak();
        if (results[0].label=="amazing") {
            document.getElementById("updatemoji").innerHTML="&#128076;"
        }
        if (results[0].label=="best") {
            document.getElementById("updatemoji").innerHTML="&#128077;"
        }
        if (results[0].label=="victory") {
            document.getElementById("updatemoji").innerHTML="&#9996;"
        }
        

        if (results[1].label=="amazing") {
            document.getElementById("updatemoji2").innerHTML="&#128076;"
        }
        if (results[1].label=="best") {
            document.getElementById("updatemoji2").innerHTML="&#128077;"
        }
        if (results[1].label=="victory") {
            document.getElementById("updatemoji2").innerHTML="&#9996;"
        }
    }
}