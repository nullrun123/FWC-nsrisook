let $list = $("#ft_list");
let cookie = [];

$(window).on("load", function(){
  // clearCookie("todos");
  cookie = getCookie("todos") || [];
  console.log("window cookie : ", cookie);
  let todo = [...cookie];
  todo.forEach((todo) => createTodo(todo));
});

const createTodo = (name) => {
  const $newTodo = $(`
        <div class="todo" id="${name}">
            <p>${name}</p>
            <button class="btn-delete">X</button>
        </div>
    `);
  $list.append($newTodo);
  console.log("Create successfully : ", name);
  // console.log(todo);
  setCookie();
};

$list.on("click", ".btn-delete", function () {
  const name = $(this).parent().attr("id");
  deleteTodo(name);
});

const AddTodo = () => {
  const name = prompt("Enter new Todo :");
  if (name && name.trim() !== "") {
    createTodo(name);
  }
};

const deleteTodo = (name) => {
  if (confirm("Do you really want to delete this Todo?")) {
    $(`#${name}`).remove();
    setCookie();
  }
  console.log("Delete successfully");
};

const setCookie = () => {
  let todos = [];
  $list.children("div").each(function () {
    todos.push($(this).attr("id"));
  });
  console.log("set cookie ", todos);

  // set options cookie
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let arrayTodo = JSON.stringify(todos);

  document.cookie = `todos=${arrayTodo}; expires = ${d.toUTCString()}; path=/`;
};

const getCookie = (name) => {
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(";").map((c) => c.trim());


  for (let cookie of cookies) {
    // console.log(cookie)
    if (cookie.startsWith(name + "=")) {
      let value = cookie.substring(name.length + 1);
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    }
  }
  return null;
};



// test clear cookie
const clearCookie = (name) => {
  if (!name) {
    return;
  }
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
