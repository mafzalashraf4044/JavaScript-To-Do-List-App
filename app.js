var taskText = "";
var total = 0;
var completed = 0;
var pending = 0;


document.addEventListener('load',function(){

    document.getElementById("textField").focus();
    
},false);


function addTask(){

    taskText = document.getElementById("textField").value;

    if(taskText.length > 0){

        document.getElementById("list").innerHTML += "<div id='task'><input type='checkbox' id='status' onchange='taskStatus()'><span id='taskText'>" + taskText +
        "</span><form class='form'><input type='button' id='delete' class='form-control pull-right' value='Delete' onclick='deleteTask()'></form></div>";
        
        document.getElementById("textField").value = "";
        total++;
        pending++;
    }else{
        alert("Please Enter a Task in the Text Box.")
    }



    updateStats();
}

document.getElementById("done").onclick = addTask;


function deleteTask(e){

    if(!e){
        e = window.event;
    }

    var target = e.target || e.srcElement;
    document.getElementById("list").removeChild(target.parentNode.parentNode);

    if(target.parentNode.previousSibling.previousSibling.checked){
        total--;
        completed--;
    }else{
        total--;
        pending--;
    }
    updateStats();
}

function taskStatus(e){

    if(!e){
        e = window.event;
    }

    var target = e.target || e.srcElement;

    if(target.checked){

        target.nextSibling.setAttribute("class","strike");


    pending--;
    completed++;
    }else{
        target.nextSibling.removeAttribute("class");
        pending++;
        completed--;
    }

    updateStats();
}

function updateStats(){

    document.getElementById("total").innerHTML = total;
    document.getElementById("pending").innerHTML = pending;    
    document.getElementById("completed").innerHTML = completed;

}