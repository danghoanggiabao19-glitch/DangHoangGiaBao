// Lấy dữ liệu đăng ký từ LocalStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

const loginBtn = document.getElementById("login-btn");
const loginMessage = document.getElementById("login-message");

loginBtn.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        loginMessage.style.color = "green";
        loginMessage.textContent = `Xin chào, ${user.name}! Đăng nhập thành công.`;
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Email hoặc mật khẩu không đúng!";
    }
});
// JS giả lập hiển thị thông báo khi bấm nút Facebook/Google
    document.getElementById('facebook-login').addEventListener('click', () => {
        alert('Đăng nhập bằng Facebook thành công (demo)');
    });

    document.getElementById('google-login').addEventListener('click', () => {
        alert('Đăng nhập bằng Google thành công (demo)');
    });