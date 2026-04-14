$("#main-line").on( "mousedown", linePressed);  
//$("#main-line").on("mouseup", lineUnPressed);  
//$("html").on("mouseup", linePressed);
$("html").on("mouseup", lineUnPressed); 
var isPressed = false;  
var element = null; 
function linePressed() { 
    isPressed = true;   
    element = this;    
    
    // try dividing eml width by container width
    console.log($(element).css("width") + " Elm width"); 
    //console.log(((FixCon($("#time").css("width"))/FixCon($(element).css("width"))) + (FixCon($(element).css("left"))/audioList[playingIndex].audio[0].duration)) + " Time Ajust");   
    console.log((audioList[playingIndex].audio[0].currentTime + (FixCon($(element).css("left"))/FixCon($("#time").css("width")))) + " Time Ajust"); 
    console.log($(element).css("left") + " Element position"); 
    console.log(audioList[playingIndex].audio[0].currentTime + " current time of audio");
    //console.log(FixCon($(element).css("width")) / 2.7 * (FixCon($(element).css("left"))/audioList[playingIndex].audio[0].duration)); 
    //console.log(audioList[playingIndex].audio[0].currentTime + "CT");
    

}   
function lineUnPressed() {   
    isPressed = false;  
    if (element == $("#main-line")[0]) {   
        audioList[playingIndex].audio[0].currentTime = audioList[playingIndex].audio[0].currentTime + (FixCon($(element).css("left"))/FixCon($("#time").css("width"))); 
        //audioList[playingIndex].audio[0].currentTime = 5.87 * (FixCon($(element).css("left"))/audioList[playingIndex].audio[0].duration); 
    } else if (checkForElement()) {  
        for (let i = 0; i < audioList.length; i++) {  
            if (elementList[i].children[1].children[1].children[0] == element) { 
                //audioList[i].audio[0].currentTime = FixCon($(element).css("left")) * audioList[i].audio[0].duration/FixCon($(".audioElm > div > div").css("width"));  
                audioList[i].audio[0].currentTime = FixCon($(element).css("width")) / 2.7 * (FixCon($(element).css("left"))/audioList[i].audio[0].duration); 
            } 
        } 
    
    }  

    element = null; 
    
} 
function checkForElement() { 
    for (let i = 0; i < audioList.length; i++) { 
        if (element == elementList[i].children[1].children[1].children[0]) { 
            return true;     
        }
    }  
    return false; 
}
