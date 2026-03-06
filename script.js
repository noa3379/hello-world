const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (menuBtn && closeBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
}

/* 홈 랜덤 이미지 */
const randomImage = document.getElementById("randomImage");

if (randomImage) {
  const imageList = [
    "img/home1.jpeg",
    "img/home2.jpeg",
    "img/home3.jpeg",
    "img/home4.jpeg",
    "img/home5.jpeg",
    "img/home6.jpeg",
    "img/home7.jpeg",
    "img/home8.jpeg",
    "img/home9.jpeg",
    "img/home10.jpeg",
    "img/home11.jpeg",
    "img/home12.jpeg",
    "img/home13.jpeg",

  ];

  randomImage.addEventListener("click", () => {
    const currentSrc = randomImage.getAttribute("src");
    let nextSrc = currentSrc;

    while (nextSrc === currentSrc) {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      nextSrc = imageList[randomIndex];
    }

    randomImage.setAttribute("src", nextSrc);
  });
}