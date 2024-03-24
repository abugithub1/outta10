const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const app = document.getElementById('app');
const monthYearDisplay = document.getElementById('monthYear');

document.getElementById('prevMonth').addEventListener('click', () => {
  changeMonth(-1);
});

document.getElementById('nextMonth').addEventListener('click', () => {
  changeMonth(1);
});

function populateCalendar(month, year) {
  app.innerHTML = ''; // Clear existing days
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    app.appendChild(dayElement);

    dayElement.addEventListener('click', () => {
      const rating = prompt(`How much outta 10 homie (1-10):`);
      dayElement.textContent = `${day}: ${rating}/10`;
      dayElement.style.backgroundColor = "#f0f0f0"; // Change color to indicate rating is set
    });
  }
  monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
}

function changeMonth(change) {
  currentMonth += change;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  } else if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  populateCalendar(currentMonth, currentYear);
}

populateCalendar(currentMonth, currentYear);
