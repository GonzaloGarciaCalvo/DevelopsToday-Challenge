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
/* app.use(cors(
  {origin:['http://localhost:3000', 'https://develops-today-challenge.vercel.app/']}
)) */

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000, https://develops-today-challenge.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}); */

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://develops-today-challenge.vercel.app'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', countriesRouter)

const port = process.env.PORT || 8080

app.listen(port, () =>
  console.log(`server running in http://localhost:${port}`)
)
