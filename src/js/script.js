function updateDate() {
    const today_date = new Date();
    const start_date = new Date(2025, 2, 19); // 19 de março de 2025

    const diffMs = Math.abs(start_date.getTime() - today_date.getTime());
    const totalSegundos = Math.floor(diffMs / 1000);

    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = totalSegundos % 60;

    const pad = (n) => String(n).padStart(2, '0');

    document.querySelector('.timer_days').textContent = pad(dias);
    document.querySelector('.timer_hours').textContent = pad(horas);
    document.querySelector('.timer_minutes').textContent = pad(minutos);
    document.querySelector('.timer_seconds').textContent = pad(segundos);
}

// Atualiza a cada segundo
setInterval(updateDate, 1000);










/*

Pausa pra descansar um pouco kakakaka   

S2 S2 

NANDA, EU TE ADOROOOOOOOOOOOOOOOOOO! S2 S2

VOLTEI 
*/