// Scripts

// geting canvas by id c
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var matrixColor = "green";


//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
//var matrix = "01";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 7.5;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//</script>drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    //style
    //ctx.font = font_size + "px arial";
    ctx.font = font_size + "px arial";
    ctx.fillStyle = matrixColor;
    ctx.fillStyle;
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}
//speed
setInterval(draw, 20);

let clickRed = document.querySelector('.style_prevu_kit-red').addEventListener('mousemove', function(){
    matrixColor = "red";
},false);

let clickYellow = document.querySelector('.style_prevu_kit-yellow').addEventListener('mousemove', function(){
    matrixColor = "yellow";
},false);

let clickGreen = document.querySelector('.style_prevu_kit-green').addEventListener('mousemove', function(){
    matrixColor = "green";
},false);

let clickBlue = document.querySelector('.style_prevu_kit-blue').addEventListener('mousemove', function(){
    matrixColor = "blue";
},false);

let clickwhite = document.querySelector('.style_prevu_kit-white').addEventListener('mousemove', function(){
    matrixColor = "white";
},false);

let clickPink = document.querySelector('.style_prevu_kit-pink').addEventListener('mousemove', function(){
    matrixColor = "pink";
},false);

let clickPruple = document.querySelector('.style_prevu_kit-purple').addEventListener('mousemove', function(){
    matrixColor = "purple";
},false);