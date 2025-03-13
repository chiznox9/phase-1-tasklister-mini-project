document.addEventListener("DOMContentLoaded", () => {
   // Select the form and task list container
   const form = document.getElementById("create-task-form");
   const taskList = document.getElementById("tasks");
 
   // Handle form submission
   form.addEventListener("submit", function (event) {
     event.preventDefault(); // Prevent page reload
 
     // Get input value
     const newTask = document.getElementById("new-task-description").value;
     
     if (newTask.trim() === "") return; // Prevent empty tasks
 
     // Create new list item
     const li = document.createElement("li");
     li.textContent = newTask;
 
     // Add delete button
     const deleteBtn = document.createElement("button");
     deleteBtn.textContent = "❌";
     deleteBtn.style.marginLeft = "10px";
     deleteBtn.addEventListener("click", () => li.remove());
 
     li.appendChild(deleteBtn);
     taskList.appendChild(li);
 
     // Clear input field
     form.reset();
   });   
});
