window.onload = () => {
  const loginBtn = document.getElementById("login-btn")
  const signupBtn = document.getElementById("signup-btn")
  const logoutBtn = document.getElementById("logout-btn")
  const isLoggedIn = localStorage.getItem("userLoggedIn")

  if (loginBtn && signupBtn && logoutBtn) {
    if (isLoggedIn === "true") {
      loginBtn.style.display = "none"
      signupBtn.style.display = "none"
      logoutBtn.style.display = "inline"
    } else {
      logoutBtn.style.display = "none"
    }
  }
}

function logout() {
  localStorage.removeItem("userLoggedIn")
  alert("GUURARAARA.....Logged out!")
  location.reload()
}
