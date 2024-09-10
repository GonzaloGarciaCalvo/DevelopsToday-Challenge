import { Router } from 'express'
import { CountryControllers } from './controllers.js'

export const countriesRouter = Router()

const controllers = new CountryControllers()

countriesRouter.get('/', controllers.getCountries)

countriesRouter.get('/country', controllers.getCountry) 

