/* export const countriesController = async (req, res) => {
  const data = await fetch('https://date.nager.at/api/v3/AvailableCountries')
  const json = await data.json()
  res.json(json);
} */

export class CountryControllers {
  async getCountries(req, res) {
    const data = await fetch(`${process.env.COUTRIES_URL}`)
    const json = await data.json()
    res.json(json)
  }
  async getCountry(req, res) {
    const { code, name } = req.query
    let result = {}
    try {
      const bordersRow = await fetch(`${process.env.BORDERS_BASE_URL}${code}`)
      const borders = await bordersRow.json()
      result = {
        ...borders
      }
    } catch (error) {
      console.log(error)
    }
  
    try {
      const populationRow = await fetch( process.env.COUNTRIES_POPULATION_URL,
        {
          method: 'POST',
          body: JSON.stringify({ country: name }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const populationData = await populationRow.json()
      const population = populationData.data.populationCounts
  
      result = {
        ...result,
        population
      }
    } catch (error) {
      console.log(error)
    }
  
    try {
      const flagRow = await fetch(
        process.env.COUNTRY_FLAG_URL,
        {
          method: 'POST',
          body: JSON.stringify({ country: name }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const flagData = await flagRow.json()
      const flag = flagData.data.flag
  
      result = {
        ...result,
        flag
      }
    } catch (error) {
      console.log(error)
    }
    console.log('result: ', result.flag)
    res.json(result)
  }
}
