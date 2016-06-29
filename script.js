$(document).ready(function() {
function fizzBuzz(){
  var i=0;
  for (i = 1; i <= 100; i ++) {
    if (i % 3===0) { 
    	if (i%5===0){
    		document.write("FizzBuzz <br />")
    	}
    	else {
    		document.write("Fizz <br />")
    	}
    }
    else if (i%5===0){
    	document.write("Buzz <br />")
    }
    else{
    	document.write(i + "<br />")
    }
  }
};
$('p').text(fizzBuzz())

})

