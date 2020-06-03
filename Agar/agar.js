const AREA = document.body;
const player = document.querySelector('.player');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
speed = -35;

function follow(e){
    var horizontalPositionPlayer = e.clientX;
    var verticalPositionPlayer = e.clientY;

    player.style.left = (horizontalPositionPlayer + 'px');
    player.style.top = (verticalPositionPlayer + 'px');
}

AREA.addEventListener('mousemove', follow);