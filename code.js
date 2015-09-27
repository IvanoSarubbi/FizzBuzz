$(document).ready(function() {



    $('.button').click(function() {

        var fizzBuzz = function (number) {
        
        for (i = 1; i <= number; i++) {
            if (i%15 === 0) {
                $('.game').append("fizz buzz");
            }
            else if (i%3 === 0) {
                $('.game').append("fizz");
            }
            else if (i%5 === 0) {
                $('.game').append("buzz");
            }
            else {
                $('.game').append('<p>' + i + '</p>');
            }
        };
        };

        if(+$('input').val()) {
            fizzBuzz($('input').val());
        }
        else {
            alert('Please enter a number');
        }
    $('input').val('');
    }); 
});