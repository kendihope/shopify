document.addEventListener("DOMContentLoaded", () => {

   

    const wishlistButtons =
        document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

            if(button.classList.contains("active")){

                button.innerHTML = "♥";

            }else{

                button.innerHTML = "♡";

            }

        });

    });

    // Add To Cart

    const cartButtons =
        document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            if(button.classList.contains("added")){

                button.classList.remove("added");
                button.innerHTML = "Add to Cart";

            }else{

                button.classList.add("added");
                button.innerHTML = "✓ Added";

            }

        });

    });

});