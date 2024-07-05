// Opcional: Para cerrar el menú desplegable al hacer clic fuera
document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
      if (!event.target.matches('.dropdown')) {
        dropdown.style.display = 'none';
      }
    });
  });
  