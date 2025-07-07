let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartIcon() {
    const count = cart.length;
    const icon = document.getElementById("cart-count");
    if (icon) icon.textContent = count > 0 ? `(${count})` : "";
}

function addToCart(product, price) {
    cart.push({ product, price: parseInt(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
    alert(product + " telah ditambahkan ke keranjang!");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function () {
            const product = this.getAttribute("data-product");
            const price = this.getAttribute("data-price");
            addToCart(product, price);
        });
    });
    updateCartIcon();
});
