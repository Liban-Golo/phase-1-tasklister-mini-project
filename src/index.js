document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const todoForm = document.getElementById("create-task-form")
  const userInput = document.getElementById("new-task-description")
  const taskList = document.getElementById("list");

  const userTask = userInput.value;
  todoForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const userTask = userInput.value;

  if (userTask === "") return; 

  const li = document.createElement("li");
  li.textContent = userTask;

  taskList.appendChild(li);
  userInput.value = ""; 

 
});






});
