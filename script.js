const clickButtion = document.querySelector('#btn-requst').addEventListener('click', ()=>{

    const userName = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    localStorage.setItem('dataUser', JSON.stringify({Username: userName, Password: password}))

    let p = document.createElement('p');
    p.className = "alert";
    p.innerHTML = 'Username: ' + userName + ', ' + 'Password: ' + password;
    document.querySelector('.form').append(p);

})

