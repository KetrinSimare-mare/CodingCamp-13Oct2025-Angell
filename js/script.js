const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const search = document.getElementById("search");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = document.getElementById("task").value.trim();
  const date = document.getElementById("date").value;

  if (!task || !date) {
    alert("Please fill in all fields!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${task} (Due: ${date})`;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  todoList.appendChild(li);

  form.reset();
});

search.addEventListener("input", function () {
  const keyword = search.value.toLowerCase();
  const items = todoList.getElementsByTagName("li");
  Array.from(items).forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(keyword)
      ? ""
      : "none";
  });
});