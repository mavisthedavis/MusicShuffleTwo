if (typeof Uint8Array !== 'undefined') {
    console.log("Uint8Array is supported!");
    // Example usage:
    const arr = new Uint8Array(2);
    console.log(arr);
} else {
    console.log("Uint8Array is NOT supported.");
}   
$("mybtn").css("width", "10px");
const audioCtx = new AudioContext(); 
console.log(audioCtx.state); 
var audio = new Audio("https://codehs.com/uploads/1ca205fa48224105f9196c2f16bbe828"); 
audio.controls = true; 
audio.autoplay = true;
audio.preload = "auto";  
audio.setAttribute("controls", true);
audio.setAttribute('crossOrigin', "anonymous");
audio.setAttribute('autoplay', true);
audio.setAttribute('preload', "auto");
const audioSourceNode = audioCtx.createMediaElementSource(audio);    
const analyser = audioCtx.createAnalyser();   
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
var myDataArray = new Float32Array(bufferLength);
audioSourceNode.connect(analyser); 
analyser.connect(audioCtx.destination);  
document.body.appendChild(audio);   
audio.play();  
play(); 
function check() {  
    analyser.getFloatFrequencyData(myDataArray);   
    for (let i = 0; i < myDataArray.length; i++) {  
        $("#mybtn").css("width", (myDataArray[i] * -1) + "px"); 
        //console.log(myDataArray[i]); 
    }
    
}   
 
function play() {  
    setInterval(check, 300);  
}
