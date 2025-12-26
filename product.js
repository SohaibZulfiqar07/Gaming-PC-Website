// products.js........

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Select all buy buttons
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // prevent default link behavior
            const productCard = e.target.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const price = productCard.querySelector(".price").innerText;
            alert(`You selected: ${productName}\nPrice: ${price}\nProceeding to checkout...`);
            window.location.href = "checkout.html"; // Redirect to checkout.html page.
        });
    });