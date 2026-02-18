const audioCtx = new AudioContext(); 
var divList = []; 
//var audio = new Audio("https://codehs.com/uploads/1ca205fa48224105f9196c2f16bbe828"); 
//audio.setAttribute("controls", true); //don't need this
//audio.setAttribute('crossOrigin', "anonymous"); // need this
//audio.setAttribute('autoplay', true); // won't need this when the time comes 
//audio.setAttribute('preload', "auto"); //or this 
const analyser = audioCtx.createAnalyser();   
var nodeList = [];  




function check() {  
    analyser.getFloatFrequencyData(myDataArray);  
    var average = 0; 
    for (let i = 0; i < myDataArray.length; i++) { 
        average += myDataArray[i];      
    } 
    average /= myDataArray.length;    
    //console.log(divList.length); 
    for (let i = 0; i < myDataArray.length; i++) {   
        if (audioList[playingIndex].audio[0].paused != true) {  
            divList[i].css("width", (myDataArray[i] * -1) + "px");  
        } 
        //console.log(myDataArray[i]); 
    }
    
}  
function Aplaying() {  
    removeVis();  
    setUpVis();
}
function setUpVis() {   
    for (let i = 0; i < myDataArray.length; i++) {  
        var div = $("<div></div>");  
        div.css("background-color", "red"); 
        div.css("height", 100/myDataArray.length + "vh"); 
        div.css("width", "10px");  
        divList.push(div); 
        $("body").append(div);  
    }
} 
function removeVis() {  
    for (let i = 0; i < divList.length; i++) { 
        divList[i].remove();     
    } 
    divList = [];   
}
