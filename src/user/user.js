class User {

  static all = []
  static usersContainer = document.getElementById("users-container")
  static userForm = document.getElementById("user-form-container")
  constructor(id,  image, username, email, password) {
    this.id = id,
    this.image = image,
    this.username = username,
    this.email = email,
    this.password = password

    this.element = document.createElement('input')
    this.element.dataset.id = this.id
    this.element.id = `user-${this.id}`

    User.all.push(this)
  }

  userHTML() {
    this.element.innerHTML += `
      <div>
        <img src=${this.image.url} alt="test image">
        <h3>${this.username}</h3>
      </div>
    `
    return this.element
  }

  pushToDOM() {{
    User.usersContainer.appendChild(this.itemHTML())
  }}

  static renderUserForm() {
    User.userForm.innerHTML += `
      <form>
        <input type="text" id="username" placeholder="Username*">
        <input type="text" id="email" placeholder="Email*">
        <input type="text" id="password" placeholder="Password*">
        <input type="file" id="image" name="image">

        <input type="submit" value="Submit">
      </form>
    `
  }
}