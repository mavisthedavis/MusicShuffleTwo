//window.onload = function() { 
      
    //setInterval(checkPlaying, 1); 
//}
function checkEnd() {  
    //if (filesAdded) { 
    //console.log(audioList[0].audio.get(0).duration); 
    //console.log(audioList[0].audio.get(0).currentTime); 
    //}
    for (let i = 0; i < audioList.length; i++) {  
        //console.log(audioList[0].audio.get(0).duration); 

        if (audioList[i].audio.get(0).duration == audioList[i].audio.get(0).currentTime) {  
            startNext(i);   
        }   
       

    } 

} 

function startNext(x) { 
    audioList[x].audio[0].currentTime = 0;  
    //console.log(audioList[x].audio); 
    audioList[x].audio[0].pause(); 
    if (x == audioList.length - 1) { 
        x = -1; 
    }   
    x++; 
    audioList[x].audio[0].play();  
}