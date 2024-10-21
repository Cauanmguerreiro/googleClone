const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const url = 'https://www.google.com.br/search?q=' + search.value;
    window.open(url,'_self');
})

search.addEventListener('keypress', function(e) {
    if(e.key == "Enter"){
    const url = 'https://www.google.com.br/search?q=' + search.value;  
    search.click();
    window.open(url,'_self');
    }
})

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Alterar o texto do botão para "Light Mode" quando estiver no modo escuro
    if(body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
});