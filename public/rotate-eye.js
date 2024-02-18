window.addEventListener('mousemove', mouseMove);

function mouseMove(event) {
    let mousex = event.clientX;
    let mousey = event.clientY;
    var circle = document.querySelector(".smouse");
    var bcricle = document.querySelector(".mouse");

    // Check if the elements exist before trying to access their style properties
    

    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    // Assuming your circle has a class "circle"
    const circleElement = document.querySelector('.circle');

    // Check if the element exists before trying to access its properties
    if (circleElement) {
        const circleWidth = circleElement.getBoundingClientRect().width;
        const circleHeight = circleElement.getBoundingClientRect().height;

        // Calculate the translation value
        let translationX = x * circleWidth;
        let translationY = y * circleHeight;
        // Ensure the translation stays within the circle boundaries
        translationX = Math.min(Math.max(translationX, -circleWidth / 2), circleWidth / 2);
        translationY = Math.min(Math.max(translationY, -circleHeight / 2), circleHeight / 2);
        // Apply the translation to both c2 circles
        const c2Elements = document.querySelectorAll(".c2");
        if (c2Elements.length >= 2) {
            c2Elements[0].style.transform = `translate(${translationX}px,${translationY}px)`;
            c2Elements[1].style.transform = `translate(${translationX}px,${translationY}px)`;
        }
    }
}

let isMouseMoving = false;

document.addEventListener('mousemove', handleMouseMove);

setInterval(checkMouseStatus, 100);

function handleMouseMove() {
    isMouseMoving = true;
}

var v1, v2;

function checkMouseStatus() {
    if (isMouseMoving) {
        var boy = document.querySelector(".boy");
        // Check if the element exists before trying to access its properties
        if (boy) {
            v1 = setTimeout(() => {
                boy.style.transform = "translateY(0px)";
                boy.style.opacity = "1";
            }, 1000);
        }
        isMouseMoving = false;
    }
    // Add similar checks for other elements if needed
}

