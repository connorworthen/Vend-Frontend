const signinUrl = "http://localhost:3000/login";
const autoUrl = "http://localhost:3000/auto_login"

class Signin {
  constructor(email, password, id) {
    this.email = email
    this.password = password
    this.id = id
  }

  static signedInCheck() {
    const token = localStorage.getItem("token")
    if (token) {
      fetch(autoUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => response.json())
        .then(() => {
          Signin.signedInProfile()
        })
    } else {
      document.getElementById("signedIn").style.display = "none"
    }
  }

  static signinHandler() {
    signinButton.addEventListener('click', () => {
      document.getElementsByClassName("signinModal")[0].style.display = "block"
    })
    document.querySelector(".closeSigninForm").onclick = () => {
      document.getElementsByClassName("signinModal")[0].style.display = "none";
    }
    Signin.submitHandler();
  }

  static submitHandler() {
    signinBox.addEventListener('submit', (e) => {
      e.preventDefault()
      Signin.postSigninForm(
        e.target['email'].value,
        e.target['password'].value
      )
      return false
    })
  }

  static postSigninForm(email, password) {
  
    let configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
            
      body: JSON.stringify({    
        user: {
          email,
          password
        }    
      })  
    };

    fetch(signinUrl, configObj) 
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt)  
      })
      document.getElementsByClassName("signinModal")[0].style.display = "none";
      Signin.signedInProfile()
  }

  static signedInProfile() {
    document.getElementById("notSignedIn").style.display = "none"
    document.getElementById("signedIn").style.display = "block"
  }
}
