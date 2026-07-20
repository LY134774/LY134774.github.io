(function () {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) return;

  window.requestAnimationFrame(() => {
    revealItems.forEach((item) => item.classList.add("in-view"));
  });
})();
