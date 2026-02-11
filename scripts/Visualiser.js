//import { defineConfig } from 'vitest/config';
var btn = document.getElementById("mybtn");  
var audio = document.querySelector("audio"); 
var audioCtx = new window.AudioContext(); 
document.addEventListener('click', () => {
  // 3. Resume the context on the user gesture 
  console.log("check"); 
  if (audioCtx.state === 'suspended') {
    audioCtx.resume(); 
  }
}, { once: true });
audio.onloadedmetadata = (e) => {
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
