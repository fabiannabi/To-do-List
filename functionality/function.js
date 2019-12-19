let AddTask = document.querySelector(".ToDoForm");
let GetTask = document.querySelector(".task");
let ResetList = document.querySelector(".reset");
let display = document.querySelector(".taskList");
let status = document.querySelector(".status");

let Data = [];
if (localStorage.getItem("Data")) {
  Data = JSON.parse(localStorage.getItem("Data"));
} else {
  Data = [];
}

AddTask.addEventListener("submit", function(event) {
  // prevent default

  event.preventDefault();

  //notify list update
  if (GetTask.value.length < 1) {
    status.className = "Error";
    status.innerText = "Please Complete The Form";
    return;
  } else {
    status.innerText = "";
  }

  Data.push(GetTask.value);
  //create a node to add to de ol
  let node = document.createElement("li");

  //thing to add to the node
  let tasknode = document.createElement("span");
  let buttonnode = document.createElement("button");
  buttonnode.className = "completeTask";
  node.className = "taskItem";
  //whatas inside each node

  tasknode.innerText = GetTask.value;
  buttonnode.innerText = "Complete";
  //merge all

  node.appendChild(tasknode);
  node.appendChild(buttonnode);
  display.appendChild(node);

  //clear fields every sumbition
  GetTask.value = "";

  //save data
  localStorage.setItem("Task", display.innerHTML);
  localStorage.setItem("Data", JSON.stringify(Data));
  console.log(JSON.parse(localStorage.getItem("Data")));
});
ResetList.addEventListener("click", function(event) {
  event.preventDefault();
  //clears input fields
  GetTask.value = "";
  status.className = "Cleared";
  status.innerText = "Succesfully Cleared List";
  localStorage.setItem("Task", "");
  localStorage.setItem("Data", "");
  display.innerHTML = "";
  Data = [];
});

let SavedData = localStorage.getItem("Task");

if (SavedData) {
  display.innerHTML = SavedData;
}
