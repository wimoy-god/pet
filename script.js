const openBtn = document.getElementById('openRegister');
const closeBtn = document.getElementById('closeRegister');
const modal = document.getElementById('registerModal');
const form = document.querySelector('.register-form');


openBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});


closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value.trim();

  
    if (name.length < 3) {
        alert('Имя должно быть не менее 3 символов');
        return;
    }

   
    if (!email.includes('@') || !email.includes('.')) {
        alert('Введите корректный email');
        return;
    }

   
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
        alert('Введите корректный телефон (10–15 цифр)');
        return;
    }

  
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов');
        return;
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Пароль должен содержать хотя бы одну заглавную букву и одну цифру');
        return;
    }

  
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    alert(`Регистрация успешна!\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}`);
    form.reset();
    modal.style.display = 'none';
});

