// function showMessagge(){
//     alert("This is a function in JavaScript");
// }

// showMessagge();

function sum(x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);


//arrow function
// var arrowFunction = name => alert(`Hello ${name}`);

// arrowFunction("John");


function testFunction(){
    var localVar = "ARIANA";
    alert(localVar);
}

testFunction();

var car ={name: "Toyota",
    color:"red",
    year: 2015,
    kilometers:0,
    startEngine:function(){
        alert("The car is starting");
        },
        get getKilometers(){
            return this.kilometers;
            },
            set setKilometers(km){
                this.kilometers = km;
        }
};

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);

// alert(car.name);

// alert(car['color']);


// var car = new Object();

// car.name = "Toyota";
// car.color = "red";
// car.year = 2015;
// car.kilometers = 0;

// car.type = function(){
//     return this.name + " " + this.color + " " + this.year + " " + this.kilometers;
// }

//console.log(car.type());


