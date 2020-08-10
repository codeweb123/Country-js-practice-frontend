class CityAdapter{

    static baseURL = "http://localhost:3000/cities"
  
    static fetchAndMakeCities(){
      return fetch(CityAdapter.baseURL)
        .then(res => res.json())
        .then(function(cityArray){
          return cityArray.forEach(function(city) {
            return new City(city)
          })
        })
    }
  }