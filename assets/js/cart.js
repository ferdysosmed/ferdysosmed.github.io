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
    showToast("✔️ Pesanan berhasil dimasukkan ke keranjang");
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.backgroundColor = "#28a745";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.fontWeight = "bold";
    toast.style.boxShadow = "0 0 8px rgba(0,0,0,0.3)";
    toast.style.border = "2px solid white";
    toast.style.textShadow = "1px 1px 2px black";
    toast.style.zIndex = 9999;

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
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
