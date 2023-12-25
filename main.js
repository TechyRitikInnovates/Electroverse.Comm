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

function openContactPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("contactPopup").style.display = "block";
}

function closeContactPopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("contactPopup").style.display = "none";
}

window.addEventListener('scroll', function() {
  var arrow = document.getElementById('arrow');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollStep = -currentPosition / 30;
  function scroll() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scroll);
    }
  }
  scroll();
}
function toggleReadMoreSection1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none" || dots.style.display === "") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
  } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
  }
}

function toggleReadMoreSection2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none" || dots.style.display === "") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
  } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
  }
}

function toggleReadMoreSection3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none" || dots.style.display === "") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
  } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
  }
}

