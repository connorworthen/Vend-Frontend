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
        console.log(data)
      })
  }

  static profileHandler() {
    profileBtn.addEventListener('click', () => {
      document.getElementById("profileModal").style.display = "block"
      Profile.grabUserData()
    })
  }


}