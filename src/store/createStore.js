const createStoreUrl = "http://localhost:3000/stores"

class Store {

  static clickStore () {
    storeButton.addEventListener('click', () => {
      document.getElementById("createStore").style.display = "block"
      document.getElementById("storeButton").style.display = "none"
    })
    Store.postClickStore()
  }

  static postClickStore () {
    createStoreForm.addEventListener('submit', (e) => {
      console.log("test")
    })
  }
}