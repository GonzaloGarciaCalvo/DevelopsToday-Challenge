import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import { CountryControllers } from './controllers.js'
import cors from 'cors'
import { countriesRouter } from './routes.js'

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', countriesRouter)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`server running in http://localhost:${port}`)
)
