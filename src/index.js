document.addEventListener("DOMContentLoaded", () => {
  // Signin.signedInCheck();
  // Logout.logoutMethod();
  // Signup.signupHandler();
  // Signin.signinHandler();
  // Profile.profileHandler()
  // Store.clickStore()
  fetchStores()
})

const BASE_URL = "http://localhost:3000"

function fetchStores() {
  fetch(`${BASE_URL}/stores`)
  .then(resp => resp.json())
  .then(stores => {

    for (const store of stores) {
      let s = new Store(store.id, store.company_name, store.company_email, store.description)
      s.fetchStores()
    }
  })
}
