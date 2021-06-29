const readUrl = "http://localhost:3000/users";

class Profile {
  constructor(first, last, email, phone, address, password, id) {
    this.first = first
    this.last = last
    this.email = email
    this.phone = phone
    this.address = address
    this.password = password
    this.id = id
  }

  static grabUserData() {
    let id = localStorage.getItem("id")

    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let userData = data
        Profile.displayForm(userData)
      })
  }

  static profileHandler() {
    profileBtn.addEventListener('click', () => {
      document.getElementsByClassName("profileModal")[0].style.display = "block"
      Profile.grabUserData()
    })
  }

  static displayForm(userData) {
    document.getElementsByClassName("profileBox")[0].innerHTML = `
      <form id="profileForm">
        <div class="closeProfile">&times;</div>
        <h2>Update Profile</h2> 

        <input type="text" id="first" value=${userData.first} />

        <input type="text" id="last" value=${userData.last} />

        <input type="text" id="email" value=${userData.email} />

        <input type="text" id="phone" value=${userData.phone} />

        <input type="text" id="address" value=${userData.address} />

        <input type="password" id="password" value=${userData.password} />

        <input type="submit" id="patchBox" value="Update Account" />
      </form>
      `
      document.querySelector(".closeProfile").onclick = () => {
        document.getElementsByClassName("profileModal")[0].style.display = "none";
      }
      Profile.submitHandler();
  }

  static submitHandler() {
    document.getElementById("profileForm").onsubmit = (e) => {
      e.preventDefault()
      Profile.patchUpdateForm(
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

  static patchUpdateForm(first, last, email, phone, address, password) {
    let id = localStorage.getItem("id")

    let configObj = {
      method: "PATCH",
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
    fetch(`http://localhost:3000/users/${id}`, configObj)
      .then((response) => response.json())
      .then((data) => {
        console.log("hello", data)
      })
  }
}