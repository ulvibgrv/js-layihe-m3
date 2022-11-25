const addInput = document.querySelector("#todoInput");
const sortBtn = document.querySelector(".todo_sort_icon");
const addBtn = document.querySelector("#todo_addBtn");
const delTaskBtn = document.querySelector("#deleteBtn");
const todoList = document.querySelector(".todo_content_list");

delTaskBtn.addEventListener("click", () => {
  addInput.value = "";
});

addBtn.addEventListener("click", (e) => {
  let todo = addInput.value;
  todo = todo.trim();
  if (todo == "") {
    alert("İnput boşdur!");
  } else {
    console.log(todo);
    addTodo(todo);
    addInput.value = "";
    deteleTodo();
  }
});

function addTodo(todo) {
  if (Array.isArray(todo)) {
    todoList.innerHTML = "";
    todo.map((element) => {
      todoList.innerHTML += `
                <li class="todo_content_list_item">
                    <span class="todo_content_list_item_text" id="todo_content_list_item_text">
                        ${element.innerText}
                    </span>
                    <svg class="todo_content_list_item_delete deleteListItem" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 20.5C5.7533 20.5 1.5 16.2467 1.5 11H0.5C0.5 16.799 5.20101 21.5 11 21.5V20.5ZM20.5 11C20.5 16.2467 16.2467 20.5 11 20.5V21.5C16.799 21.5 21.5 16.799 21.5 11H20.5ZM11 1.5C16.2467 1.5 20.5 5.7533 20.5 11H21.5C21.5 5.20101 16.799 0.5 11 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5ZM6.64645 7.35355L10.6464 11.3536L11.3536 10.6464L7.35355 6.64645L6.64645 7.35355ZM10.6464 11.3536L14.6464 15.3536L15.3536 14.6464L11.3536 10.6464L10.6464 11.3536ZM7.35355 15.3536L11.3536 11.3536L10.6464 10.6464L6.64645 14.6464L7.35355 15.3536ZM11.3536 11.3536L15.3536 7.35355L14.6464 6.64645L10.6464 10.6464L11.3536 11.3536Z" fill="#C4C4C4"/>
                    </svg>
                </li>`;
    });
  } else {
    let todoListItem = ` 
        <li class="todo_content_list_item">
            <span class="todo_content_list_item_text" id="todo_content_list_item_text">
                ${todo}
            </span>
            <svg class="todo_content_list_item_delete deleteListItem" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20.5C5.7533 20.5 1.5 16.2467 1.5 11H0.5C0.5 16.799 5.20101 21.5 11 21.5V20.5ZM20.5 11C20.5 16.2467 16.2467 20.5 11 20.5V21.5C16.799 21.5 21.5 16.799 21.5 11H20.5ZM11 1.5C16.2467 1.5 20.5 5.7533 20.5 11H21.5C21.5 5.20101 16.799 0.5 11 0.5V1.5ZM11 0.5C5.20101 0.5 0.5 5.20101 0.5 11H1.5C1.5 5.7533 5.7533 1.5 11 1.5V0.5ZM6.64645 7.35355L10.6464 11.3536L11.3536 10.6464L7.35355 6.64645L6.64645 7.35355ZM10.6464 11.3536L14.6464 15.3536L15.3536 14.6464L11.3536 10.6464L10.6464 11.3536ZM7.35355 15.3536L11.3536 11.3536L10.6464 10.6464L6.64645 14.6464L7.35355 15.3536ZM11.3536 11.3536L15.3536 7.35355L14.6464 6.64645L10.6464 10.6464L11.3536 11.3536Z" fill="#C4C4C4"/>
            </svg>
        </li>
        `;
    todoList.innerHTML += todoListItem;
  }
}

function deteleTodo() {
  let todoListItem = document.querySelectorAll(".todo_content_list_item");
  todoListItem.forEach((li) => {
    console.log(li);
    li.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("deleteListItem")) {
        li.remove();
      } else {
        alert("Silmek duymesine basin!");
      }
    });
  });
}

sortBtn.addEventListener("click", () => {
  let listItemText = [
    ...document.getElementsByClassName("todo_content_list_item_text"),
  ];
  console.log(listItemText);
  let sorted = doSort(listItemText);
  addTodo(sorted);
  deteleTodo();
});

const doSort = (todoList) => {
  return todoList.sort((a, b) => {
    if (a.innerText > b.innerText) {
      return 1;
    }
    if (a.innerText < b.innerText) {
      return -1;
    }
    return 0;
  });
};
