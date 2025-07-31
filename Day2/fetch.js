fetch('https://dummyjson.com/users')
.then((res)=>res.json())
.then((data)=>{
    console.log(data.users);
    let con = document.getElementById('con');
    data.users.forEach(user => {
        let div = document.createElement('div');
        div.innerHTML =`
        <div class="card">
        <h1>${user.firstName}  ${user.lastName}</h1>
                         <p>Email: ${user.email}</p>
                         <p>Phone: ${user.phone}</p>
        </div>`
        con.append(div);
    });
})
// fetch.js
