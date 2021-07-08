const signinUrl = "http://localhost:3000/login";
const autoUrl = "http://localhost:3000/auto_login"

class Signin {
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
    Signin.postSigninForm()
  }

  static postSigninForm() {
    signinBox.addEventListener('submit', async (e) => {
      e.preventDefault()

      try {
        const formElem = document.getElementById("signinBox")

        const formData = new FormData(formElem)

        const obj = {}
        formData.forEach((value, key) => obj[key] = value)
        const data = JSON.stringify({user: obj})

        let configObj = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: data 
        };

        const response = await fetch(signinUrl, configObj)
        const payload = await response.json()
        localStorage.setItem("token", payload.jwt)
        localStorage.setItem("id", payload.user.id)
        Signin.signedInProfile()
      } catch (err) {
        console.log(err)
        alert("Error. Set up Alert Messages")
      }
    })
  }

  static signedInProfile() {
    document.getElementsByClassName("signinModal")[0].style.display = "none";
    document.getElementById("notSignedIn").style.display = "none"
    document.getElementById("signedIn").style.display = "block"
    document.getElementById("profileModal").style.display = "none"
  }
}
