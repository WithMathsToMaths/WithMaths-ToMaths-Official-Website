const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentSelection = new Date();

// CHANGER CECI PAR TON EMAIL
const MON_EMAIL = "withmathstomaths@gmail.com";

const mSelect = document.getElementById('monthSelector');
const ySelect = document.getElementById('yearSelector');

function initSelectors() {
    monthNames.forEach((m, i) => mSelect.options.add(new Option(m, i)));
    const currentYear = new Date().getFullYear();
    for(let i = currentYear; i <= currentYear + 5; i++) {
        ySelect.options.add(new Option(i, i));
    }
    mSelect.value = currentSelection.getMonth();
    ySelect.value = currentSelection.getFullYear();
}

function buildCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    const y = parseInt(ySelect.value), m = parseInt(mSelect.value);
    
    ["M","T","W","T","F","S","S"].forEach(d => grid.innerHTML += `<div class="cal-day-name">${d}</div>`);
    
    const firstDay = new Date(y, m, 1).getDay();
    const totalDays = new Date(y, m+1, 0).getDate();
    const startGap = firstDay === 0 ? 6 : firstDay - 1;

    for(let i=0; i<startGap; i++) grid.innerHTML += `<div></div>`;
    
    for(let i=1; i<=totalDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'cal-date';
        dayDiv.innerText = i;
        dayDiv.onclick = () => {
            document.querySelectorAll('.cal-date').forEach(el => el.classList.remove('active'));
            dayDiv.classList.add('active');
            currentSelection = new Date(y, m, i);
        };
        grid.appendChild(dayDiv);
    }
}

// LOGIQUE D'ENVOI BOOKING
function submitBooking() {
    const name = document.getElementById('nameInput').value;
    const details = document.getElementById('detailsInput').value;
    const hour = document.getElementById('hVal').value;
    const min = document.getElementById('mVal').value;
    
    if(!name) { alert("Please enter your name."); return; }

    const sujet = encodeURIComponent("Booking Request from " + name);
    const corps = encodeURIComponent(
        "Name: " + name + "\n" +
        "Details: " + details + "\n" +
        "Requested Date: " + currentSelection.toDateString() + "\n" +
        "Time: " + hour + ":" + min
    );

    window.location.href = `mailto:${MON_EMAIL}?subject=${sujet}&body=${corps}`;
}

// LOGIQUE D'ENVOI CONTACT
function submitContact() {
    const email = document.getElementById('contactEmail').value;
    const sujetInput = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMsg').value;
    
    if(!email || !message) { alert("Please fill in email and message."); return; }

    const sujet = encodeURIComponent("Inquiry: " + sujetInput);
    const corps = encodeURIComponent("From: " + email + "\n\nMessage:\n" + message);

    window.location.href = `mailto:${MON_EMAIL}?subject=${sujet}&body=${corps}`;
}

mSelect.onchange = ySelect.onchange = buildCalendar;
initSelectors();
buildCalendar();
