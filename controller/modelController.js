const models = require('../data/models.json')


function getModelsByBrandId(req, res) {
    const id = req.params.id
    const filterModels= models.filter(item => item.brandId === id)
    res.json(filterModels)
}

function getModels(req, res) {
    res.json(models)
}


module.exports = { getModelsByBrandId ,getModels}
