$(document).ready(function(){
	var unparsedNumber = prompt("Please enter an integer.");
	var endNumber = parseInt( unparsedNumber ); //There's no need to filter out decimals. 16.999~ is still less than but NOT equal to 17, so it will not move to the next number.
	if (isNaN(endNumber) == true) {
		alert("You didn't enter an integer. Please enter an Integer next time.");
		var unparsedNumber = prompt("Please enter an integer.");
		var endNumber = parseInt( unparsedNumber );
		fizzAndBuzz(endNumber);
	console.log(endNumber);
	} else {
		fizzAndBuzz(endNumber);	
	}
});

function fizzAndBuzz(endNumber) {
	for (var i = 1; i <= endNumber; i++) {
		if (i % 3 == 0 && i % 5 == 0) { $( ".buzzhere" ).append( "<p>FizzBuzz</p>" );
		} else if (i % 3 == 0) { 
			$( ".buzzhere" ).append( "<p>Fizz</p>" );
		} else if (i % 5 == 0) { 
			$( ".buzzhere" ).append( "<p>Buzz</p>" );
		} else { 
			$( ".buzzhere" ).append( '<p>' + i + '</p>' );
		};
	};
}


