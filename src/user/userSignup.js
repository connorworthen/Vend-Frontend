const signupUrl = "http://localhost:3000/users";

class Signup {
  signupHandler() {
    signupbutton.addEventListener('click', () => {
      console.log("hello")
    })
  }

  postSignupForm() {
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
          console.log(payload)
          localStorage.setItem("token", payload.jwt)
          localStorage.setItem("id", payload.user.id)
        signedInView()
      } catch (err) {
        console.log(err)
        alert("Error. Set up Alert Messages")
      }
    })
  }

  signedInView() {
    document.getElementsByClassName("signupModal")[0].style.display = "none";
    document.getElementById("notSignedIn").style.display = "none"
    document.getElementById("signedIn").style.display = "block"
    document.getElementById("profileModal").style.display = "none"
  }
}

