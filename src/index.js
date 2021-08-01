document.addEventListener("DOMContentLoaded", () => {
  fetchUsers()
})

const BASE_URL = "http://localhost:3000"

function fetchUsers() {
  fetch(`${BASE_URL}/users`)
  .then(resp => resp.json())
  .then(users => {
      for (const user of users) {
        let u = new User(user.id, user.username, user.email, user.image)
        u.renderUser()
      }
  })
}

function createUser() {

}
