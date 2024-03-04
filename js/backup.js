const works = document.querySelector(".works");
const render = works.querySelector(".render");

const intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", function () {
          if (window.scrollY >= works.offsetTop) {
            const scrollPosition = window.scrollY - works.offsetTop;
            render.querySelector("img").style.transform = `translateY(-${
              scrollPosition * 1.2
            }px)`;
          } else {
            render.querySelector("img").style.transform = "translateY(0)";
          }
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0 }
);

intersectionObserver.observe(works);

// parallax scroll for desktop .render
const desktopWrapper = document.querySelector(".desktop-wrapper");
const desktopRender = desktopWrapper.querySelector(".render");

const desktopObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", function () {
          if (window.scrollY >= desktopWrapper.offsetTop) {
            const scrollPosition = window.scrollY - works.offsetTop;
            desktopRender.querySelector("img").style.transform = `translateY(-${
              scrollPosition * 0.4
            }px)`;
          } else {
            desktopRender.querySelector("img").style.transform =
              "translateY(0)";
          }
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0 }
);

// Start observing when the .desktop-wrapper enters the viewport
desktopObserver.observe(desktopWrapper);
