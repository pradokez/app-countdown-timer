
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".start-button");
    btn.click();
  }
});

function getDaysRemain(eventDay, today){
  return (eventDay - today) / 1000 / 60 / 60 / 24;
}


function submit() {
  const input = document.querySelector('.entry');
  const start = document.querySelector('.start-button');
  const title = document.querySelector('#title');

  const eventName = document.querySelector(".event-name");
  const eventDate = document.querySelector(".event-date");
  const today = new Date();
  const eventDay = new Date(eventDate.value);
  const daysRemain = getDaysRemain(eventDay, today);
  const hoursRemain = (daysRemain - Math.floor(daysRemain)) * 24 + 3;

  const minutesRemain = (hoursRemain - Math.floor(hoursRemain)) * 60;

  const secondsRemain = (minutesRemain - Math.floor(minutesRemain)) * 60;

  function showTimeRemain(){
    document.getElementById("days").innerHTML = Math.floor(daysRemain);
    document.getElementById("hours").innerHTML = Math.floor(hoursRemain);
    document.getElementById("minutes").innerHTML = Math.floor(minutesRemain);
    document.getElementById("seconds").innerHTML = Math.floor(secondsRemain);
    document.getElementById("title").innerHTML = eventName.value;
  }


  function hideElements(){
    input.classList.add("js-is-hidden");
    start.classList.add("js-is-hidden");
    title.classList.add("title");
  }

  if (eventName.value === "") {
    alert("Epa, parece que você esqueceu de me dizer o nome do evento!");
  } else if (eventDate.value === "" || daysRemain < 0) {
    alert(
      "Olha, pra esse contador funcionar, você precisa inserir uma data válida."
    );
  } else {
   
    showTimeRemain();
    hideElements();
  
    }
    setInterval('submit()', 1000);
    
    
  }
 
  module.exports.getDaysRemain = getDaysRemain;

