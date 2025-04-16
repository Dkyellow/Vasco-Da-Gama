// Variables for timer
let timeinterval;
let seconds = 60;
let minutes = 5;
let hours = 2;
let days = 5;
let SecondX = document.getElementById("Seconds");
let MinutesX = document.getElementById("Minutes");
let HoursX = document.getElementById("Hours");
let DaysX = document.getElementById("Days");
SecondX.textContent = seconds;
MinutesX.textContent = minutes;
HoursX.textContent = hours;
DaysX.textContent = days;

// Timer

timeinterval = setInterval(() => {
  seconds--;
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes === 0) {
    hours--;
    minutes = 59;
  }
  if (hours === 0) {
    days--;
    hours = 23;
  }

  Updatetimer();
}, 1000);

function Updatetimer() {
  SecondX.textContent = Padzer(seconds);
  MinutesX.textContent = Padzer(minutes);
  HoursX.textContent = Padzer(hours);
}
function Padzer(num) {
  return (num < 10 ? "0" : "") + num;
}

// Scroll button and Nav-bar

let btn = document.querySelector(".scroll-btn");
let navbar = document.querySelector(".nav-bar");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
    navbar.style.opacity = 0;
    navbar.addEventListener("mouseover", () => {
      navbar.style.opacity = 1;
    });
  } else {
    navbar.style.opacity = 1;
    btn.style.display = "none";
  }
});

// Icons
let FBIcon = document.querySelectorAll(".FB");
let TWIcon = document.querySelectorAll(".TW");
let IGIcon = document.querySelectorAll(".IG");

// Facebook
FBIcon.forEach((FB) => {
  FB.addEventListener("mouseover", () => {
    FB.src = "./Assets/Icons/icons8_facebook_64px.png";
  });
  FB.addEventListener("mouseout", () => {
    FB.src = "./Assets/Icons/icons8_facebook_Black_64px_1.png";
  });
});

// Twitter
TWIcon.forEach((TW) => {
  TW.addEventListener("mouseover", () => {
    TW.src = "./Assets/Icons/icons8_twitter_64px.png";
  });
  TW.addEventListener("mouseout", () => {
    TW.src = "./Assets/Icons/icons8_twitter_Black_64px_1.png";
  });
});

// Instagram
IGIcon.forEach((IG) => {
  IG.addEventListener("mouseover", () => {
    IG.src = "./Assets/Icons/icons8_instagram_64px.png";
  });
  IG.addEventListener("mouseout", () => {
    IG.src = "./Assets/Icons/icons8_instagram_Black_64px_1.png";
  });
});
