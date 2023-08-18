function target() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let icons = [
    {
      topicon: '<iconify-icon icon="bi:suit-spade-fill"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="bi:suit-spade-fill" rotate="180deg"></iconify-icon>'
    },
    {
      topicon: '<iconify-icon icon="mdi:heart"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="mdi:heart" rotate="180deg"></iconify-icon>'
    },
    {
      topicon: '<iconify-icon icon="ph:club-fill"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="ph:club-fill" rotate="180deg"></iconify-icon>'
    },
    {
      topicon: '<iconify-icon icon="mingcute:diamond-fill"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="mingcute:diamond-fill" rotate="180deg"></iconify-icon>'
    },
    {
      topicon:
        '<iconify-icon icon="bi:suit-spade-fill" style="color: red;"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="bi:suit-spade-fill" style="color: red;" rotate="180deg"></iconify-icon>'
    },
    {
      topicon:
        '<iconify-icon icon="mdi:heart" style="color: red;"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="mdi:heart" style="color: red;" rotate="180deg"></iconify-icon>'
    },
    {
      topicon:
        '<iconify-icon icon="ph:club-fill" style="color: red;"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="ph:club-fill" style="color: red;" rotate="180deg"></iconify-icon>'
    },
    {
      topicon:
        '<iconify-icon icon="mingcute:diamond-fill" style="color: red;"></iconify-icon>',
      bottomicon:
        '<iconify-icon icon="mingcute:diamond-fill" style="color: red;" rotate="180deg"></iconify-icon>'
    }
  ];

  let randomArr = arr[Math.floor(Math.random() * arr.length)];

  let randomIcon = icons[Math.round(Math.random() * (icons.length - 1))];

  let selectArr = document.querySelector("#number");
  selectArr.textContent = randomArr;

  let selectTopIcon = document.querySelector("#top");
  selectTopIcon.innerHTML = randomIcon.topicon;

  let selctBottomIcon = document.querySelector("#bottom");
  selctBottomIcon.innerHTML = randomIcon.bottomicon;
}

/*refresh page*/
window.onload = target();

/*time interval by 10sec*/
setInterval(target, 10000);

/*click button*/
let buttonSelect = document.querySelector("button");
buttonSelect.addEventListener("click", target);

/*input*/
let heightInput = document.querySelector("#height");
let widthInput = document.querySelector("#width");
let dimensionChange = document.querySelector(".card");
heightInput.addEventListener("input", function newheight() {
  dimensionChange.style.height = heightInput.value;
});
widthInput.addEventListener("input", function newwidth() {
  dimensionChange.style.width = widthInput.value;
});
