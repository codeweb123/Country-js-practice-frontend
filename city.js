class City{

    static all = []
  
    constructor({id, name, capital, country_id}){
      this.id = id
      this.name = name
      this.capital = capital
      this.countryId = country_id
  
      City.all.push(this)
    }
  
    renderLI(){
      return `<li>${this.capital ? this.name + " - Capital" : this.name}</li>`
    }
  }