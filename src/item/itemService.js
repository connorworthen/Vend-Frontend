
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
}