




// Background effect
document.addEventListener('DOMContentLoaded', function() {

    const symbols = [
        '</', '/>', '{}', '[]', '=>', '==',
        '&&', '||', '++', '--', '!=', '()',
        '#', '@', '*', '!', '?', '::', '%%'
    ];

    const container = document.getElementById('symbols');

    function createSymbol() {
        const span = document.createElement('span');
        span.classList.add('symbol');
        span.innerText = symbols[Math.floor(Math.random() * symbols.length)];

        span.style.left = Math.random() * 100 + 'vw';
        span.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        span.style.animationDuration = (Math.random() * 10 + 6) + 's';
        span.style.animationDelay = (Math.random() * 5) + 's';
        span.style.color = `rgba(100, 180, 255, ${Math.random() * 0.15 + 0.05})`;

        container.appendChild(span);
        setTimeout(() => span.remove(), 16000);
    }

    setInterval(createSymbol, 300);

});