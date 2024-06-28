var speechrecognition=window.webkitSpeechRecognition
var r=new speechrecognition();

function start(){
    r.start()
    document.getElementById("text").value=""
}
r.onresult=function (event){
    c=event.results[0][0].transcript
    document.getElementById("text").value=c
    if(c=='selfie'){
        speak();
    }
}
function speak(){
    var synt=window.speechSynthesis
    speak_data="taking ur selfie in 5 seconds"
    var u=new SpeechSynthesisUtterance(speak_data)
    synt.speak(u)
    Webcam.attach(camera)
    setTimeout(function(){
        image_id="selfie1"
        take_snapshot()
        speak_data="taking ur selfie in 10 seconds"
        var u=new SpeechSynthesisUtterance(speak_data)
        synt.speak(u)
    },5000)
    setTimeout(function(){
        image_id="selfie2"
        take_snapshot()
        speak_data="taking ur selfie in 15 seconds"
        var u=new SpeechSynthesisUtterance(speak_data)
        synt.speak(u)
    },10000)
    setTimeout(function(){
        image_id="selfie3"
        take_snapshot()
        speak_data="selfies taken"
        var u=new SpeechSynthesisUtterance(speak_data)
        synt.speak(u)
    },15000)
}
camera=document.getElementById("camera")
Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:100
})

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(image_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">'
        }
        if(image_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">'
        }
        if(image_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">'
        }
    })
}