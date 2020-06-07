let singin = document.getElementById('sing');
let login = document.getElementById('login');
let registrationForm = document.querySelector('.singin_box');
let loginForm = document.querySelector('.login_box');

let closeBtn = document.querySelectorAll('.closeForm');


singin.addEventListener('click', function(event){
    registrationForm.style.display = 'block';
    event.preventDefault();
})

login.addEventListener('click', function(event){
    loginForm.style.display = 'block';
    event.preventDefault();
} );

for(let key of closeBtn){
    key.addEventListener('click', function(){
        key.parentElement.style.display = 'none';
    })
}

let user = {};

saveBase();
function saveBase(){
    if(localStorage.getItem('user') != null){
        user = JSON.parse(localStorage.getItem('user'));
    }
}


function saveToLS(){
    let username = document.getElementById('reg-name');
    let password = document.getElementById('reg-password');

    if(user[username.value] != undefined){
        alert('Такое имя занято')
    }
    else{user[username.value] = password.value;
    }

    localStorage.setItem('user', JSON.stringify(user));

    saveBase();

};


function checkUser(){
    let username = document.getElementById('login-name');
    let password = document.getElementById('login-password');
    let name = username.value;
    if (name in user){
        if(user[name] == password.value)
        alert('Добро пожаловать в магазин');
        else{
            alert('Имя пользователя или пароль неверный')
        }
    }else{
        alert('Проверьте имя пользователя')
    }
}

