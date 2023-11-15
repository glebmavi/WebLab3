function clock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toLocaleDateString(); // Получаем текущую дату

    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + '<br>' + date;
}

// Update the clock immediately
clock();

// Update the clock every 12 seconds
setInterval(clock, 12000);