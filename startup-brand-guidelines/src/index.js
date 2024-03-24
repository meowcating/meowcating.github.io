function displayModal() {
  document.getElementById("myModal").style.display = "block";
  setTimeout(function() {
    document.getElementById("myModal").classList.add("fade-in");
  }, 100);
  // Remove scroll event listener after modal is displayed
  window.removeEventListener('scroll', scrollFunction);
}

// Function to close modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Scroll event listener
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    displayModal();
  }
}

// Add scroll event listener
window.addEventListener('scroll', scrollFunction);