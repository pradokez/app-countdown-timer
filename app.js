document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".start-button");
    btn.click();
  }
});

function submit() {
  const eventName = document.querySelector(".event-name");
  const eventDate = document.querySelector(".event-date");
  const today = new Date();
  const eventDay = new Date(eventDate.value);

  if (eventName.value === "") {
    alert("Epa, parece que você esqueceu de me dizer o nome do evento!");
  } else if (eventDate.value === "") {
    alert(
      "Olha, pra esse contador funcionar, você precisa inserir uma data válida."
    );
  } else {
    const daysRemain = (eventDay - today) / 1000 / 60 / 60 / 24;
    const hoursRemain = (daysRemain - Math.floor(daysRemain)) * 24 + 3;

    const minutesRemain = (hoursRemain - Math.floor(hoursRemain)) * 60;

    const secondsRemain = (minutesRemain - Math.floor(minutesRemain)) * 60;

    
    document.getElementById("days").innerHTML = Math.floor(daysRemain);
    document.getElementById("hours").innerHTML = Math.floor(hoursRemain);
    document.getElementById("minutes").innerHTML = Math.floor(minutesRemain);
    document.getElementById("seconds").innerHTML = Math.floor(secondsRemain);
  }

  setInterval('submit()', 1000);
}
