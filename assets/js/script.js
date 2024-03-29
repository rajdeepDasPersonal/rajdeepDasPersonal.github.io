
// Preloader
const preloader = document.querySelector(".preloader");
const preloaderDuration = 500;

const hidePreloader = () => {
    setTimeout(() => {
        preloader.classList.add("hide");
    }, preloaderDuration);
}

window.addEventListener("load", hidePreloader);


// Profile Image
const borderRadiusValues = ['74% 26% 44% 56% / 39% 60% 40% 61% ', 
                            '74% 26% 20% 80% / 68% 60% 40% 32% ', 
                            '32% 68% 26% 74% / 68% 30% 70% 32% ',
                            '30% 70% 70% 30% / 30% 30% 70% 70%'
                            ];
const profileImage = document.querySelector('.profile');

let lastRandomIndex = -1;
profileImage.addEventListener('click', () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * borderRadiusValues.length);
  } 
  while (randomIndex === lastRandomIndex);
  lastRandomIndex = randomIndex;
  const randomBorderRadius = borderRadiusValues[randomIndex];
  profileImage.style.borderRadius = randomBorderRadius;
});

// Footer 
const d = new Date();
let year = d.getFullYear();
document.querySelector(".year").innerHTML = year;

