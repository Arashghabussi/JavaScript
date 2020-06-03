var speed = 10;
var position;

var player = document.querySelector(".player");

var objImage= null;
function init(){
    objImage=document.getElementById("player");				
    objImage.style.position='relative';
    objImage.style.left='500px';
    objImage.style.top='500px';
}

function getKeyAndMove(e){				
    var key_code=e.which||e.keyCode;
    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;						
    }
}
function moveLeft(){
    //console.log(`clicked`);
    player.style.left=parseInt(player.style.left) - speed + 'px';
}
function moveUp(){
    //console.log(`clicked`);
    player.style.top=parseInt(player.style.top) - speed + 'px';
}
function moveRight(){
    //console.log(`clicked`);
    player.style.left=parseInt(player.style.left) + speed + 'px';
}
function moveDown(){
    //console.log(`clicked`);
    player.style.top=parseInt(player.style.top)+ speed + 'px';
}
window.onload=init;