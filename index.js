// Part1: Nav Bar
function handleNavTogglerClick() {
  const navBarList = document.querySelector(".nav-bar-list");
  navBarList.classList.toggle("nav-bar-list-show");

  const togglerLines = document.querySelectorAll(".toggler-line");
  togglerLines[0].classList.toggle("toggler-cross-1");
  togglerLines[1].classList.toggle("toggler-cross-2");
  togglerLines[2].classList.toggle("toggler-cross-3");
}

function handleNavItemClick() {
  const navBarList = document.querySelector(".nav-bar-list");
  navBarList.classList.remove("nav-bar-list-show");

  const togglerLines = document.querySelectorAll(".toggler-line");
  togglerLines[0].classList.remove("toggler-cross-1");
  togglerLines[1].classList.remove("toggler-cross-2");
  togglerLines[2].classList.remove("toggler-cross-3");
}

// Part3: About
tech_proficiency_map = {
  javascript: "95%",
  python: "90%",
  java: "75%",
  cpp: "65%",
  go: "50%",
  html: "90%",
  css: "90%",
  react: "90%",
  rn: "70%",
  typescript: "75%",
  redux: "60%",
  vue: "60%",
  nodejs: "80%",
  express: "70%",
  mysql: "85%",
  dynamodb: "70%",
  mongodb: "60%",
  git: "85%",
  pytorch: "90%",
  cuda: "75%",
  opencv: "70%",
};

const techListItems = document.querySelectorAll(".about-tech-cat-list-item");

techListItems.forEach((techItem) =>
  techItem.addEventListener("mouseenter", () => {
    document
      .querySelector(".about-item-tech-group-list")
      .style.setProperty(
        "--tech-proficency-bar-width",
        tech_proficiency_map[techItem.id]
      );
    techItem
      .querySelector(".tech-item-detail")
      .classList.add("tech-item-detail-show");
    techItem.querySelector(".proficiency-bar").classList.add("progressing");
  })
);

techListItems.forEach((techItem) =>
  techItem.addEventListener("click", () => {
    document
      .querySelector(".about-item-tech-group-list")
      .style.setProperty(
        "--tech-proficency-bar-width",
        tech_proficiency_map[techItem.id]
      );
    techItem
      .querySelector(".tech-item-detail")
      .classList.add("tech-item-detail-show");
    techItem.querySelector(".proficiency-bar").classList.add("progressing");
  })
);

techListItems.forEach((techItem) =>
  techItem.addEventListener("mouseleave", () => {
    document
      .querySelector(".about-item-tech-group-list")
      .style.setProperty("--tech-proficency-bar-width", "0%");
    techItem
      .querySelector(".tech-item-detail")
      .classList.remove("tech-item-detail-show");
    techItem.querySelector(".proficiency-bar").classList.remove("progressing");
  })
);

document.addEventListener("click", (e) => {
  const flag = Array.from(techListItems).some((techItem) =>
    techItem.contains(e.target)
  );
  if (!flag) {
    document
      .querySelector(".about-item-tech-group-list")
      .style.setProperty("--tech-proficency-bar-width", "0%");
    techListItems.forEach((techItem) => {
      techItem
        .querySelector(".tech-item-detail")
        .classList.remove("tech-item-detail-show");
      techItem
        .querySelector(".proficiency-bar")
        .classList.remove("progressing");
    });
  }
});
