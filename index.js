const hobbyForm = document.getElementById("hobbyForm");
const messageDiv = document.getElementById("message");

hobbyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedHobbies = Array.from(hobbyForm.elements["hobby"])
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedHobbies.length > 0) {
    const messageText = "Selected Hobbies: " + selectedHobbies.join(", ");
    messageDiv.textContent = messageText;
  } else {
    messageDiv.textContent = "No hobbies selected.";
  }
});
