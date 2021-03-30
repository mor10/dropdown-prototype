const subMenus = document.querySelectorAll(".main-nav ul ul");
subMenus.forEach((subMenu) => {
  subMenu.classList.add("sub-menu");
  subMenu.setAttribute("aria-expanded", "false");
});

const menuTrigger = document.querySelectorAll(".menu-trigger");

menuTrigger.forEach((trigger) => {
  trigger.classList.add("sub");
  trigger.addEventListener("click", function () {
    const subMenu = trigger.parentElement.querySelector("ul");
    const status = subMenu.getAttribute("aria-expanded");
    if (status == "false") {
      subMenu.classList.add("reveal");
      subMenu.setAttribute("aria-expanded", "true");
    } else {
      subMenu.classList.remove("reveal");
      subMenu.setAttribute("aria-expanded", "false");
    }
  });
});
