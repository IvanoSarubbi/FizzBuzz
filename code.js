$(document).ready(function(){

     
    for ( var i = 1; i < 21; i++){

    if ((i % 3 === 0) && (i % 5 === 0)) {

    $('.solution').append('<p>FizzBuzz</p>');

     }else{

    if (i % 3 === 0) {

       $('.solution').append('<p>Fizz</p>');

    }
    else if (i % 5 === 0) {

        
        $('.solution').append('<p>Buzz</p>');
    }
    else {
     
        $('.solution').append('<p>' + i + '</p>');
    }

}
    
     
}
});