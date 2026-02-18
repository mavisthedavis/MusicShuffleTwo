function playPause() {   
    console.log("Check1"); 
    if (!playing) {   
        setIndex(null); 
        audioList[playingIndex].audio[0].play();    
        playing = true; 
    } else { 
        audioList[playingIndex].audio[0].pause();   
        playing = false; 
    }  
    console.log("Check2"); 
}  

function checkPlay() { 
    setIndex(this); 
    playing = true;  
    Aplaying();  
} 

function checkPause() {  
    if (this.currentTime != 0) { 
        setIndex(this); 
        playing = false;    
    }  
    
}  
function skipBack() { 
    playingIndex--; 
    setIndex(audioList[checkIndex()].audio[0]); 
    audioList[playingIndex].audio[0].play();  
    
}  
function skipForward() {  
    playingIndex++; 
    setIndex(audioList[checkIndex()].audio[0]); 
    audioList[playingIndex].audio[0].play();  
} 
function checkIndex() { 
    if (playingIndex > audioList.length - 1) {   
        return 0; 
    } else if (playingIndex < 0) {   
        return audioList.length - 1; 
    }  
    return playingIndex; 
}
function setIndex(audio) {  
    for (let i = 0; i < audioList.length; i++) { 
        if (audio == audioList[i].audio[0]) { 
            playingIndex = i; 
        }   
        if (i != playingIndex) { 
            audioList[i].audio[0].pause(); 
            audioList[i].audio[0].currentTime = 0; 
        } 
        
    } 

   
}
