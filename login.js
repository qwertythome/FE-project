
const loginForm = document.getElementById('loginForm');
function creatTime(){
    const now = new Date();
    const date= now.getDate()+1+'.'+now.getHours()
    return date
}
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверяем, что поля электронной почты и пароля заполнены
    if (!email || !password) {
        throw new Error('Введите адрес электронной почты и пароль');
    }

    // Проверяем, что адрес электронной почты имеет правильный формат
    if (!/^\w+@\w+\.\w+$/.test(email)) {
        throw new Error(
            'Адрес электронной почты должен иметь следующий формат: username@domain.com'
        );
    }

    // Создаем объект данных для отправки
    const data = {
        email: email,
        password: password,
    };

    // Опции запроса
    const options = {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data),
        credentials: 'include',
   
    }
    // Отправляем запрос на сервер
    fetch('http://localhost:3000/auth/login' ,options).then(response => response.json())
    .then(data => {
      localStorage.setItem('token',data.token)
      
     localStorage.setItem('time',creatTime() )()
     if( localStorage.getItem('token')>=0){

     }
    })
  
});
