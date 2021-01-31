var saturn = 'saturn';
var mars = 'mars';
var planet = prompt('which on of these planets you prefer , mars or saturn?');
while (planet !=='mars' && planet !=='saturn'){
    planet = prompt('please choose your prefer planet!');
}
var x = prompt('how many times you went to see these planets?')
            alert('you are lucky ');



M77(planet);

while (planet !=='mars' && planet !=='saturn'){
    planet = prompt('please choose your prefer planet!');
}


function M77(planet){
    var image=''; 
    var ph1 = document.createElement("img");
    var pho = document.createElement("img");
    
    
    
    //for(n=0 ; n<x ; n++ ){
    
    if (planet == mars) {
        
       
        image =image + '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg">'
        console.log(image)
    
        document.write('<h3>' + 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".' + '</h3>');
    }
        else if (planet == saturn) {
            //alert('you are lucky ');
             image = image + '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saturn%2C_Earth_size_comparison2.jpg/220px-Saturn%2C_Earth_size_comparison2.jpg ">'
             console.log(image)
             document.write('<h3>' + 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.' + '</h3>');
    
         }


         document.write(image)
         
    }
    







