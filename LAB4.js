
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
   
