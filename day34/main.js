// function PrintNames(){
//     document.write("Ariana");
//     document.write("<br>");
//     setTimeout(function () {document.write("Mergim"); }, 3000);
//     document.write("Dalmat")
// }

// PrintNames();

var colors= ['red', 'green', 'blue', 'purple'];

function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names=['Lora','Ilma','Bleard','Erona','Nita'];

function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changeColor, 1000);
setInterval(changeNames, 1000);