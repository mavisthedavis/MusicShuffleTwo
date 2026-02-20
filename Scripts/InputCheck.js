var inputIndex = 0;  
audioList = [];  
playing = false;  
playingIndex = 0; 
var filesAdded = false; 
const input = $('#file-input');  
input.on('change', handleSubmit);   
function handleSubmit(event) {   
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
        audioList[inputIndex].audio[0].setAttribute('crossOrigin', "anonymous"); // need this

        //console.log(audioList[inputIndex].audio); 
        audioList[inputIndex].audio.on("play", checkPlay);  
        audioList[inputIndex].audio.on("pause", checkPause); 

        $("body").append(audioList[inputIndex].audio); 
        var audioSourceNode = audioCtx.createMediaElementSource(audioList[inputIndex].audio[0]);   
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        myDataArray = new Float32Array(bufferLength);
        audioSourceNode.connect(analyser); 
        analyser.connect(audioCtx.destination);     
        inputIndex++; 
    }  
     
    if (!filesAdded) { 
        setInterval(check, 100);  
        setInterval(checkEnd, 1);  
    }  
    if (audioCtx.state === 'suspended') {
        audioCtx.resume().then(() => {
            console.log('AudioContext resumed successfully');
        });
    } 
    filesAdded = true; 
    //audioList[i].addEventListener('onended', audioEnd());

}
