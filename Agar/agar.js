const AREA = document.body;
const player = document.querySelector('.player');
const food = document.querySelector('.div-food');
const map = document.querySelector(`.map`);

let foodNumber = 0;
let foodFactory = [];

var windowWidth = screen.width;
var windowHeight = screen.height;
speed = 100;
foodMax = 10;

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

    player.width = 50;
    player.height = 50;


    for(let i = 0; i < foodFactory.length; i++){

        foodFactory[i].width = "40px";
        foodFactory[i].height = "40px";

        console.log(`Player => x: ${player.style.left} y: ${player.style.top} width: ${player.width} height: ${player.height}`);
        console.log(`Food => x: ${foodFactory[i].style.left} y: ${foodFactory[i].style.top} width: ${foodFactory[i].width} height: ${foodFactory[i].height}`);
        console.log(`( (player.style.left) ${player.style.left} < (foodFactory[i].style.left + foodFactory[i].width) ${foodFactory[i].style.left + foodFactory[i].width})`);

        if ( ( (player.style.left) < (foodFactory[i].style.left + foodFactory[i].width) ) &&  
             ( (player.style.left + player.width)  > (foodFactory[i].style.left) ) &&
             ( (player.style.top) < (foodFactory[i].style.top + foodFactory[i].height) ) && 
             ( (player.style.top + player.height) > (foodFactory[i].style.top) ) 
        ){
            console.log(`collid`);
            foodFactory[i].remove(); 
        }
        console.log(`food I ${foodFactory[i]} I: ${i}`);
    }
}

function follow(e){
    var horizontalPositionPlayer = e.clientX;
    var verticalPositionPlayer = e.clientY;

    player.style.left = (horizontalPositionPlayer + 'px');
    player.style.top = (verticalPositionPlayer + 'px');
    //player position

}

function brain(e){
    follow(e);
    //foodGenerator();
    eating(food, player);
}

AREA.addEventListener('mousemove', brain);

setInterval(foodGenerator, 1000);



//(player.style.left < foodFactory[i].style.left + foodFactory[i].width  && player.style.left + player.width  > foodFactory[i].style.left) &&
//(player.style.top < foodFactory[i].style.top + foodFactory[i].height && player.style.top + player.height > foodFactory[i].style.top) ){