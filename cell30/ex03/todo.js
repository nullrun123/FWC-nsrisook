
let list = document.getElementById('ft_list');
let todo = [];
let cookie = [];
// ติด cookie อยู่
window.addEventListener("load", (event) => {
    cookie = getCookie("todos");
    todo = [...cookie];
    console.log(todo);
    clearCookie('todos');
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
    
    todo.push(name);
    list.appendChild(Newtodo);
    console.log(todo);
    setCookie();
}

const AddTodo = ()=>{
    let name = prompt("Input Name Todo :")
    createTodo(name);
}

const deleteTodo = (name)=>{
    confirm("Are you sure?");
    todo = todo.filter(n => n !== name);
    console.log("Delete successfully : ",todo);
    document.getElementById(name).remove();
    setCookie();
}


const setCookie = () =>{
    const d = new Date();
    d.setTime(d.getTime()+ (24*60*60*1000));
    let arraytodo = JSON.stringify(todo);
    document.cookie = `todos=${arraytodo}; expires = ${d.toUTCString()}; path=/`;

}

const getCookie = (name)=>{
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';').map(c => c.trim());
    for (let cookie of cookies) {

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

const clearCookie = (name) => {
    if (!name) {
        console.warn("clearCookie: name is missing/null, aborting");
        return;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
