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

// updates every second
setInterval(updateDate, 1000);


// Waterfall of hearts 
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "🫶🏻";
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 450); // a cada 200ms cai um coração







/*
Pausa pra descansar um pouco kakakaka   

S2 S2 

NANDA, EU TE ADOROOOOOOOOOOOOOOOOOO! S2 S2

VOLTEI 

TEM QUE ESPERAR O SITE UPAR NO SERVIDOR (PRA GERAR O LINK)

HORA DE CORRIGIR ALGUNS BUGS

ESPERAR UPAR ;)

TESTEI NO CELULAR E TA FUNCIONANDO ;) S2

TE ADORO NANDA! S2
*/