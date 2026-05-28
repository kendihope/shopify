

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".nav-right input");
  const categoryCards = document.querySelectorAll(".category-card");
  const addToCartBtns = document.querySelectorAll(".product-card button");
  const cartIcon = document.querySelector(".cart-icon");
  const wishlistBtns = document.querySelectorAll(".wishlist-btn");
  const navLinks = document.querySelectorAll("nav a");
  const ctaBtn = document.querySelector(".cta button");

  let cartCount = 0;
  let wishlist = [];

  // =========================
  // SEARCH PRODUCTS
  // =========================
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      const query = e.target.value.toLowerCase();

      document.querySelectorAll(".product-card").forEach((card) => {
        const title =
          card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // =========================
  // CATEGORY CLICK
  // =========================
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category =
        card.querySelector("h3").textContent;

      alert(`Viewing ${category}`);
    });
  });

  // =========================
  // ADD TO CART
  // =========================
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;

      if (cartIcon) {
        cartIcon.textContent = `🛒 ${cartCount}`;
      }

      btn.textContent = "Added ✓";

      setTimeout(() => {
        btn.textContent = "Add to cart";
      }, 1500);
    });
  });

  // =========================
  // WISHLIST
  // =========================
  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product =
        btn.closest(".product-card")
          .querySelector("h3")
          .textContent;

      if (wishlist.includes(product)) {
        wishlist = wishlist.filter(
          (item) => item !== product
        );

        btn.classList.remove("active");
        btn.textContent = "♡";
      } else {
        wishlist.push(product);

        btn.classList.add("active");
        btn.textContent = "♥";
      }
    });
  });

  // =========================
  // NAV ACTIVE
  // =========================
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((a) =>
        a.classList.remove("active")
      );

      link.classList.add("active");
    });
  });

  // =========================
  // CTA BUTTON SCROLL
  // =========================
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});