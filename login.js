document.addEventListener("DOMContentLoaded", () => {
    // Redirect ke index jika sudah login
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      window.location.href = "index.html";
    }
  });
  
  function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const alertBox = document.getElementById("alert");
  
    if (!username || !password) {
      showAlert("Harap isi semua kolom");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    } else {
      showAlert("Username atau password salah");
    }
  }
  
  function register() {
    const username = prompt("Masukkan username baru:");
    const password = prompt("Masukkan password baru:");
  
    if (!username || !password) {
      alert("Registrasi dibatalkan.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const exists = users.some((u) => u.username === username);
    if (exists) {
      alert("Username sudah digunakan.");
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrasi berhasil. Silakan login.");
  }
  
  function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
  
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 3000);
  }