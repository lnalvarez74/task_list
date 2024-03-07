//constants declared for input button and task list area
    //const taskInput   = document.querySelector("#newtask input"); -->usar getElementById 
    const taskInput   = document.getElementById('taskinput');
    const tasksection = document.getElementById('task');
//listener for the Enter key. Used to add a new task. 
//taskInput.addEventListener
    taskInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            createTask();
        }
    });
//the onclick event for the 'Add' button 
    document.querySelector('#push').onclick = function (){
        createTask()
        ;}
//the function that creates a task
function createTask() {
    if (taskInput.value.length == 0) {
        alert("El campo de la tarea está en blanco. Introduce un nombre de tarea e inténtalo de nuevo.");
    }
    else {
        //this block inserts HTML that creates each task into the task area div element 
        let qs = document.querySelector('#newtask input').value;
        
        //'+qs+'
       tasksection.innerHTML +='<div class="task"><label id="taskname"><input onclick="updateTask(this)" type="checkbox" id="check-task"><p>'+document.querySelector('#newtask input').value+'</p></label><div class="delete"><i class="uil uil-trash"></i></div></div>';
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        tasksection.offsetHeigth >= 300
           ? tasksection.classList.add("overflow")
           : tasksection.classList.remove("overflow");
    }
}
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) { 
        taskItem.classList.add("checked"); 
    }
    else {
        taskItem.classList.remove("checked");
    }
}
    