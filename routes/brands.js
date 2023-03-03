const{Router} = require('express')
const {getBrand,getAddCar,createCar,modelsChange} = require('../controller/brand')
const router = Router()

router.get('/', getBrand)
router.get('/add',getAddCar)
router.get('/add',modelsChange)
router.post('/add', createCar)


module.exports = router