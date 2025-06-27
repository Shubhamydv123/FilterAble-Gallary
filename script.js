// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const images = document.querySelectorAll(".gallery-item img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const galleryItems = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

// Show lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.style.display = "none";
});

// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Button active state
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galleryItems.forEach(item => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
