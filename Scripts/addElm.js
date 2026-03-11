var elementList = []; 

addAudio();

function addAudio() {  
    //create div container
    var audioDiv = new $("<div></div>");  
    audioDiv[0].classList.add("audioElm", "d-flex", "align-items-center"); 
    $("main").append(audioDiv[0]);   
    //create button and button child
    var button = new $("<button></button>");   
    var image = new $("<img/>");  
    image[0].src = ""; 
    button[0].classList.add("btn");  
    audioDiv.append(button); 
    button.append(image);  
    //create timeline and timeline children 
    var timeDiv = new $("<div></div>");  
    var reuseDiv = new $("<div></div>"); 
    var h2 = new $("<h2></h2>");  
    h2.text("DEFAULT VALUE.mp3");
    var childDiv = new $("<div></div>");  
    var grandchildDiv = new $("<div></div>");  
    var unbornDiv = new $("<div></div>");  
    $(unbornDiv).draggable({ 
        axis: "x", 
        containment: "parent", 
    })
    audioDiv.append(timeDiv); 
    timeDiv.append(h2);  
    timeDiv.append(grandchildDiv); 
    grandchildDiv.append(unbornDiv);  
    
}
