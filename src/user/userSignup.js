const signupUrl = "http://localhost:3000/users";

class Signup {
  static signupHandler() {
    signupButton.addEventListener('click', () => {
      document.getElementsByClassName("signupModal")[0].style.display = "block"
    })
    document.querySelector(".closeForm").onclick = () => {
      document.getElementsByClassName("signupModal")[0].style.display = "none";
    }
    Signup.postSignupForm()
  }

  static postSignupForm() {
    signupBox.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        const formElem = document.getElementById("signupBox")

        const formData = new FormData(formElem)

        let configObj = {
          method: "POST",
          body: formData
        }
      
        const response = await fetch(signupUrl, configObj)
        const payload = await response.json()
        localStorage.setItem("token", payload.jwt)
        localStorage.setItem("id", payload.user.id)
        Signup.signedInView()
      } catch (err) {
        console.log(err)
        alert("Error. Set up Alert Messages")
      }
    })
  }

  static signedInView() {
    document.getElementsByClassName("signupModal")[0].style.display = "none";
    document.getElementById("notSignedIn").style.display = "none"
    document.getElementById("signedIn").style.display = "block"
    document.getElementById("profileModal").style.display = "none"
  }
}

