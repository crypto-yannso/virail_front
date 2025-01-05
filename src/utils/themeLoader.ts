// Fonction pour gérer le chargement initial du thème
export function initThemeLoader() {
  // Script à exécuter immédiatement
  const themeScript = `
    (function() {
      // Récupérer le thème stocké ou utiliser la préférence système
      const darkMode = localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // Appliquer la classe dark si nécessaire
      document.documentElement.classList.toggle('dark', darkMode);
      
      // Masquer le contenu pendant un court instant pour éviter le flash
      requestAnimationFrame(() => {
        document.documentElement.classList.add('theme-loaded');
      });
    })();
  `;

  // Créer une balise script avec notre code
  const script = document.createElement('script');
  script.textContent = themeScript;
  
  // Insérer le script au début du head pour qu'il s'exécute le plus tôt possible
  document.head.insertBefore(script, document.head.firstChild);
} 