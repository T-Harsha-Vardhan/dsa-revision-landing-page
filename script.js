document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".carousel-indicator");
  let currentIndex = 0;
  let interval;

  function showItem(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.style.transition = "opacity 1s ease-in-out";
        item.style.opacity = 1;
        setTimeout(() => {
          item.classList.add("block");
          item.classList.remove("hidden");
        }, 1000);
      } else {
        item.style.transition = "opacity 1s ease-in-out";
        item.style.opacity = 0;
        setTimeout(() => {
          item.classList.add("hidden");
          item.classList.remove("block");
        }, 1000);
      }
      indicators[i].classList.toggle("bg-[#4c527d]", i === index);
      indicators[i].classList.toggle("bg-[#a4a7bd]", i !== index);
    });
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function startAutoRotate() {
    interval = setInterval(nextItem, 3000);
  }

  function stopAutoRotate() {
    clearInterval(interval);
  }

  items[currentIndex].style.opacity = 1;
  showItem(currentIndex);
  startAutoRotate();

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopAutoRotate();
      currentIndex = index;
      showItem(currentIndex);
      startAutoRotate();
    });
  });
});
