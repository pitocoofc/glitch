document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value.toLowerCase().trim();
        
        if (query) {
            // Se digitar "gta", vai para gta.html no mesmo repositório
            window.location.href = `./${query}.html`;
        }
    }
});

// Efeito bônus: Log de boas vindas no console
console.log("%c GLITCH SYSTEM ONLINE ", "background: #ff0055; color: white; font-weight: bold;");
