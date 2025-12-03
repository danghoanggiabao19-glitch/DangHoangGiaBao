let users = JSON.parse(localStorage.getItem("users")) || [];

const registerBtn = document.getElementById("register-btn");
const registerMessage = document.getElementById("register-message");

registerBtn.addEventListener("click", () => {
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const password2 = document.getElementById("register-password2").value;

    if (!name || !email || !password || !password2) {
        registerMessage.textContent = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    if (password !== password2) {
        registerMessage.textContent = "Mật khẩu không khớp!";
        return;
    }

    if (users.find(user => user.email === email)) {
        registerMessage.textContent = "Email đã được đăng ký!";
        return;
    }

    users.push({name, email, password});
    localStorage.setItem("users", JSON.stringify(users));

    registerMessage.style.color = "green";
    registerMessage.textContent = "Đăng ký thành công! Bạn có thể đăng nhập.";

    // Reset form
    document.getElementById("register-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("register-password2").value = "";
});
