class CountryAdapter{
    static baseURL = "http://localhost:3000/countries"
  
    static fetchAndMakeCountries(){
      return fetch(CountryAdapter.baseURL)
        .then((obj) => obj.json())
        .then(function(countriesArray){
          return countriesArray.forEach(function(country){
            return new Country(country)
          })
        })
    }
  
    static editCountry({id, name, population, bird}){
      return fetch(`${CountryAdapter.baseURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          country: {
            name,
            population,
            bird
          }
        })
      })
    }
  }