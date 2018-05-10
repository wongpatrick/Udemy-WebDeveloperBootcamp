var answer = prompt("Are we there yet?");
while (answer.toLowerCase().includes("yes") !== true || answer.toLowerCase().includes("yeah") != true)
{
	answer = prompt("Are we there yet?");
}
alert("Yay, we made it!!")


// var answer = prompt("Are we there yet?");
// while (answer.indexOf("yes") === -1)
// {
// 	answer = prompt("Are we there yet?");
// }
// alert("Yay, we made it!!")