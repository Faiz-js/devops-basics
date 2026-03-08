const btn = document.getElementById("btn");
const dblBtn = document.getElementById("dbl-btn");

btn.addEventListener("click", () => {
  alert("button was clicked");
});

dblBtn.addEventListener("dblclick", () => {
  alert("button was double clicked");
});
