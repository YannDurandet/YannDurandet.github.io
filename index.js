function toggleWorkItems(toggleState) {
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (toggleState === "all" || item.classList.contains(toggleState)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle(`${toggleState}Toggle`);
  document.getElementById("showAllButton").style.display = toggleState === "all" ? "none" : "flex";

  const hiddenButtons = ["LogoButton", "webDesignButton", "illustrationButton", "devButton"];
  for (let i = 0; i < hiddenButtons.length; i++) {
    const buttonId = hiddenButtons[i];
    document.getElementById(buttonId).style.display = toggleState === "all" ? "flex" : "none";
  }
}

function showAll() {
  toggleWorkItems("all");
}

function toggleLogos() {
  const logoToggle = !document.body.classList.contains("logoToggle");
  toggleWorkItems(logoToggle ? "logoItem" : "all");
}

function toggleDesigns() {
  const designToggle = !document.body.classList.contains("designToggle");
  toggleWorkItems(designToggle ? "webDesignItem" : "all");
}

function toggleIllustrations() {
  const illustrationToggle = !document.body.classList.contains("illustrationToggle");
  toggleWorkItems(illustrationToggle ? "illustrationItem" : "all");
}

function toggleDev() {
  const devToggle = !document.body.classList.contains("devToggle");
  toggleWorkItems(devToggle ? "webDevItem" : "all");
}

/* =============== Dark Mode =============== */

let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("darkTheme");
    document.documentElement.style.backgroundColor = "#333333";
  } else {
    document.body.classList.remove("darkTheme");
    document.documentElement.style.backgroundColor = "#f0f0f0";
  }
}

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);