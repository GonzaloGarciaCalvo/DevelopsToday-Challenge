import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import { CountryControllers } from './controllers.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const controllers = new CountryControllers()
app.get('/', controllers.getCountries)

app.get('/country', controllers.getCountry /* async (req, res) => {
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
} */)

const port = process.env.PORT || 8080
app.listen(port, () =>
  console.log(`server running in http://localhost:${port}`)
)
