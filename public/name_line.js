// Wait for the document to fully load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Select the .line element
    var line = document.querySelector('.line');
    var m=document.querySelector(".mouse-cursor");
    // Set a timeout to increase the height after 500 milliseconds
    const element = document.querySelectorAll('.hi');
    element[2].style.backgroundColor="white";
    setTimeout(function () {
        
        // element.forEach((element)=>{
            if(element){
                element[0].style.width="80%";
                element[1].style.width="80%";
                // element.style.opacity="0";
                
            }
        // })
        
        

    }, 100);
    setTimeout(function () {
            if(element){
                // element[0].style.width="80%";
                element[1].style.width="80%";
                // element.style.opacity="0";
                
            }
    }, 200);
    setTimeout(function () {
        if(element){
            // element[0].style.width="80%";
            element[2].style.width="80%";
            // element.style.opacity="0";
            
        }
}, 300);
    setTimeout(()=>{
        element.forEach((element)=>{
            if(element){
                element.style.opacity="0";
                // element.style.opacity="0";
                
            }
        })
    },500);
    setTimeout(function () {
        // element.style.opacity="0";
        // Set the height to 500px (or any desired value)
        m.style.opacity=1;
        m.style.transform = "translateY(0px)";
        line.style.height = '500px';

    }, 500);


  });



document.addEventListener("mousemove", (event) => {
    const footer = document.querySelector(".footer");
    
    if (footer && event.target.closest(".footer")) {
      document.querySelector(".Light").style.setProperty('--x',event.clientX+'px');
      document.querySelector(".Light").style.setProperty('--y',event.clientY+'px');

    }
  });
  