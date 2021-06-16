const signinUrl = "http://localhost:3000/login";

class Signin {
  constructor(email, password, id) {
    this.email = email
    this.password = password
    this.id = id
  }

  static renderCurrentUser() {
    document.getElementsByClassName("signin-form")[0].innerHTML = `
      <form class="form-box-signin" id="form-box-signin">
        <div class="close-form-signin">&times;</div>
        <h2 class="form-title-signin">Welcome back! Sign in below</h2>

          <input type="text" id="email">

          <input type="password" id="password">
          
          <input type="submit" class="form-button-signin" value="Login">
      </form>
    `;
    document.querySelector(".close-form-signin").onclick = () => {
      document.querySelector(".close-form-signin").style.display = "none";
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
    }
  }

  static renderPostSignin(email, password) {
  
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
      document.getElementsByClassName("signin-modal")[0].style.display = "none";
  }

  static signinUser() {
    document.getElementById("form-button-signin").onclick = () => {
      Signin.renderCurrentUser();
      Signin.signinFormHandler();
      document.getElementsByClassName("signin-modal")[0].style.display =
        "block";
    };
  }

  static signinFormHandler() {
    document.getElementById("form-box-signin").onsubmit = (e) => {
      e.preventDefault()
      Signin.renderPostSignin(e.target['email'].value, e.target['password'].value)
        return false
    }
  }
}