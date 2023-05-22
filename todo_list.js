const ps = require("prompt-sync")({ sigint: true });

function createTodoList() {
  const todoList = []; //arr = [1,3,4];
  let todo = ps("Enter a todo: ");
  while (todo) {
    todoList.push(todo); //arr.push(6);
    todo = ps("Enter another todo (or press Enter to finish): ");
  }
  return todoList;
}

function markTaskCompleted(todoList) {
  const taskIndex = ps("Enter the index of the completed task: ");
  if (taskIndex < 0 || taskIndex >= todoList.length) { //  0 < taskindex < todolist.length
    console.log("Invalid index!");
  } else {
    todoList.splice(taskIndex, 1);
    console.log("Task removed.");
  }
}

function printTodoList(todoList) {
  if (todoList.length === 0) {
    console.log("Todo list is empty.");
  } else {
    console.log("Todo list:");
    for (let i = 0; i < todoList.length; i++) { //enni unte anni todo list lo vee print chey
      console.log(`${i + 1}. ${todoList[i]}`);
    }
  }
}

let todoList ; //why means we have manipulated  above array so  we printing again it 
todoList = createTodoList();
printTodoList(todoList);
markTaskCompleted(todoList);
printTodoList(todoList); //reusabilty of function
