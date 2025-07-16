  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button icon
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon: ☰ to ×
    if (navLinks.classList.contains('active')) {
      hamburgerBtn.innerHTML = '&times;'; // ×
    } else {
      hamburgerBtn.innerHTML = '&#9776;'; // ☰
    }
  });