(function () {
  const wallContainer = document.querySelector(".wall_container");
  const scrollDownIcon = document.querySelector(".scrolldownicon");
  const frontDoor = document.querySelector(".doorface.front.door");
  const MaxScrollRange = document.body.offsetHeight - window.innerHeight;

  const scrollHandler = function () {
    const scrollAt = (window.pageYOffset / MaxScrollRange) * 1000 - 460;
    wallContainer.style.transform = "translateZ(" + scrollAt + "vw)";

    if (scrollAt > -350) {
      scrollDownIcon.style.display = "none";
    } else {
      scrollDownIcon.style.display = "block";
    }
  };
  const frontDoorClickHandler = function () {
    frontDoor.classList.toggle("dooropen");
    const scrollAt = (window.pageYOffset / MaxScrollRange) * 1000 - 420;
    wallContainer.style.transform = "translateZ(" + scrollAt + "vw)";
  };
  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("DOMContentLoaded", function () {
    scrollDownIcon.style.display = "block";
  });
  frontDoor.addEventListener("click", frontDoorClickHandler);
})();
