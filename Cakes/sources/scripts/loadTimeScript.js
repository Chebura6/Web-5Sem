
function calculateLoadTime() {
    const pageEnd = performance.mark('pageEnd');
    return pageEnd.startTime;
}

function displayLoadStats() {
    const loadStats = document.createElement('p');
    let timeToLoad = calculateLoadTime();
    loadStats.innerHTML = `Загрузка была завершена за ${timeToLoad} мс`;
    document.querySelector('footer').appendChild(loadStats);
}

window.addEventListener('load', () => {
    displayLoadStats();
});

