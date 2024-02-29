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
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const text = new SplitType(entry.target.querySelectorAll(".animate-text"));
    let textwords = text.words;
    textwords.forEach(function (word, index) {
      if (entry.isIntersecting) {
        gsap.from(word, {
          opacity: 0,
          delay: 0.02 * index,
          duration: 1,
          yPercent: 100,
          ease: Power3.out,
          stagger: 0.4 * index,
        });
      } else {
        gsap.to(word, {
          opacity: 0,
          duration: 0.5,
          ease: Power3.out,
        });
      }
    });
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  });
}, options);

let totalSection = document.querySelectorAll("section");
totalSection.forEach((elem) => {
  observer.observe(elem);
});

// smooth scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to(".render", {
  y: "-50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".render",
    start: "top bottom", // when the top of the trigger hits the bottom of the viewport
    end: "bottom top", // when the bottom of the trigger hits the top of the viewport
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    pin: true, // pins the element for the duration of the scroll
    pinSpacing: false, // disables automatic adjustment of pin spacing
  },
});
