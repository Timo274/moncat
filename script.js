document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-ca');
    const caText = document.getElementById('ca-text');
    const navbar = document.querySelector('.navbar');

    // Copy to clipboard functionality
    copyBtn.addEventListener('click', () => {
        const ca = caText.innerText;
        navigator.clipboard.writeText(ca).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.style.background = '#836ef9';
            copyBtn.style.color = '#ffffff';
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.background = 'rgba(131, 110, 249, 0.2)';
                copyBtn.style.color = '#836ef9';
            }, 2000);
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 6, 20, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(13, 6, 20, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
    // Cat Clicker Interaction
    const heroCatContainer = document.getElementById('hero-cat-container');
    const meowTexts = ['Meow!', 'Purrr...', '+1 MonCat', '🐾', 'LFG!'];
    
    if (heroCatContainer) {
        heroCatContainer.addEventListener('click', (e) => {
            const meowText = document.createElement('div');
            meowText.classList.add('floating-meow');
            
            // Random text
            meowText.innerText = meowTexts[Math.floor(Math.random() * meowTexts.length)];
            
            // Position near click
            const rect = heroCatContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            meowText.style.left = `${x}px`;
            meowText.style.top = `${y}px`;
            
            heroCatContainer.appendChild(meowText);
            
            // Remove after animation completes (1.5s)
            setTimeout(() => {
                meowText.remove();
            }, 1500);
        });
    }
});
