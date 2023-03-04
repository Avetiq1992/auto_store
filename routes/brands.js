const{Router} = require('express')
const {getBrand,getAddCar,createCar} = require('../controller/brandController')
const router = Router()

router.get('/', getBrand)
router.get('/add',getAddCar)
router.post('/add', createCar)


module.exports = router
