class Logout {
  static logoutMethod() {
    logout.addEventListener('click', (e) => {
      e.preventDefault()
      localStorage.removeItem('token')
      document.getElementById("notSignedIn").style.display = "block"
      document.getElementById("signedIn").style.display = "none"
    })
  }
}