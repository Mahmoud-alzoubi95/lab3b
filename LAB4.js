// var userInput = prompt('Whats your name?');
// console.log(userInput);

// alert('Hello ' + userInput);

// console.log(123 + 345);

// console.log('123' + 345);

// console.log('abc' + 'de' );

// var userName = 'sara';
// var userInput = 'anything';
// console.log(userName , userInput);
// var pi = 3.14 + 10;

// var x = 5;
// // < > != <= >=
// console.log(pi * x);

// console.log(pi);
// var y =20;
// var z ='20';
// console.log( y == z );
// // console.log(x >= pi);
// // console.log(x < pi);

// var numberOne = 10;
// var numberTwo = 10;
// // = assigning value 
// // == checking 2 values regarding the datatype
// // === stictly equl 
// var newUser = 'mohammad al azzam';
// // alert('Hi ' + newUser);
// console.log(newUser);


// // var mohammad = 'mohammad al khazali';
// // console.log(mohammad);

// var mohammad;

// mohammad = 5;
// console.log(mohammad)
// // reassign
// mohammad = 10;

// mohammad = 'ahmad';
// console.log(mohammad)

// // alert('this wont be saved')


//conditions 

// if statement
// var x = 15; 
// var y = 10;

// if(x<y){ // either true or false
//     alert('Hello ahmad');
// }else{
//     alert('We  are here in the else')
// }

var yes = 'yes'
var no = 'no'
var name = prompt('whats your name?');
alert('welcom ' + name);

var happy = prompt('are you good ' + name +'?');
if(happy == yes){
    alert('I hope you stay happy ' + name);

}
else if (happy==no ){
    alert('you should search about the happyness and causes that make you happy ' + name);
}

 var planet = prompt('which on of these planets you prefer , mars or saturn?');
 var mars = 'mars'  ;
 var saturn ='saturn' ;
 var ph1 = document.createElement("img");
 var pho = document.createElement("img");
// // people less than 18 to be alerted with hello teenger

 


 if(planet==mars){
    alert('nice choice');
    document.write('<h3>'+'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".' + '</h3>');
    ph1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg"
    document.body.appendChild(ph1);
}


 else if (planet==saturn){
    alert('nice choice') 
    document.write('<h3>'+'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.' + '</h3>');
    pho.setAttribute('src' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saturn%2C_Earth_size_comparison2.jpg/220px-Saturn%2C_Earth_size_comparison2.jpg')
    document.body.appendChild(pho);
}
   //  alert('Hello Adults');
   // as genral case 
// };
// people greater than 18 to be alerted with hello adults 

// if we have more than one condition
// 24
//var hourNow = prompt('what is the time');
//if(hourNow > 18){
  //  document.write('<h3>'+'Good Evening' + '</h3>');
//}else if(hourNow > 12){
  //  document.write('Good afternoon');
//}else if (hourNow >= 0 ){
  //  document.write('Good morning');
//}else{
  //  alert('Welcome!');
//}

// another way to show an output
// document.write("Welcome People");