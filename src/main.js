import './style.css'; 

  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuButton.addEventListener('click', function() {
      // Basculer l'état du menu
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      
      // Basculer la visibilité du menu avec une transition
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('block');
      
      // Basculer les icônes
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
    
    // Fermer le menu lorsqu'un lien est cliqué (optionnel pour SPA)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  });