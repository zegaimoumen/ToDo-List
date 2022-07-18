// all variabel 

let tasks = [];
let taskschecked = [];
let newarray = [];
let newtaskschecked = [];

let addBtn = document.getElementById("add-task");
let addInput = document.getElementById("add");
let enterTask = document.getElementById("enter-task");
let addList = document.getElementById("add-list");
let List = document.getElementById("task");
let  taskChecked = document.getElementById("taskChecked");
let  checkedInput = document.getElementById("checked");

let newTask = "" ;
let id = tasks.length;

// add events 

addBtn.addEventListener("click" , function (){
    addInput.style.display = "flex";
    addBtn.style.display = "none";
})



addList.addEventListener("click" , function (){
    let inputValue = enterTask.value;
    newTask = { id , inputValue };
    tasks.push(newTask);
    addToList(tasks);
    addInput.style.display = "none";
    addBtn.style.display = "block";
    enterTask.value = "";
})

// add task to add some tasks

function addToList(task) {
    List.innerHTML = "";
    task.map(i => {
        List.innerHTML += `
    <div id="${i.id}">
        <input type="checkbox" name = "task" id="checked" onclick="taskisChecked(${i.id})"/>
        <span id="taskChecked">${i.inputValue}</span>
        <button id="remove" onclick="removeTask(${i.id})">x</button>
    </div>    
    ` ;
    id += 1;
    })
}

// Checked the task

function taskisChecked (id) {
    tasks.filter(i => {
        if(i.id !== id) {
            newarray.push(i);
        }else {
            taskschecked.push(i);
        }
    })

    tasks = newarray;
    addToList(tasks);
    newarray = [];
    addtasktochecked(taskschecked);
}

// add to Task Checked 

const addtasktochecked = (taskchecked) => {
    document.getElementById("task-checked").innerHTML = "";
    taskchecked.map(i => {
        document.getElementById("task-checked").innerHTML += `
        <div id="${i.id}">
            <input type="checkbox" name = "task" id="checked" onclick="taskisChecked(${i.id})" checked/>
            <span id="taskChecked" class="line-through">${i.inputValue}</span>
            <button id="remove" onclick="removeTaskFromChecked(${i.id})">x</button>
        </div>    
        ` ;
    })
}

// ramove from " add some tasks " 

const removeTask = (id) => {
    
    tasks.filter(i => {
        if(i.id !== id) {
            newarray.push(i);
        }
    })
    
    tasks = newarray;
    addToList(tasks);
    newarray = [];
}

// ramove from " task Checked " 

const removeTaskFromChecked = (id) => {
    taskschecked.filter(i => {
        if(i.id !== id) {
            newtaskschecked.push(i);
        }
    })
    
    taskschecked = newtaskschecked;
    addtasktochecked(taskschecked);
    newtaskschecked = [];
}
