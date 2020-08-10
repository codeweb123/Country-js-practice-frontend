class Country{

    static all = []
    static countryContainer = document.getElementById('country-container')
  
    constructor({id, name, population, bird}){
      this.id = id
      this.name = name
      this.population = population
      this.bird = bird
  
      this.main = document.createElement('div')
      this.main.id = `country-${this.id}`
      this.details = document.createElement('div')
      this.details.id = `country-${this.id}-details`
      this.cities = document.createElement('div')
      this.cities.id = `country-${this.id}-cities`
      this.editButton = document.createElement('button')
      this.editButton.innerText = "Edit Country"
      let space = document.createElement('p')
      space.innerText = "=================="
      this.main.append(this.details, this.cities, this.editButton, space)
  
      this.form = document.createElement('form')
  
      this.editButton.addEventListener('click', this.renderEditCountryForm)
      this.form.addEventListener('submit', this.submitEditCountryFrom)
      Country.all.push(this)
    }
  
    renderDetails(){
      this.details.innerHTML = `
        <p>Name: <span>${this.name}</span></p>
        <p>Population: <span>${this.population}</span></p>
        <p>National Bird: <span>${this.bird}</span></p>
      `
    }
  
    allCities(){
      return City.all.filter(city => city.countryId == this.id)
    }
  
    renderCities(){
      this.cities.innerHTML = this.allCities().map(city => city.renderLI()).join("")
    }
  
    renderEditCountryForm = () => {
      this.editButton.disabled = true
      console.log(this);
      this.details.innerHTML = ''
      this.details.appendChild(this.form)
      this.form.innerHTML = `
        <label>Name:</label>
        <input type="text" name="name" value="${this.name}">
        <br/>
        <label>Population:</label>
        <input type="text" name="population" value="${this.population}">
        <br/>
        <label>National Bird:</label>
        <input type="text" name="bird" value="${this.bird}">
        <br/>
        <input id=edit-country type="submit" value="Submit">
      `
    }
  
    submitEditCountryFrom = (e) => {
      e.preventDefault()
      this.form.querySelectorAll('input').forEach(function(input){
        input.name !== "submit" && (this[`${input.name}`] = input.value)
      }, this)
      this.editButton.disabled = false
      this.renderDetails()
      CountryAdapter.editCountry(this)
    }
  
    static renderAllCountries(){
      Country.all.forEach((country) => {
        country.renderDetails()
        country.renderCities()
        Country.countryContainer.appendChild(country.main)
      })
    }
  }
  