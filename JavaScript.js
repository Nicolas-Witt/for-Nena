// O número total de páginas (incluindo capa e contra-capa)
const TOTAL_PAGES = 6; 
let currentPage = 1;

// Função que inicia a música e vira a primeira página
function startExperience() {
    const music = document.getElementById('background-music');
    // Tenta iniciar a música
    music.play().catch(error => {
        console.warn("A música não pôde tocar automaticamente. Navegadores exigem interação do usuário.");
    });
    
    // Vira a primeira página
    nextPage();
}

// Função principal para virar a página
function nextPage() {
    if (currentPage < TOTAL_PAGES) {
        // Pega o elemento da página atual
        const currentElement = document.getElementById('page-' + currentPage);
        
        if (currentElement) {
            // Adiciona a classe 'flipped' (você criará o CSS para isso)
            currentElement.classList.add('flipped');
            currentPage++;
        }
    } else {
        // Opcional: Se for a última página, pode redirecionar ou dar um alerta
        console.log("Fim do livro.");
    }
}
