// underline
document.querySelectorAll(".nav-item").forEach((item) => {
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
let totalSection = document.querySelectorAll("section");
totalSection.forEach(function (elem) {
  const text = new SplitType(elem.querySelectorAll(".animate-text")); // Select all text elements inside the section
  let textwords = text.words;
  textwords.forEach(function (word, index) {
    gsap.from(word, {
      scrollTrigger: {
        trigger: elem,
        start: "top bottom", // Change the start value to "top bottom"
        end: "bottom top",
        // markers: true,
      },
      delay: 0.02 * index,
      duration: 1,
      opacity: 0,
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.4 * index, // Apply staggered delay based on index
    });
  });
});
