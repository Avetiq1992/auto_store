
const{Router} = require('express')
const {getModelsByBrandId,getModels} = require('../controller/modelController')
const router = Router()

router.get('/', getModels)
router.get('/:id', getModelsByBrandId)


module.exports = router
