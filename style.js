document.addEventListener("DOMContentLoaded", () => {


function updateDate(){

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

    document.getElementById("currentDate").textContent =
        today.toLocaleDateString("en-GB", options);

}

updateDate();

setInterval(updateDate,1000);

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