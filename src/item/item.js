class Item {
  // remember objects
  static all = []
  static itemsContainer = document.getElementById("items-container")
  static itemForm = document.getElementById("form-container")
  constructor({id, image, name, price, description, user_id}) {
    this.id = id
    this.image = image
    this.name = name
    this.price = price
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
      <form id="myForm" name="myForm">
        <div>
          <label for="name">Enter Item Name:</label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <label for="price">Enter Price:</label>
          <input type="text" id="price" name="price">
        </div>
        <div>
          <label for="description">Description:</label>
          <input type="text" id="description" name="description">
        </div>
        <div>
          <label for="image">Upload file:</label>
          <input type="file" id="image" name="image">
        </div>
          <input type="submit" value="Submit">
      </form>
    `
  }
}