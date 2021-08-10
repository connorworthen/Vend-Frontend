// any global variables
const BASE_URL = "http://localhost:3000"
const itemService = new ItemService(BASE_URL)
Item.itemForm.addEventListener('submit', handleSubmit)
itemService.fetchItems()
Item.renderForm()

function handleSubmit() {
  event.preventDefault()
  itemService.createItem()
  event.target.reset()
  // debugger
}



// document.addEventListener("DOMContentLoaded", () => {
  
// })



// function fetchUsers() {
//   fetch(`${BASE_URL}/users`)
//   .then(resp => resp.json())
//   .then(users => {
//       for (const user of users) {
//         let u = new User(user.id, user.username, user.email, user.image)
//         u.renderUser()
//       }
//   })
// }

// function submitSignup() {
//   signupBox.addEventListener('submit', async (e) => {
//       e.preventDefault();
//       try {
//         const formElem = document.getElementById("signupBox")

//         const formData = new FormData(formElem)

//         let configObj = {
//           method: "POST",
//           body: formData
//         }
      
//         const response = await fetch(`${BASE_URL}/users`, configObj)
//         const payload = await response.json()
//           console.log(payload)

//           localStorage.setItem("token", payload.jwt)
//           localStorage.setItem("id", payload.user.id)
//       } catch (err) {
//         console.log(err)
//         alert("Error. Set up Alert Messages")
//       }
//     })
// }
