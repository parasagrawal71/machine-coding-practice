(function () {
  const starsEle = document.getElementById("stars");
  document.addEventListener("mouseover", (event) => onHoverOfStar(event, "lightyellow"));
  document.addEventListener("click", (event) => onClickOfStar(event, "yellow"));
  for (let i = 0; i < 5; i++) {
    const starEle = document.createElement("div");
    starEle.classList.add(`star-${i}`);
    starsEle.appendChild(starEle);
  }
})();

function onHoverOfStar(event, colorClass) {
  event.stopPropagation();
  const className = event.target.className;

  const allStarsEle = document.querySelectorAll("[class^=star-]");
  allStarsEle.forEach((ele) => {
    ele.classList.remove(colorClass);
  });

  if (className && className.includes("star-")) {
    let starNum = Number(className.split("-")[1]);
    while (starNum > -1) {
      //   console.log(`starNum: `, starNum);
      const ele = document.getElementsByClassName(`star-${starNum}`)[0];
      ele.classList.add(colorClass);
      starNum--;
    }
  }
}

function onClickOfStar(event, colorClass) {
  console.log(`colorClass: `, colorClass);
  event.stopPropagation();
  const className = event.target.className;

  const allStarsEle = document.querySelectorAll("[class^=star-]");
  allStarsEle.forEach((ele) => {
    ele.classList.remove(colorClass);
  });

  if (className && className.includes("star-")) {
    console.log(`className: `, className);
    let starNum = Number(className.split(" ")[0].split("-")[1]);
    while (starNum > -1) {
      console.log(`starNum: `, starNum);
      const ele = document.getElementsByClassName(`star-${starNum}`)[0];
      ele.classList.add(colorClass);
      starNum--;
    }
  }
}
