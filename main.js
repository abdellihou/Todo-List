/**Creating a to list using the console
/ToDoList Version 1
*/

// let tasks = [] ;
// do {
//     var taskInput = prompt("Add you task please , once done type quit")
//     if (taskInput !== "quit") {
//         tasks.push(taskInput)
//     }
// }
// while (taskInput !== "quit")
// tasks.forEach(function(task) {
//     if (task !== "") {
//         console.log(task)
//     }
// })

/**Creating a to list using the DOM manipualion
/ToDoList Version 2
*/

let task = document.getElementById("task");
let taskTextField = document.getElementById("taskTextField");
const button = document.getElementById("addTaskButton");

button.onclick = function () {
  let li = document.createElement("li"); //create <li><li/> inside the
  let text = taskTextField.value; // take the value of the input text
  let textNode = document.createTextNode(text); //creating the Text Node inside HTML document  [the document object model tree]
  let checkbox = document.createElement("input"); //create aninput element near the task every time a task is created
  checkbox.type = "checkbox";  //changing the type of the input to Checkbox
  checkbox.onclick = function () {  //one the checkbox is checked 
    li.setAttribute("style", "text-decoration: line-through")//we change the CSS of the li element
    window.setTimeout(function () {  // after 1000 ms the checked check box will be removed
      task.removeChild(li)

    }, 2000)
  };
  task.appendChild(li); //we add an li element  as a child of the element Ul
  li.appendChild(textNode); // we modify the inside of the element li by the text node
  li.appendChild(checkbox); //  we add the element checkbox as a child of ul
  taskTextField.value = ""; //clear the input text after adding a task

};
