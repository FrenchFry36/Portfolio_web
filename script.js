// scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// illumination feature
const welcomeSection = document.getElementById("welcome-section");
const illuminationSection = document.getElementById("illumination");
const illuminationTracker = document.getElementById("illumination-tracker");
const spotlightImage = getComputedStyle(document.documentElement)
  .getPropertyValue("--spotlight-image")
  .trim();
const spotlightDark = getComputedStyle(document.documentElement)
  .getPropertyValue("--lead-blue")
  .trim();

window.addEventListener("load", () => {
  illuminationSection.style.backgroundColor = spotlightDark;
});

illuminationTracker.addEventListener("mousemove", (e) => {
  illuminationSection.style.backgroundColor = "transparent";
  const rect = illuminationSection.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position within the element
  const y = e.clientY - rect.top; // Y position within the element

  // Update the background gradient position

  illuminationSection.style.backgroundImage = `
    radial-gradient(circle at ${x}px ${y}px, transparent 100px, ${spotlightDark} 250px)
  `;
});
