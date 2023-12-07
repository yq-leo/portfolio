// Part1: Nav Bar
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".nav-bar-toggler");
  const togglerLines = document.querySelectorAll(".nav-bar-toggler-line");
  const navBarList = document.querySelector(".nav-bar-list");

  function handleTogglerClick() {
    navBarList.classList.toggle("nav-bar-list-show");
    togglerLines[0].classList.toggle("nav-bar-toggler-cross-1");
    togglerLines[1].classList.toggle("nav-bar-toggler-cross-2");
    togglerLines[2].classList.toggle("nav-bar-toggler-cross-3");
  }

  function handleNavItemClick(e) {
    if (e.target.nodeName === "A") {
      navBarList.classList.remove("nav-bar-list-show");
      togglerLines[0].classList.remove("nav-bar-toggler-cross-1");
      togglerLines[1].classList.remove("nav-bar-toggler-cross-2");
      togglerLines[2].classList.remove("nav-bar-toggler-cross-3");
    }
  }

  toggler.addEventListener("click", handleTogglerClick);
  navBarList.addEventListener("click", handleNavItemClick);
});

// Part3: About
const tech_proficiency_map = {
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

document.addEventListener("DOMContentLoaded", () => {
  const techList = document.querySelector(".about-item-tech-group-list");
  const techListItems = document.querySelectorAll(".about-tech-cat-list-item");

  function showTechDetail(techItem) {
    techList.style.setProperty(
      "--tech-proficency-bar-width",
      tech_proficiency_map[techItem.id]
    );
    techItem
      .querySelector(".tech-item-detail")
      .classList.add("tech-item-detail-show");
    techItem.querySelector(".proficiency-bar").classList.add("progressing");
  }

  function hideTechDetail(techItem) {
    techList.style.setProperty("--tech-proficency-bar-width", "0%");
    techItem
      .querySelector(".tech-item-detail")
      .classList.remove("tech-item-detail-show");
    techItem.querySelector(".proficiency-bar").classList.remove("progressing");
  }

  techListItems.forEach((techItem) => {
    techItem.addEventListener("mouseenter", () => showTechDetail(techItem));
    techItem.addEventListener("mouseleave", () => hideTechDetail(techItem));
  });

  // compatable with mobile version
  techList.addEventListener("click", (e) => {
    if (e.target.classList.contains("about-tech-cat-list-item")) {
      showTechDetail(e.target);
    }
  });

  document.addEventListener("click", (e) => {
    const flag = Array.from(techListItems).some((techItem) =>
      techItem.contains(e.target)
    );
    if (!flag) {
      techListItems.forEach((techItem) => {
        hideTechDetail(techItem);
      });
    }
  });
});

// Part5: Projects
document.addEventListener("DOMContentLoaded", () => {
  const toggleProjectsBtn = document.querySelector(".projects-collapsible-btn");
  const toggleProjectsBtnText = ["Show More", "Hide"];
  let toggleProjectsBtnIndex = 0;

  toggleProjectsBtn.addEventListener("click", () => {
    const projectItems = Array.from(
      document.querySelectorAll(".projects-item")
    );
    for (let i = 3; i < projectItems.length; i++) {
      projectItems[i].classList.toggle("projects-item-hide");
    }
    toggleProjectsBtnIndex = 1 - toggleProjectsBtnIndex;
    toggleProjectsBtn.innerText = toggleProjectsBtnText[toggleProjectsBtnIndex];
  });
});

// Part7: Contact
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSch8gVBawLm_EHn1Za5EKUY1aaPpqjjvXbEUqufuDBplarD9g/formResponse?usp=pp_url&entry.1023284505=${name}&entry.1480291378=${email}&entry.364352625=${message}`;
    fetch(url, { mode: "no-cors" })
      .then((res) => {
        console.log(res);
        contactForm.reset();
        alert(
          "Your message has been received! Thank you. I will get back to you soon."
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, something went wrong! Please try again.");
      })
      .finally(() => {
        contactForm.reset();
      });
  });

  window.addEventListener("beforeunload", (e) => {
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    if (name || email || message) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
});
