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


/************* Article display management ******************/
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab-btn')
	const projects = document.querySelectorAll('.article-category')
	const select = document.getElementById('Tab') // Sélecteur du menu déroulant

	if (!tabs.length || !projects.length || !select) return

	// Fonction pour afficher les projects en fonction de la catégorie
	function renderprojects(category) {
		projects.forEach((article) => {
			if (category === 'all' || article.dataset.category === category) {
				article.classList.remove('hidden')
			} else {
				article.classList.add('hidden')
			}
		})
	}

	// Par défaut, afficher tous les projects
	renderprojects('all')

	// Gestion des clics sur les onglets
	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			// Retirer la classe active de tous les onglets
			tabs.forEach((t) =>
				t.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600')
			)

			// Ajouter la classe active à l'onglet cliqué
			tab.classList.remove('text-zinc-500', 'border-transparent')
			tab.classList.add('text-blue-600', 'border-b-2', 'border-blue-600')

			// Récupérer la catégorie de l'onglet cliqué
			const category = tab.getAttribute('data-category') || 'all'

			// Synchroniser la valeur du sélecteur avec la catégorie
			select.value = category

			// Afficher les projects correspondants
			renderprojects(category)
		})
	})

	// Gestion du changement de sélection dans le `select`
	select.addEventListener('change', (event) => {
		const category = event.target.value

		// Mettre à jour la classe active des onglets
		tabs.forEach((tab) => {
			tab.classList.toggle(
				'text-blue-600',
				tab.getAttribute('data-category') === category
			)
			tab.classList.toggle(
				'border-b-2',
				tab.getAttribute('data-category') === category
			)
			tab.classList.toggle(
				'border-blue-600',
				tab.getAttribute('data-category') === category
			)
		})

		// Afficher les projects correspondants
		renderprojects(category)
	})
})
// ============================ End projects display management ============================