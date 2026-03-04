// MATRIX BACKGROUND

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++)
drops[x] = 1;

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff9c";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text = letters.charAt(Math.floor(Math.random()*letters.length));

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);


// TERMINAL INTRO

const messages = [
"> initializing system...",
"> loading cybersecurity portfolio...",
"> verifying identity...",
"> access granted"
];

let line=0;
let char=0;

const terminal=document.getElementById("terminal-text");

function type(){

if(line < messages.length){

if(char < messages[line].length){

terminal.innerHTML += messages[line].charAt(char);

char++;

setTimeout(type,40);

}else{

terminal.innerHTML += "<br>";

line++;

char=0;

setTimeout(type,500);

}

}else{

setTimeout(()=>{

document.getElementById("terminal-intro").style.display="none";
document.getElementById("main-content").style.display="block";

startTyping();

},800);

}

}

type();


// HEADER TYPING

function startTyping(){

const text="Bandari Vathan Sai | Cybersecurity Portfolio";

let i=0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

}
