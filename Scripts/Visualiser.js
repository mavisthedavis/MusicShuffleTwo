const audioCtx = new AudioContext(); 
var divList = []; 
var audio = new Audio("https://codehs.com/uploads/1ca205fa48224105f9196c2f16bbe828"); 
audio.setAttribute("controls", true); //don't need this
audio.setAttribute('crossOrigin', "anonymous"); // need this
audio.setAttribute('autoplay', true); // won't need this when the time comes 
audio.setAttribute('preload', "auto"); //or this
const audioSourceNode = audioCtx.createMediaElementSource(audio);    
const analyser = audioCtx.createAnalyser();   
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
var myDataArray = new Float32Array(bufferLength);
audioSourceNode.connect(analyser); 
analyser.connect(audioCtx.destination);  
document.body.appendChild(audio);   
audio.play();  
console.log(myDataArray.length); 
play();  
function check() {  
    console.log(myDataArray); 
    analyser.getFloatFrequencyData(myDataArray);  
    var average = 0; 
    for (let i = 0; i < myDataArray.length; i++) { 
        average += myDataArray[i];      
    } 
    average /= myDataArray.length;  
    for (let i = 0; i < myDataArray.length; i++) {   
        if (audio.paused != true) { 
            divList[i].css("width", (myDataArray[i] * -1) + "px");  
        } 
        //console.log(myDataArray[i]); 
    }
    
}  
function play() {   
    for (let i = 0; i < myDataArray.length; i++) {  
        setUpVis(); 
    }
    setInterval(check, 100);  
}
function setUpVis() { 
    var div = $("<div></div>");  
    div.css("background-color", "red"); 
    div.css("height", 100/myDataArray.length + "vh"); 
    div.css("width", "10px");  
    divList.push(div); 
    $("body").append(div); 
}
