//while x<101
//increment
//IF
//x%3=0 AND x%5=0, FizzBuzz
//elseif x%3, Fizz
//elseif x%5, Buzz
//Append to body

var theCount;
$(document).ready(function(){
	$(document).keydown(function(e) {
		    if (e.keyCode == 88) {
				for (theCount = 1; theCount < 100; theCount++) {
				if (theCount % 3 == 0 && theCount % 5 == 0) {
					$( ".buzzhere" ).append( "<p>FizzBuzz</p>" );
				} else if (theCount % 3 == 0) {
					$( ".buzzhere" ).append( "<p>Fizz</p>" );
				} else if (theCount % 5 == 0) {
					$( ".buzzhere" ).append( "<p>Buzz</p>" );
				} else {
					$( ".buzzhere" ).append( '<p>' + theCount + '</p>' );
				};
			}
		}
	})
});
