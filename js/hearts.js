const colors=[
"#ff4d6d",
"#ff758f",
"#ff8fa3",
"#ffb3c1",
"#f72585",
"#b5179e",
"#7209b7",
"#ffd166"
];

function createHeart(){

let heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(18+Math.random()*25)+"px";
heart.style.animationDuration=(6+Math.random()*6)+"s";
heart.style.color=colors[Math.floor(Math.random()*colors.length)];

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},12000);

}

setInterval(createHeart,400);