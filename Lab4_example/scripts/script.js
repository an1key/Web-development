const timer = document.getElementById("timer");
const users = document.getElementById("users");

let timerValue = 30;
timer.innerText = timerValue;
const interval = setInterval(() => {
    timerValue-- ;
    timer.innerText = timerValue;
    if (timerValue == 0){
        clearInterval(interval)
    }
}, 100);


//todo: сделать сайт брать данные с внешнего апи

const getAllUsers = () => {
    const res = fetch('https://jsonplaceholder.typicode.com/users')
    res.then((response) =>{
        return response.json();
    }).then((data) => {
        data.forEach((user) => {
            users.innerHTML += `
           <a href="?id=${user.id}">${user.name}</a><br>
        `
            console.log(user.address.street);
        });

    })
}
const getUserById = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    users.innerHTML += `
        <div>
            <h1>${data.name}</h1>
            <p>${data.username}</p>
            <a href="mailto:${data.email}">${data.email}</a> | 
            <a href="tel:${data.phone}">${data.phone}</a>
        </div>
        <br>
    `
    console.log(data);
}

const urLParams = new URLSearchParams(window.location.search)
const id = urLParams.get('id')

console.log(id)

if (id == null) {
    getAllUsers();
}
else{
    getUserById(id);
}