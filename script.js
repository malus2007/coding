function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    // Simulasi data pengguna
    const users = [
      { username: "Berto Malus", password: "25012007" },
      { username: "siswa1", password: "abcd" }
    ];
  
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (foundUser) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Hati yang kamu masuk salah!");
      alert("Coba perbaiki hati mu dan memasukannya kembali")
      alert("I Love You & Good Bay")
    }
  }