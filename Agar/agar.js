const AREA = document.body;
const player = document.querySelector('.player');
const food = document.querySelector('.div-food');
const map = document.querySelector(`.map`);

let foodNumber = 0;
let foodFactory = [];

var windowWidth = screen.width;
var windowHeight = screen.height;
speed = 100;
foodMax = 100;
// Screen Size
console.log(`windowWidth ${windowWidth} windowHeight ${windowHeight} `);

function foodGenerator(){    
        setTimeout(function() {
        if(foodMax > 0){
            let x = Math.floor(Math.random() * windowWidth); 
            let y = Math.floor(Math.random() * (windowHeight - 550)); 
            
            //food detail:
            var foodAs = document.createElement("div-food"); 
            foodFactory.push(foodAs);
            foodNumber ++;

            foodAs.style.left = (x + 'px');
            foodAs.style.top = (y + 'px');

            map.appendChild(foodAs);
            foodMax --;
        }
    }, 1000);
}

function eating(){

    for(let i = 0; i < foodFactory.length; i++){

        //console.log(`Player => x: ${player.style.left} y: ${player.style.top} width: ${player.width} height: ${player.height}`);
        //console.log(`Food => x: ${foodFactory[i].style.left} y: ${foodFactory[i].style.top} width: ${foodFactory[i].width} height: ${foodFactory[i].height}`);
       
        if ( ( (parseInt(player.style.left)) < (parseInt(foodFactory[i].style.left) + 30) )   &&  
             ( (parseInt(player.style.left) + 90)  > (parseInt(foodFactory[i].style.left)) )   &&
             ( (parseInt(player.style.top)) < (parseInt(foodFactory[i].style.top) + 30) )     && 
             ( (parseInt(player.style.top) + 90) > (parseInt(foodFactory[i].style.top)) )
        ){
            console.log(`collid`);
            foodFactory[i].remove(); 
        }
    }
}

function follow(e){
    var horizontalPositionPlayer = e.clientX;
    var verticalPositionPlayer = e.clientY;
    //player position
    player.style.left = (horizontalPositionPlayer + 'px');
    player.style.top = (verticalPositionPlayer + 'px');
}

function brain(e){
    follow(e);
    //foodGenerator();
    eating(food, player);
}

AREA.addEventListener('mousemove', brain);
setInterval(foodGenerator, 1000);