// Part1: Nav Bar
function handleNavTogglerClick() {
  const navBarList = document.querySelector(".nav-bar-list");
  navBarList.classList.toggle("show");

  const togglerLines = document.querySelectorAll(".toggler-line");
  togglerLines[0].classList.toggle("toggler-cross-1");
  togglerLines[1].classList.toggle("toggler-cross-2");
  togglerLines[2].classList.toggle("toggler-cross-3");
}

function handleNavItemClick() {
  const navBarList = document.querySelector(".nav-bar-list");
  navBarList.classList.remove("show");

  const togglerLines = document.querySelectorAll(".toggler-line");
  togglerLines[0].classList.remove("toggler-cross-1");
  togglerLines[1].classList.remove("toggler-cross-2");
  togglerLines[2].classList.remove("toggler-cross-3");
}
