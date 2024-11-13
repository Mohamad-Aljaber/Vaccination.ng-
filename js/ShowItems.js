const toggleButtons = document.querySelectorAll(".toggleButton");
toggleButtons.forEach(button => {
  button.addEventListener("click", function () {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    if (
      targetElement.style.display === "none" ||
      targetElement.style.display === ""
    ) {
      targetElement.style.display = "block";
    } else {
      targetElement.style.display = "none";
    }
  });
});
