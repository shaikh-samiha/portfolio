const toggleBtn = document.getElementById('toggle-dark-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
