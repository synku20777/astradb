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

const totalSection = document.querySelectorAll("section");
totalSection.forEach((elem) => {
  observer.observe(elem);
});

// parallax scroll for .render
const iphoneWrappers = document.querySelectorAll(".iphone-wrapper");

const intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const render = entry.target.querySelector(".render");
        let parentContainer = entry.target.parentElement;
        while (!parentContainer.classList.contains("container")) {
          parentContainer = parentContainer.parentElement;
        }
        const scrollHandler = function () {
          if (window.scrollY >= parentContainer.offsetTop) {
            const scrollPosition = window.scrollY - parentContainer.offsetTop;
            render.querySelector("img").style.transform = `translateY(-${
              scrollPosition * 1.2
            }px)`;
          } else {
            render.querySelector("img").style.transform = "translateY(0)";
          }
        };
        window.addEventListener("scroll", scrollHandler);
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0 }
);

iphoneWrappers.forEach((wrapper) => {
  intersectionObserver.observe(wrapper);
});

// parallax scroll for desktop .render
const desktopWrapper = document.querySelector(".desktop-wrapper");
const desktopRender = desktopWrapper.querySelector(".render");

let parentContainer = desktopWrapper.parentElement;
while (!parentContainer.classList.contains("container")) {
  parentContainer = parentContainer.parentElement;
}

const desktopObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrollHandler = function () {
          if (window.scrollY >= parentContainer.offsetTop) {
            const scrollPosition = window.scrollY - parentContainer.offsetTop;
            desktopRender.querySelector("img").style.transform = `translateY(-${
              scrollPosition * 0.4
            }px)`;
          } else {
            desktopRender.querySelector("img").style.transform =
              "translateY(0)";
          }
        };
        window.addEventListener("scroll", scrollHandler);
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0 }
);

// Start observing when the .desktop-wrapper enters the viewport
desktopObserver.observe(desktopWrapper);
