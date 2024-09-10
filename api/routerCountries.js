import { router } from 'express'

router.get('/', (req, res) => {
  res.send('Hola Mundo')
})
/* export const createCountriesRouter => () {
  const counterRouter = router()
} */
