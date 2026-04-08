var elementList = []; 

window.onload = function() { 
    $("#main-line").draggable({ 
        axis: "x", 
        containment: "parent", 
    })    
}
function addAudioElm(name) {   
    console.log(name)
    //create div container
    var audioDiv = new $("<div></div>");  
    audioDiv[0].classList.add("audioElm", "d-flex", "align-items-center"); 
    $("main").append(audioDiv[0]);   
    //create button and button child
    var button = new $("<button></button>");   
    var image = new $("<img/>");  
    image[0].src = ""; 
    button[0].classList.add("btn");   
    button.on("mousedown", playPause); 
    audioDiv.append(button); 
    button.append(image);  
    //create timeline and timeline children 
    var timeDiv = new $("<div></div>");  
    var h2 = new $("<h2></h2>");  
    h2.text(name); 
    
    var childDiv = new $("<div></div>");  
    var grandchildDiv = new $("<div></div>");  
    $(grandchildDiv).draggable({ 
        axis: "x", 
        containment: "parent", 
    })
    audioDiv.append(timeDiv); 
    timeDiv.append(h2);  
    timeDiv.append(childDiv); 
    childDiv.append(grandchildDiv);   
    $(grandchildDiv).on( "mousedown", linePressed);  
    //$(grandchildDiv).on("mouseup", lineUnPressed);  
    if (h2.text().length > 43) {  
        console.log(FixCon(h2.css("font-size")) - (h2.text().length/2)); 
        h2.css("font-size", FixCon(h2.css("font-size")) * .8 + "px");  
    }  
    elementList.push(audioDiv[0]); 
    console.log(elementList); 
    
} 
function FixCon(unit) {  
    length = unit.length 
    oldVw = Number(unit.substring(0,length - 2));   
    return oldVw; 
}
