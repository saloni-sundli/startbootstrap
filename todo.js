document.querySelector('#addbtn').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a New Task Here.")
    }

    else{
        let sub_task = document.createElement('div');
        sub_task.innerHTML = `<div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">X</button>
        </div>`

        document.querySelector('.tasks').appendChild(sub_task);
}

let current_task = document.querySelectorAll('.delete');

for(var i = 0; i < current_task.length; i++){
    current_task[i].onclick = function(){
        this.parentNode.remove();
    }
}

let tasks = document.querySelectorAll('#taskname')

for(var i = 0; i < tasks.length; i++){
    tasks[i].onclick = function(){
        this.classList.toggle('completetask');
    }
    document.querySelector('#newtask input').value ="";
}

}