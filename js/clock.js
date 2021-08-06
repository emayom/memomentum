const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];


const year = document.getElementById("year");
const date = document.getElementById("date");
const clock = document.getElementById("clock");
const sec = document.getElementById("sec");

function getClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    clock.innerHTML = `${hours} : ${minutes}`;
    sec.innerHTML = `${seconds}`;
    
}

function getDay() {
    const now = new Date();
    
    const thisDate = now.getDate();
    const thisMonth = MONTHS[now.getMonth()];
    const thisDay = DAYS[now.getDay()];

    date.innerHTML = `${thisMonth} ${thisDate} (${thisDay})` ;
}

getClock();
getDay();

setInterval(getDay, 1000);
setInterval(getClock,1000);
