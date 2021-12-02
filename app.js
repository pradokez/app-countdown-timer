document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".start-button");
    btn.click();
  }
});

function submit() {
  const eventName = document.querySelector(".event-name");
  const eventDate = document.querySelector(".event-date");

  if (eventName.value === "") {
    alert("Epa, parece que você esqueceu de me dizer o nome do evento!");
  } else if (eventDate.value === "") {
    alert(
      "Olha, pra esse contador funcionar, você precisa inserir uma data válida."
    );
  } else {
    console.log(eventName.value);
    console.log(eventDate.value);
  }
}
