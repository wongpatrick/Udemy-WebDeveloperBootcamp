

var todos = ["Buy new Turtle"];
var input = prompt("What woud you like to do?");
while (input !== "quit") {
	
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodos();
	} else if (input === "delete") {
		deleteTodos();
	}
	var input = prompt("What woud you like to do?");
}
console.log("OK, you quit the app")

function listTodos(){
	console.log("======");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("======");
}

function addTodos(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo)
	console.log("Added a new Todo")
}

function deleteTodos() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo")
}