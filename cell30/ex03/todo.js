
let list = document.getElementById('ft_list');
let cookie = [];

window.addEventListener("load", (event) => {
    // clearCookie("todos");
    cookie = getCookie("todos") || [];
    console.log("window cookie : ",cookie)
    let todo = [...cookie];
    todo.forEach((todo)=> createTodo(todo));
});

const createTodo = (name)=>{

    const Newtodo = document.createElement('div');
    Newtodo.innerHTML = `
        <p >${name}</p>
        <button onclick="deleteTodo('${name}')">X</button>
    `
    Newtodo.className = "todo";
    Newtodo.id = name;
    list.appendChild(Newtodo);
    console.log("Create successfully : ",name);
    // console.log(todo);
    setCookie();
}

const AddTodo = ()=>{
   const name = prompt('Enter new Todo :');
    if (name && name.trim() !== '') {
        createTodo(name);
    }
}

const deleteTodo = (name)=>{
    if (confirm('Do you really want to delete this Todo?')) {
        document.getElementById(name).remove();
        setCookie();
    }
    console.log("Delete successfully");
  
}


const setCookie = () =>{
    let todos = [];
    let fr_listTodo = list.querySelectorAll('div');
    fr_listTodo.forEach(item =>{
        todos.push(item.id);
    })
    console.log("set cookie ",todos)
    // set options cookie
    const d = new Date();
    d.setTime(d.getTime()+ (24*60*60*1000));
    let arraytodo = JSON.stringify(todos);

    document.cookie = `todos=${arraytodo}; expires = ${d.toUTCString()}; path=/`;

}

const getCookie = (name)=>{
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';').map(c => c.trim());
    console.log(cookies);
    for (let cookie of cookies) {
        // console.log(cookie)
        if (cookie.startsWith(name + '=')) {
            let value = cookie.substring(name.length + 1);
            try {
                return JSON.parse(value); 
            } catch {
                return value;
            }
        }
    }
    return null;
}


// test clear cookie 
const clearCookie = (name) => {
    if (!name) {
        return;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};