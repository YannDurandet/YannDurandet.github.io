/* =============== Work Toggle =============== */

let logoToggle = false;
function toggleLogos() {
  logoToggle = !logoToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log("logoToggle : ", logoToggle)
    if (logoToggle && item.classList.contains("logoItem")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("logoToggle");
  document.getElementById("showAllButton").style.display = logoToggle ? "flex" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let designToggle = false;
function toggleDesigns() {
  designToggle = !designToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log("designToggle : ", designToggle)
    if (designToggle && item.classList.contains("webDesignItem")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("designToggle");
  document.getElementById("showAllButton").style.display = designToggle ? "flex" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let illustrationToggle = false;
function toggleIllustrations() {
  illustrationToggle = !illustrationToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (illustrationToggle && item.classList.contains("illustrationItem")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("illustrationToggle");
  document.getElementById("showAllButton").style.display = illustrationToggle ? "flex" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let devToggle = false;
function toggleDev() {
  devToggle = !devToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (devToggle && item.classList.contains("webDevItem")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("devToggle");
  document.getElementById("showAllButton").style.display = devToggle ? "flex" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

function showAll() {
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.style.display = "flex";
  }
  document.body.classList.remove("logoToggle");
  document.body.classList.remove("designToggle");
  document.body.classList.remove("illustrationToggle");

  logoToggle = false;
  designToggle = false;
  illustrationToggle = false;
  devToggle = false;
  document.getElementById("showAllButton").style.display = "none";
  document.getElementById("LogoButton").style.display = "flex";
  document.getElementById("webDesignButton").style.display = "flex";
  document.getElementById("illustrationButton").style.display = "flex";
  document.getElementById("devButton").style.display = "flex";
}

/* =============== GRID DETAILS =============== */
let detailToggle = false;

function showDetails() {
  const menuBottom = document.getElementById("menuBottom");
  const workGrid = document.getElementById("workGrid");
  const detailledGrid = document.getElementById("detailledGrid");

  detailledGrid.style.transition = "opacity 500ms";
  workGrid.style.transition = "opacity 500ms";

  workGrid.style.opacity = "0";
  setTimeout(function () {
    workGrid.style.display = "none";
    detailledGrid.style.display = "block";
    setTimeout(function () {
      detailledGrid.style.opacity = "1";
    }, 10);
  }, 500);

  detailToggle = true;
}

function showGrid() {
  const menuBottom = document.getElementById("menuBottom");
  const workGrid = document.getElementById("workGrid");
  const detailledGrid = document.getElementById("detailledGrid");

  workGrid.style.transition = "opacity 500ms";
  detailledGrid.style.transition = "opacity 500ms";

  detailledGrid.style.opacity = "0";
  setTimeout(function () {
    detailledGrid.style.display = "none";
    workGrid.style.display = "block";
    setTimeout(function () {
      workGrid.style.opacity = "1";
    }, 10);
  }, 500);

  detailToggle = false;
}

/* =============== Dark Mode =============== */

let contrastToggle = false

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("darkTheme");
    var buttons = document.getElementsByClassName("button");
  } else {
    document.body.classList.remove("darkTheme");
    var buttons = document.getElementsByClassName("button");
  }
}

/* =============== Buttons =============== */

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');