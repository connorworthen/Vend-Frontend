
class ItemService {

  constructor(endpoint) {
    this.endpoint = endpoint
  }

  // Read & Index Items

  fetchItems() {
    fetch(`${this.endpoint}/items`)
    .then(resp => resp.json())
    .then(items => {
      for (const item of items) {
        let i = new Item(item)
        i.pushToDOM()
      }
    })
  }

  createItem() {
    const formElem = document.getElementById("myForm")

    const formData = new FormData(formElem)
    
    formData.append('user_id', 2)

    const configObj = {
      method: 'POST',
      body: formData
    }

    fetch(`${this.endpoint}/items`, configObj)
    .then(resp => resp.json())
    .then(item => {
      console.log(item)
    })
  }
}