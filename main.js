function subscribe() {
  const value = document.getElementById("email").value;
  console.log(value);
}

// Execute a function when the user releases a key on the keyboard
const input = document.getElementById("email");
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();

    subscribe();
  }
});
