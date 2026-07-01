document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // LIVE DATE & TIME
    // ==========================

    function updateDate() {
        const today = new Date();

        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };

        const dateElement = document.getElementById("currentDate");

        if (dateElement) {
            dateElement.textContent = today.toLocaleDateString("en-GB", options);
        }
    }

    updateDate();
    setInterval(updateDate, 1000);

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", function () {

            mobileNav.classList.toggle("active");

            if (mobileNav.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

    }

    // ==========================
    // WISHLIST
    // ==========================

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", function () {

            this.classList.toggle("active");

            this.innerHTML = this.classList.contains("active") ? "♥" : "♡";

        });

    });

    // ==========================
    // CART
    // ==========================

    let cartCount = 0;

    const cartCounter = document.getElementById("cartCount");

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", function () {

            if (this.classList.contains("added")) {

                this.classList.remove("added");
                this.innerHTML = "Add to Cart";
                cartCount--;

            } else {

                this.classList.add("added");
                this.innerHTML = "✓ Added";
                cartCount++;

            }

            if (cartCount < 0) {
                cartCount = 0;
            }

            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }

        });

    });

});