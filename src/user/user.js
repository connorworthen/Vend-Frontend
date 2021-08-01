class User {
  constructor(id, username, email, image, password) {
    this.id = id,
    this.username = username,
    this.email = email,
    this.image = image,
    this.password = password
  }

  renderUser() {
    let usersDiv = document.getElementById("users-container")

    usersDiv.innerHTML += 
    `
    <ul>
      <li>${this.username}</li>
      <li>${this.email}</li>
      <img src=${this.image.url} alt="error"/>
    </ul>
    `
  }
}