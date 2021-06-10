gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

/* Main navigation */
const panelsSection = document.querySelector("#panels");
const panelsContainer = document.querySelector("#panels-container");
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));
    if(targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: {
          y: containerOffset,
          autoKill: false
        },
        duration: 1
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false
        },
        duration: 1
      });
    }
  });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
gsap.to(panels, {
  xPercent: -100 * ( panels.length - 1 ),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / ( panels.length - 1 ),
      duration: {min: 0.1, max: 0.1}
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
  }
});