// -------------------- SLIDER --------------------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(s => s.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

document.querySelector(".prev")?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

document.querySelector(".next")?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

setInterval(() => showSlide(currentSlide + 1), 5000);

// -------------------- GIỎ HÀNG --------------------
const btns = document.querySelectorAll(".add-to-cart");
const countSpan = document.getElementById("cart-count");
const totalSpan = document.getElementById("cart-total");

// Lấy giỏ hàng hiện tại từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateHeaderCart() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    countSpan.textContent = totalQuantity;
    totalSpan.textContent = totalPrice.toLocaleString("vi-VN") + "₫";
}

// Hiển thị dữ liệu giỏ hàng khi load trang
updateHeaderCart();

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const productBox = btn.closest('.product-box');
        
        const name = productBox.querySelector('h3').textContent.trim();
        const price = parseInt(btn.dataset.price);
        // LẤY ĐƯỜNG DẪN ẢNH TỪ THẺ <img> CỦA SẢN PHẨM
        const image = productBox.querySelector('img').src; 

        const index = cart.findIndex(item => item.name === name);
        if (index >= 0) {
            cart[index].quantity += 1;
        } else {
            // THÊM 'image' VÀO ĐỐI TƯỢNG SẢN PHẨM MỚI
            cart.push({ name: name, price: price, image: image, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateHeaderCart();
        
        alert(`Đã thêm ${name} vào giỏ hàng!`); 
    });
});
