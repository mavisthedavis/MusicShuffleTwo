//$(".audioElm > div > div > div").on( "mousedown", moveLine);  
moveLine(); 
function moveLine() { 
    //$(this).offset().left);  
    $(this).css({
      left: 100
    }); 
    console.log(this); 
    
}
