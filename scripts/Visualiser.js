//import { defineConfig } from 'vitest/config';
var btn = document.getElementById("mybtn");  
var audio = document.querySelector("audio"); 
var audioCtx = new window.AudioContext(); 
console.log(audioCtx.state); 
document.addEventListener('click', () => {
  // 3. Resume the context on the user gesture 
  console.log("check"); 
  if (audioCtx.state === 'suspended') {
    audioCtx.resume(); 
    console.log(audioCtx.destination); 
  }
}, { once: true });
audio.onloadedmetadata = (e) => {
//    audio.play();
    audioCtx.resume();
    console.log(audioCtx.state === 'suspended');  
    const track = audioCtx.createMediaElementSource(audio); 
    console.log(track); 
    setInterval(checkCon, 1); 

}; 

function checkCon() {  
    //console.log(audioCtx.state); 
    $("#console").text(audioCtx.destination);  
}
