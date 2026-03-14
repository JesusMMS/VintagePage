// =============================================
//  THE VINTAGE HOUSE — JavaScript
// =============================================

// Resalta en la nav la marca que estás viendo al hacer scroll
const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = ['buch', 'reborn', 'vintalogy'];

window.addEventListener('scroll', () => {
  sectionIds.forEach((id, index) => {
    const section = document.getElementById(id);
    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= 80 && rect.bottom > 80) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
});
