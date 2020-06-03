const AREA = document.body;
const player = document.querySelector('.player');
const CIRCLE1 = document.querySelector('.circle1');
const CIRCLE2 = document.querySelector('.circle2');
const CIRCLE3 = document.querySelector('.circle3');
const CIRCLE4 = document.querySelector('.circle4');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var distance = 150;

function mouseCoordinates(e) {
    
    var horizontalPositionPlayer = e.clientX - 35;
    var verticalPositionPlayer = e.clientY - 35;

    var horizontalPosition1 = e.clientX;
    var verticalPosition1 = e.clientY - distance;

    var horizontalPosition2 = e.clientX;
    var verticalPosition2 = e.clientY + distance;

    var horizontalPosition3 = e.clientX - distance;
    var verticalPosition3 = e.clientY;

    var horizontalPosition4 = e.clientX + distance;
    var verticalPosition4 = e.clientY;

    // Set horizontal and vertical position.
    player.style.left = horizontalPositionPlayer + 'px';
    player.style.top = verticalPositionPlayer + 'px';

    CIRCLE1.style.left = horizontalPosition1 + 'px';
    CIRCLE1.style.top = verticalPosition1 + 'px';
    
    CIRCLE2.style.left = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition2 + 'px';
    
    CIRCLE3.style.left = horizontalPosition3 + 'px';
    CIRCLE3.style.top = verticalPosition3 + 'px';
    
    CIRCLE4.style.left = horizontalPosition4 + 'px';
    CIRCLE4.style.top = verticalPosition4 + 'px';
    
}

function changeColorOnTouch() {
    //player.style.backgroundColor = "green";
    //player.style.borderColor = "green";
}

function galaxyMove(){
    
    // right click
    console.log("You pressed button: " + event.button)
    if(event.button == 0){
        distance = 100;
        CIRCLE1.style.backgroundColor = "red";
        CIRCLE2.style.backgroundColor = "red";
        CIRCLE3.style.backgroundColor = "red";
        CIRCLE4.style.backgroundColor = "red";
    } 

    // left click    
    else if (event.button == 2){
        distance = 200;
        CIRCLE1.style.backgroundColor = "white";
        CIRCLE2.style.backgroundColor = "white";
        CIRCLE3.style.backgroundColor = "white";
        CIRCLE4.style.backgroundColor = "white";
    }

    
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates);

// When the mouse touches the circle, run the changeColorOnTouch function.
player.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
// orbit1.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
