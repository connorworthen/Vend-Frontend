const readUrl = "http://localhost:3000/users";

class Profile {
  // constructor(first, last, email, phone, address, password, id) {
  //   this.first = first
  //   this.last = last
  //   this.email = email
  //   this.phone = phone
  //   this.address = address
  //   this.password = password
  //   this.id = id
  // }

  static grabUserData() {
    let id = localStorage.getItem("id")

    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let userData = data
        Profile.displayForm(userData)
        // document.getElementById("firstUpdate").innerHTML = `${data.first}`
      })
  }

  static profileHandler() {
    profileBtn.addEventListener('click', () => {
      document.getElementById("profileModal").style.display = "block"
      Profile.grabUserData()
    })
  }

  static displayForm(userData) {
    document.getElementById("profileBox").innerHTML = `
        <form id="profileForm">
                <div class="closeForm">&times;</div>
                  <h2 class="formTitle">Update Profile</h2>                               
                  <input type="text" id="firstUpdate" value=${userData.first} />

                  <input type="text" id="last" />

                  <input type="text" id="email" placeholder="Email *" />

                  <input type="text" id="phone" placeholder="Phone Number *" />

                  <input type="text" id="address" placeholder="Address *" />

                  <input type="password" id="password" placeholder="Password *" />

                  <input type="submit" id="form-box" value="Create Account" />
              </form>
      `
  }
}