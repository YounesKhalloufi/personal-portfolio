console.log("javascript is working");
document.getElementById("contactBtn").addEventListener("click", function () {
    alert("Thanks for contacting me!");
});
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});
