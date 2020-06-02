const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let speed = 1;

function timeTravel(speedEntery) {
    speed = speedEntery;
}

(document.querySelector('.x0x').onclick) = function(){
    timeTravel(0);
    console.log(`0`);
};

(document.querySelector('.x5x').onclick) = function(){
    timeTravel(5);
    console.log(`2x`);
};

(document.querySelector('.x25x').onclick) = function(){
    timeTravel(25);
    console.log(`24x`);
};

(document.querySelector('.x100x').onclick) = function(){
    timeTravel(1000);
    console.log(`8x`);
};

function clock(){

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //console.log(sec);

    console.log(`----------1 sec pased ---------`);

    let hrPosition = ((hr*360)/12 + ( speed * (min*360/60)/12));
    console.log(`hrPosition : ${hrPosition}`);
    let minPosition = (((min*360)/60) + (sec*(360/60)/60)) * (speed);
    console.log(`minPosition : ${minPosition}`);
    let secPosition = ((sec*360)/60) * speed;
    console.log(`secPosition : ${secPosition}`);

    //console.log(date);

    HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {
        console.log(`connected`);
            document.querySelector(".main").style.backgroundColor="red";
    }
}

(document.querySelector('.red').onclick) = function change(){
    document.querySelector(".main").style.backgroundColor="red";
};
(document.querySelector('.black').onclick) = function change(){
    document.querySelector(".main").style.backgroundColor="black";
};
(document.querySelector('.blue').onclick) = function change(){
    document.querySelector(".main").style.backgroundColor="blue";
};
(document.querySelector('.yellow').onclick) = function change(){
    document.querySelector(".main").style.backgroundColor="yellow";
};
(document.querySelector('.white').onclick) = function change(){
    document.querySelector(".main").style.backgroundColor="white";
};

// running
var interval = setInterval(clock, 1000);