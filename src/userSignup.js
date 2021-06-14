const signupUrl = "http://localhost:3000/users";

class Signup {
  constructor(first, last, email, phone, address, password, id) {
    this.first = first
    this.last = last
    this.email = email
    this.phone = phone
    this.address = address
    this.password = password
    this.id = id
  }

  static renderSignupForm() {
    document.getElementsByClassName("signupForm")[0].innerHTML = `

      <form class="signupBox" id="signupBox">
      <div class="closeForm">&times;</div>
        <h2 class="formTitle">Welcome, sign up below!</h2>

          <div>
            <input type="text" id="first" placeholder="First Name *">
          </div>

          <div>
            <input type="text" id="last" placeholder="Last Name *">
          </div>

          <div>
            <input type="text" id="email" placeholder="Email *">
          </div>

          <div>
            <input type="text" id="phone" placeholder="Phone Number *">
          </div>

          <div>
            <input type="text" id="address" placeholder="Address *">
          </div>

          <div>
            <input type="password" id="password" placeholder="Password *">
          </div>

          <input type="submit" id="form-box" value="Create Account">
      </form>

    `;
    // document.getElementById("form-box").onsubmit = (e) => {
    //   e.preventDefault()
    //   let formValue = Array.from(document.querySelectorAll('input')).reduce((acc, input) => ({
    //   ...acc, [input.id]: input.value}), {})
    // }
    document.querySelector(".closeForm").onclick = () => {
      document.querySelector(".closeForm").style.display = "none";
      document.getElementsByClassName("signupModal")[0].style.display = "none";
    }
  }

  static postSignupForm(first, last, email, phone, address, password) {

    let configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({    
        user: {
          first,
          last,
          email,
          phone,
          address, 
          password
        }  
      })
    };
    fetch(signupUrl, configObj)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt)
      })
      document.getElementsByClassName("signupModal")[0].style.display = "none";
  }

  static signupFormHandler() {
    document.getElementById("signupBox").onsubmit = (e) => {
      e.preventDefault()
      Signup.postSignupForm(
        e.target['first'].value,
        e.target['last'].value,
        e.target['email'].value,
        e.target['phone'].value,
        e.target['address'].value,
        e.target['password'].value
      )
        return false
    }
  }

  static createUser() {
    document.getElementById("form-button-signup").onclick = () => {
      Signup.renderSignupForm();
      document.getElementsByClassName("signupModal")[0].style.display = "block"
      Signup.signupFormHandler();
    }
  }
}