function openModal(e) {
  e.stopPropagation();
  document.getElementById("modal").style.display = "block";
  document.getElementsByTagName("body")[0].classList.add("overlay");
}

function closeModal(e) {
  e.stopPropagation();
  document.getElementById("modal").style.display = "none";
  document.getElementsByTagName("body")[0].classList.remove("overlay");
}

(function clickAwayListener() {
  const htmlEle = document.getElementsByTagName("html")[0];
  htmlEle.addEventListener("click", (e) => {
    const modalEle = document.getElementById("modal");
    const isModalOpened = modalEle.style.display === "block";

    if (isModalOpened && !modalEle.contains(e.target)) {
      modalEle.style.display = "none";
      document.getElementsByTagName("body")[0].classList.remove("overlay");
    }
  });
})();
