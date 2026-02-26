const openRegisterBtn = document.getElementById('openRegister');
const closeRegisterBtn = document.getElementById('closeRegister');
const registerModal = document.getElementById('registerModal');
const donateForm = document.querySelector('.donate-form');
const donateCancelBtn = document.querySelector('.donate-cancel');

const openHelpBtn = document.getElementById('openHelp');
const helpModal = document.getElementById('helpModal');
const closeHelpBtn = document.getElementById('closeHelp');
const helpForm = document.querySelector('.help-form');

const openVolunteerBtn = document.getElementById('openVolunteer');
const volunteerModal = document.getElementById('volunteerModal');
const closeVolunteerBtn = document.getElementById('closeVolunteer');
const volunteerForm = document.querySelector('.volunteer-form');
const volunteerCancelBtn = document.querySelector('.volunteer-cancel');

// Открытие окна "Я хочу помочь"
openRegisterBtn.addEventListener('click', function() {
    registerModal.style.display = 'flex';
});

// Закрытие окна "Я хочу помочь"
closeRegisterBtn.addEventListener('click', function() {
    registerModal.style.display = 'none';
});

// Открытие окна "Мне нужна помощь"
openHelpBtn.addEventListener('click', function() {
    helpModal.style.display = 'flex';
});

// Закрытие окна "Мне нужна помощь"
closeHelpBtn.addEventListener('click', function() {
    helpModal.style.display = 'none';
});

// Открытие окна "Анкета волонтера"
openVolunteerBtn.addEventListener('click', function() {
    volunteerModal.style.display = 'flex';
});

// Закрытие окна "Анкета волонтера"
closeVolunteerBtn.addEventListener('click', function() {
    volunteerModal.style.display = 'none';
});

// Закрытие по клику вне форм
window.addEventListener('click', function(event) {
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target === helpModal) {
        helpModal.style.display = 'none';
    }
    if (event.target === volunteerModal) {
        volunteerModal.style.display = 'none';
    }
});

// Кнопка "Отмена" в форме "Я хочу помочь"
donateCancelBtn.addEventListener('click', function () {
    registerModal.style.display = 'none';
});

// Отправка формы "Я хочу помочь" (простая заглушка)
donateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за вашу помощь!');
    donateForm.reset();
    registerModal.style.display = 'none';
});

// Отправка формы "Мне нужна помощь"
helpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Заявка на помощь отправлена!');
    helpForm.reset();
    helpModal.style.display = 'none';
});

// Кнопка "Отмена" в форме "Анкета волонтера"
volunteerCancelBtn.addEventListener('click', function () {
    volunteerModal.style.display = 'none';
});

// Отправка формы "Анкета волонтера"
volunteerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Анкета волонтера отправлена!');
    volunteerForm.reset();
    volunteerModal.style.display = 'none';
});
