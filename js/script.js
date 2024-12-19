document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const loginButton = document.getElementById('login-button');
  const closeModalBtn = document.querySelector('.close');
  const preloader = document.getElementById('preloader');

  // Убрать загрузчик
  window.addEventListener('load', function() {
    preloader.style.display = 'none';
  });

  // Открыть модальное окно
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращает переход по ссылке
    modal.classList.remove('hidden');
    modal.style.display = 'flex'; // Показать модальное окно
  });

  // Закрыть при нажатии на крестик
  closeModalBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  });

  // Закрыть при нажатии вне модального окна
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  });
});





