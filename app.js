var list = document.getElementById("list");

function addTodo() {
  var todo_items = document.getElementById("todo-items");
  if (todo_items.value >= 0) {
    alert("Add Something");
    return;
  }

  var li = document.createElement("li");
  li.className = "main";

  var p = document.createElement("p");
  p.innerText = todo_items.value;

  var delBtn = document.createElement("button");
  var delText = document.createTextNode("DELETE");
  delBtn.setAttribute("class", "btn");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteItem(this)");

  var editBtn = document.createElement("button");
  var editText = document.createTextNode("EDIT");
  editBtn.appendChild(editText);
  editBtn.setAttribute("class", "btn");
  editBtn.setAttribute("onclick", "editItem(this)");

  var div1 = document.createElement("div");
  div1.appendChild(editBtn);
  div1.appendChild(delBtn);
  li.appendChild(p);

  li.appendChild(div1);

  list.appendChild(li);

  todo_items.value = "";
}

function deleteItem(e) {
  e.parentNode.parentNode.remove();
}
function deleteAll() {
  list.innerHTML = "";
}
function editItem(e) {
  var val = prompt(
    "Enter updated Value",
    e.parentNode.parentNode.firstChild.innerText
  );

  e.parentNode.parentNode.firstChild.innerText = val;
}
