let clickButtion = document.querySelector('#btn-requst').addEventListener('click', ()=>{
    let userName = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

 
    let p = document.createElement('p');
    p.className = "alert";
    p.innerHTML = "hello";

    document.body.append(p);


console.log(p)
    console.log('username: ' + userName + ', ' + 'password: ' + password)
})