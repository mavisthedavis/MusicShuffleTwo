var inputIndex = 0;  
audioList = [];  
playing = false;  
playingIndex = 0; 
var filesAdded = false; 
const input = $('#file-input');  
input.on('change', handleSubmit);   
function handleSubmit(event) {   
    filesAdded = true; 
    for (let x = 0; x < input.prop('files').length; x++) {   
        /*
        var audioObj = { 
            audio: new Audio(URL.createObjectURL(input.prop('files')[x])),  
            index: inputIndex,
        };  
        */   
        var audioElem = $("<audio></audio>"); 
        audioElem.attr("src", URL.createObjectURL(input.prop('files')[x]));
        var audioObj = { 
            audio: audioElem,  
            index: inputIndex,
        };  
        audioList.push(audioObj);   
        audioList[inputIndex].audio.prop('controls', true); 
        audioList.audio[0].setAttribute('crossOrigin', "anonymous"); // need this

        //console.log(audioList[inputIndex].audio); 
        audioList[inputIndex].audio.on("play", checkPlay);  
        audioList[inputIndex].audio.on("pause", checkPause); 

        $("body").append(audioList[inputIndex].audio); 
        inputIndex++; 
    }  
    setInterval(checkEnd, 1);  
    //audioList[i].addEventListener('onended', audioEnd());

}
