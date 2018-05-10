
console.log("print all numbers between -10 and 19")
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("print all even numbers between 10 and 40")
for (var number = 10; number <= 40; number++) {
 	if (number % 2 == 0) {
 		console.log(number)
 	}
}

 console.log("print all odd numbers between 300 and 333")

 for (var number = 300; number <= 334; number++) {
 	if (number % 2 != 0) {
 		console.log(number)
 	}
 }

 console.log("print all odd numbers between 5 and 50")
 for (var number = 5; number <= 51; number++) {
 	if (number % 5 == 0 && number % 3 == 0) {
 		console.log(number);
 	}
 }