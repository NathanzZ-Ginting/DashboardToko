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
  
    // Username dan password yang diijinkan (hardcoded)
    const validUsername = "admin";
    const validPassword = "tokoku123";
  
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    } else {
      showAlert("Username atau password salah");
    }
  }
  
  function register() {
    alert("Registrasi tidak tersedia. Hubungi admin untuk pembuatan akun.");
  }
  
  function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
  
    setTimeout(() => {
      alertBox.classList.add("hidden");
    }, 3000);
  }