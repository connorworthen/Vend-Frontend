const signupUrl = "http://localhost:3000/signup";

class User {
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
    document.getElementsByClassName("signup-form")[0].innerHTML = `
      <h2>Create Account</h2>

      <form id="signupForm">

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
    debugger
    fetch(signupUrl, configObj)
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData)
      })
  }

  static signupFormHandler() {
    document.getElementById("signupForm").onsubmit = (e) => {
      e.preventDefault()
      User.postSignupForm(
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
}