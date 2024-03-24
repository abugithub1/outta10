const app = document.getElementById('app');

for (let day = 1; day <= 30; day++) { // Simplified to a 30-day month
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = day;
  app.appendChild(dayElement);

  dayElement.addEventListener('click', () => {
    const rating = prompt(`Rate this day (1-10):`);
    dayElement.textContent = `${day}: ${rating}/10`;
    dayElement.style.backgroundColor = "#f0f0f0"; // Change color to indicate rating is set
  });
}
