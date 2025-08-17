function saludar() {
    alert("Hola!") }



document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("div1");
    const button = div.querySelector("button");

    div.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });

    button.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});