class Store {
  constructor(id, company_name, company_email, description) {
    this.id = id,
    this.company_name = company_name,
    this.company_email = company_email,
    this.description = description
  }

  renderStore() {
    let storesDiv = document.getElementById("stores-container")

    storesDiv.innerHTML += 
    `
    <ul>
    <h3>Company Name: ${this.company_name}</h3>
    <li>Company Email: ${this.company_email} - ${this.description}</li>
    </ul>
    `
  }
}