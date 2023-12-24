document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("December 31, 2023 23:59:59").getTime();

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "m";
    document.getElementById("seconds").innerText = seconds + "s";
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(changeContent, 5000);
});

function changeContent() {
  const contents = document.querySelectorAll(".content");
  const activeContent = document.querySelector(".content.active");
  const nextIndex =
    (Array.from(contents).indexOf(activeContent) + 1) % contents.length;

  activeContent.classList.remove("active");
  contents[nextIndex].classList.add("active");
}

function toggleReadMore() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var myBtn1 = document.getElementById("myBtn1");

  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var myBtn2 = document.getElementById("myBtn2");

  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var myBtn3 = document.getElementById("myBtn3");

  // Function to check initial visibility and set button text
  function setButtonText(dots, moreText, button) {
    if (dots.style.display === "none" || dots.style.display === "") {
      button.innerHTML = "Read less";
    } else {
      button.innerHTML = "Read more";
    }
  }

  // Toggle visibility for content 1
  if (dots1.style.display === "none" || dots1.style.display === "") {
    dots1.style.display = "inline";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    moreText1.style.display = "inline";
  }
  setButtonText(dots1, moreText1, myBtn1);

  // Toggle visibility for content 2
  if (dots2.style.display === "none" || dots2.style.display === "") {
    dots2.style.display = "inline";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    moreText2.style.display = "inline";
  }
  setButtonText(dots2, moreText2, myBtn2);

  // Toggle visibility for content 3
  if (dots3.style.display === "none" || dots3.style.display === "") {
    dots3.style.display = "inline";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    moreText3.style.display = "inline";
  }
  setButtonText(dots3, moreText3, myBtn3);
}

function openContactPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("contactPopup").style.display = "block";
}

function closeContactPopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("contactPopup").style.display = "none";
}