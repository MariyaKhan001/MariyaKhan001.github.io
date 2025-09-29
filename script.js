// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Update Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Button Email Handler
const emailBtn = document.querySelector(".contact .btn");
emailBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default navigation
  const email = "khanmariyashakeel@gmail.com";
  const subject = encodeURIComponent("Hello Mariya!");
  const body = encodeURIComponent("Hi Mariya,\n\nI would like to connect with you regarding...");
  
  // Opens default email client
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
