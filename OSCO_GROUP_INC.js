// Показать кнопку "Наверх" при прокрутке вниз
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Прокрутка наверх при нажатии на кнопку
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Открыть модальное окно при клике на изображение
const videoModal = document.getElementById('videoModal');
const videoImg = document.querySelector('.video-img');
const closeBtn = document.querySelector('.close');
const videoIframe = document.getElementById('videoIframe');

videoImg.addEventListener('click', function () {
    videoModal.style.display = 'block';
    videoIframe.src = ''; // Вставьте ссылку на видео
});

// Закрыть модальное окно при нажатии на крестик
closeBtn.addEventListener('click', function () {
    videoModal.style.display = 'none';
    videoIframe.src = ''; // Очищаем src при закрытии
});

// Закрыть модальное окно при клике за пределы модального окна
window.addEventListener('click', function (event) {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
        videoIframe.src = ''; // Очищаем src при закрытии
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const contactUsButton = document.querySelector(".hero_button3");
    const form = document.querySelector("form");
    const nameInput = document.querySelector("input[name='username']");
    const emailInput = document.querySelector("input[type='email']");
    const selectOptions = document.querySelectorAll("select[name='option']");
    const messageInput = document.querySelector("#message");

    contactUsButton.addEventListener("click", function(event) {
        let isValid = true;
        let errorMessage = "";

        // Валидация имени
        if (nameInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Пожалуйста, введите полное имя.\n";
        }

        // Валидация email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            errorMessage += "Пожалуйста, введите правильный адрес электронной почты.\n";
        }

        // Валидация select options (должны быть выбраны варианты, отличные от "Please Select")
        selectOptions.forEach(select => {
            if (select.value === "1") {
                isValid = false;
                errorMessage += "Пожалуйста, выберите вариант в каждом из списков.\n";
            }
        });

        // Валидация текстового сообщения
        if (messageInput.value.trim() === "") {
            isValid = false;
            errorMessage += "Пожалуйста, введите сообщение.\n";
        }

        // Если все поля корректны, отправляем форму
        if (isValid) {
            alert("Форма успешно отправлена!");
            form.submit(); // Отправка формы вручную
        } else {
            alert(errorMessage); // Показ ошибок, если что-то не заполнено корректно
        }
    });
});