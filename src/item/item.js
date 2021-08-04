class Item {
  // remember objects
  static all = []
  static itemsContainer = document.getElementById("items-container")
  static itemForm = document.getElementById("form-container")
  constructor({id, image, name, price, available, description, user_id}) {
    this.id = id
    this.image = image
    this.name = name
    this.price = price
    this.available = available
    this.description = description
    this.user_id = user_id

    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `item-${this.id}`

    Item.all.push(this)
  }

  itemHTML() {
    this.element.innerHTML += `
      <div>
        <img src=${this.image.url} alt="test image">
        <h3>${this.name}</h3>
        <p>${this.price} - ${this.description}</p>
      </div>
    `
    return this.element
  }

  pushToDOM() {
    Item.itemsContainer.appendChild(this.itemHTML())
  }

  static renderForm() {
    Item.itemForm.innerHTML += `
      <form>
        Name: <input type="text" id="name">
        Price: <input type="text" id="price">
        Description: <input type="text" id="description">
        Image: <input type="file" name="image">
        <input type="submit" id="submit">
      </form>
    `
  }
}