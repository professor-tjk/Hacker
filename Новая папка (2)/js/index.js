function toggleMenu() {
  const sidebar = document.getElementById('sidebarMenu');
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 300);
  } else {
    sidebar.style.display = 'flex';
    setTimeout(() => {
      sidebar.classList.add('show');
    }, 10);
  }
}