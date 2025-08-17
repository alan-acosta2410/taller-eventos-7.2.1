function saludar() {
    alert("Hola!") }



document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("div1");

  div.addEventListener("click", () => {
    alert("Hola! Soy el div");
  });
});