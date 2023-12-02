const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Получаем значения электронной почты и пароля из формы
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
        credentials: 'omit',
        withCredentials: true,
    };

    // Отправляем запрос на сервер
    fetch('https://project-49di.onrender.com/auth/login', options)
        .then((response) => {
            // Обрабатываем ответ от сервера
            if (!response.ok) {
                throw new Error(
                    `Network response was not ok: ${response.status}`
                );
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            // Обработка ошибок
            console.error(
                'There has been a problem with your fetch operation:',
                error
            );
        });
});
