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

  static signupHandler() {
    signupButton.addEventListener('click', () => {
      document.getElementsByClassName("signupModal")[0].style.display = "block"
    })
    document.querySelector(".closeForm").onclick = () => {
      document.getElementsByClassName("signupModal")[0].style.display = "none";
    }
    Signup.submitHandler();
  }

  static submitHandler() {
    signupBox.addEventListener('submit', (e) => {
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
    })
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
        localStorage.setItem("id", data.user.id)
      })
      document.getElementsByClassName("signupModal")[0].style.display = "none";
      document.getElementById("notSignedIn").style.display = "none"
      document.getElementById("signedIn").style.display = "block"
      document.getElementById("profileModal").style.display = "none"
  }
}