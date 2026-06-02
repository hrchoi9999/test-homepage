const slides = [
  {
    src: "picture/KakaoTalk_20260519_180135559.png",
    title: "밝은 표정의 비숑 뚜기",
  },
  {
    src: "picture/KakaoTalk_20260519_180140168.png",
    title: "포근한 비숑프리제 매력",
  },
  {
    src: "picture/KakaoTalk_20260602_134010999.png",
    title: "뚜기의 새로운 사진 1",
  },
  {
    src: "picture/KakaoTalk_20260602_134011908.png",
    title: "뚜기의 새로운 사진 2",
  },
  {
    src: "picture/KakaoTalk_20260602_134012327.png",
    title: "뚜기의 새로운 사진 3",
  },
  {
    src: "picture/두쫀쿠.png",
    title: "비숑 뚜기의 귀여운 순간",
  },
  {
    src: "picture/회사원강아지.png",
    title: "회사원 강아지 콘셉트",
  },
];

const slideImage = document.querySelector("#slide-image");
const slideCount = document.querySelector("#slide-count");
const slideTitle = document.querySelector("#slide-title");
const photoThumbs = document.querySelectorAll(".photo-thumb");
let currentSlide = 0;
let slideTimer;

function showSlide(nextIndex) {
  currentSlide = nextIndex % slides.length;
  const nextSlide = slides[currentSlide];

  slideImage.classList.add("is-fading");
  window.setTimeout(() => {
    slideImage.src = nextSlide.src;
    slideImage.alt = nextSlide.title;
    slideCount.textContent = `${currentSlide + 1} / ${slides.length}`;
    slideTitle.textContent = nextSlide.title;
    photoThumbs.forEach((thumb) => thumb.classList.remove("active"));
    photoThumbs[currentSlide]?.classList.add("active");
    slideImage.classList.remove("is-fading");
  }, 240);
}

function startSlideshow() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000);
}

photoThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    showSlide(Number(thumb.dataset.slide));
    startSlideshow();
  });
});

startSlideshow();

const video = document.querySelector("#main-video");
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoSrc = card.dataset.video;
    const posterSrc = card.dataset.poster;

    videoCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");

    video.pause();
    video.poster = posterSrc;
    video.querySelector("source").src = videoSrc;
    video.load();
    video.play();
  });
});
