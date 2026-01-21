document.addEventListener('DOMContentLoaded', function() {
  const downloadPlan = document.querySelector('.download-plan');
  const downloadWindow = downloadPlan.querySelector('.download-plan__window');
  const closeBtn = downloadPlan.querySelector('.download-plan__window-top-svg');
  const isWindowClosed = localStorage.getItem('downloadWindowClosed');
  
  // Устанавливаем начальное состояние в зависимости от устройства
  if (window.innerWidth >= 1024 && isWindowClosed !== 'true') {
      downloadWindow.classList.add('_active');
  }
  
  // Обработчик клика на всю область .download-plan
  downloadPlan.addEventListener('click', function() {
    if (!downloadWindow.classList.contains('_active')) {
      downloadWindow.classList.add('_active');
      localStorage.setItem('downloadWindowClosed', 'false');
    }
  });
  
  // Обработчик клика на крестик
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал клик на родителе
    downloadWindow.classList.remove('_active');
    localStorage.setItem('downloadWindowClosed', 'true');
  });
});