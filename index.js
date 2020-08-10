CityAdapter.fetchAndMakeCities()
  .then(CountryAdapter.fetchAndMakeCountries)
  .then(Country.renderAllCountries)