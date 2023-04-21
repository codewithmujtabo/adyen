const panelsEl = document.querySelectorAll(".panel");
const arrowEl = document.querySelectorAll(".arrow");

if (document.documentElement.clientWidth > 1295) {
  let currentIndex = -1;

  for (let i = 0; i < arrowEl.length; i++) {
    arrowEl[i].addEventListener("click", () => {
      if (currentIndex !== i) {
        if (currentIndex !== -1) {
          panelsEl[currentIndex].toggleAttribute("hidden");
          arrowEl[currentIndex].classList.toggle("rotate");
        }
        panelsEl[i].toggleAttribute("hidden");
        arrowEl[i].classList.toggle("rotate");
        currentIndex = i;
      } else {
        panelsEl[i].toggleAttribute("hidden");
        arrowEl[i].classList.toggle("rotate");
        currentIndex = -1;
      }
    });
  }
}

window.onload = function () {
  section5PanelEl[0].toggleAttribute("hidden");
};
const hrEl = document.getElementById("section-5-hr");
const section5PanelEl = document.querySelectorAll(".section-5-panel");
const section5BtnEl = document.querySelectorAll(".section-5-btn");

for (let i = 0; i < section5BtnEl.length; i++) {
  section5BtnEl[i].addEventListener("click", () => {
    for (let i = 0; i < section5PanelEl.length; i++) {
      section5PanelEl[i].setAttribute("hidden", false);
    }

    section5PanelEl[i].toggleAttribute("hidden");

    hrEl.className = "";
    hrEl.classList.add(`section-5-hr-${i}`);
  });
}

const dropDownEl = document.querySelector(".ds-dropdown__list");
const langEl = document.querySelector(".footer-bottom-right");
const dropDownIconEl = document.querySelector(".icon");

langEl.addEventListener("click", () => {
  dropDownEl.style.display = "";
  dropDownIconEl.classList.toggle("rotate");
});

const barsIconEl = document.querySelector(".fa-bars");
const closeBarsEl = document.querySelector(".fa-xmark");
const barsEl = document.querySelector(".nav-elements ul");
const panelEl = document.querySelectorAll(".panel-elements");
const hidePanelEl = document.querySelector(".panel-elements h1");

barsIconEl.addEventListener("click", () => {
  barsEl.style.right = "0";
  closeBarsEl.style.display = "block";
});

closeBarsEl.addEventListener("click", () => {
  barsEl.style.right = "-440px";
  panelsEl.forEach((panel) => {
    if (!panel.hasAttribute("hidden")) {
      panel.toggleAttribute("hidden");
    }
  });
  arrowEl.forEach((arrow) => {
    if (arrow.classList.contains("rotate")) {
      arrow.classList.toggle("rotate");
    }
  });
});

