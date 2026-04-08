function updateTime() {   
    if (!isPressed) { 
        $("#main-line").css("left", 95 * (audioList[playingIndex].audio[0].currentTime/audioList[playingIndex].audio[0].duration) + "%");  
        findUpdateAudio().css("left", 96 * (audioList[playingIndex].audio[0].currentTime/audioList[playingIndex].audio[0].duration) + "%"); 
            
        
    } 
} 
function resetTime() {  
    if (!isPressed) { 
        for (let i = 0; i < elementList.length; i++) {  
            $(elementList[i].children[1].children[1].children[0]).css("left", 0 + "%"); 
        }     
    }
}
function findUpdateAudio() { 
    for (let i = 0; i < elementList.length; i++) {  
        if (i == audioList[playingIndex].index) { 
            return  $(elementList[i].children[1].children[1].children[0]); 
        }
    }  
}
