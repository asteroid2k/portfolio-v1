const faders = document.querySelectorAll(".fade-in");
const slideLeft = document.querySelectorAll(".slide-left");
const slideRight = document.querySelectorAll(".slide-right");

console.log(faders);

const fadeInOptions = {
  //   threshold: 1,
  rootMargin: "0px 0px -150px 0px",
};
const slideOptions = {
  //   threshold: 1,
  rootMargin: "0px 0px -100px 0px",
};

// Observers
const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      fadeInOnScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

const slideLeftScroll = new IntersectionObserver((entries, slideLeftScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      slideLeftScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

const slideRightScroll = new IntersectionObserver(
  (entries, slideRightScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        slideRightScroll.unobserve(entry.target);
      }
    });
  },
  fadeInOptions
);

faders.forEach((element) => {
  fadeInOnScroll.observe(element);
});
slideLeft.forEach((element) => {
  slideLeftScroll.observe(element);
});
slideRight.forEach((element) => {
  slideRightScroll.observe(element);
});
