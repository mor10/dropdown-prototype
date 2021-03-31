const subMenus = document.querySelectorAll(".main-nav ul ul");
subMenus.forEach((subMenu) => {
  subMenu.classList.add("hide");
});

const menuTrigger = document.querySelectorAll(".menu-trigger");

const toggleMenu = (parent, status) => {
  const trigger = parent.querySelector("button");
  const subMenu = parent.querySelector("ul");
  if (status == "false") {
    parent.classList.add("open");
    subMenu.classList.remove("hide");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close news menu.");
  } else {
    parent.classList.remove("open");
    subMenu.classList.add("hide");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
  }
};

menuTrigger.forEach((trigger) => {
  trigger.classList.add("sub");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-label", "Open news menu.");
  trigger.addEventListener("click", function () {
    const parent = trigger.parentElement;
    const status = trigger.getAttribute("aria-expanded");
    toggleMenu(parent, status);
  });
});

document.addEventListener("focusin", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});

document.addEventListener("click", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});
