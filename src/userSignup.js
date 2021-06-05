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
      <form>
        <h2>Create Account</h2>

          <input type="text" id="first" placeholder="First Name *">

          <input type="text" id="last" placeholder="Last Name *">

          <input type="text" id="email" placeholder="Email *">

          <input type="text" id="phone" placeholder="Phone Number *">

          <input type="text" id="address" placeholder="Address *">

          <input type="password" id="password" placeholder="Password *">

          <input type="submit" class="form-button" value="Create Account">
      </form>
    `;
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
}