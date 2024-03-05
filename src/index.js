function copy() {
    navigator.clipboard.writeText("contact@meowcating.online");
    let alert = document.getElementById("contact");

    alert.textContent="Email copied to clipboard!";
  }