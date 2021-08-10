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
}