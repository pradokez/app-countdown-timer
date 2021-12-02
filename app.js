document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".start-button");
    btn.click();
  }
});

function submit() {
  const eventName = document.querySelector(".event-name");
  const eventDate = document.querySelector(".event-date")
  console.log(eventName.value);
  console.log(eventDate.value);
}
