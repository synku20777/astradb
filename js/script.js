// underline
document.querySelectorAll(".nav-item ").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.classList.add("hovered");
  });

  item.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hovered");
  });
});

// cursor

var circle = document.querySelector("#cursor");
var frames = document.querySelectorAll("#frame");
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.4,
    opacity: 1,
    ease: Sine,
  });
});

// text reveal on section
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const text = new SplitType(
        entry.target.querySelectorAll(".animate-text")
      );
      let textwords = text.words;
      textwords.forEach(function (word, index) {
        gsap.from(word, {
          delay: 0.02 * index,
          duration: 1,
          opacity: 0,
          yPercent: 100,
          ease: Power3.out,
          stagger: 0.4 * index,
        });
      });
      observer.unobserve(entry.target);
    }
  });
}, options);

let totalSection = document.querySelectorAll("section");
totalSection.forEach((elem) => {
  observer.observe(elem);
});

// smooth scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 2,
  speed: 2,
  effects: true,
  // normalizeScroll: true,
  smoothTouch: 0.1,
});
