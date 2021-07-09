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
    createStoreForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      try {
        const formElem = document.getElementById("createStoreForm")

        const formData = new FormData(formElem)

        const obj = {}
        formData.forEach((value, key) => obj[key] = value)
        const data = JSON.stringify({store: obj})
        debugger
        let configObj = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: data 
        };

        const response = await fetch(createStoreUrl, configObj)
        const payload = await response.json()
        console.log(payload)
      } catch (err) {
        console.log(err)
        alert("Error. Set up Alert Messages")
      }
    })
  }
}