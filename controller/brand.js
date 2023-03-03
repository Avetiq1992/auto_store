const Brand = require('../models/brand-car')
const brands = require('../data/brands.json')
const models = require('../data/models.json')


async function getBrand(req, res) {
    const brands = await Brand.getAll()
    res.render('brand', {
        title: 'Car',
        isBrand: true,
        brands,
        models
    })
}
async function modelsChange(req, res) {
    const id = req.params.id
    const models = getBrandsById(id)
    res.json(models)
    res.render('add', {
        brands: brands,
        models: models,
        title: 'Add car',
        isAdd: true
    })
    
   
}

function getBrandsById(id) {

    return models.filter(item => item.brandId === id)

}

async function getAddCar(req, res) {
    // console.log('brands', brands)
    console.log(models);
    res.render('add', {
        brands: brands,
        models: models,
        title: 'Add car',
        isAdd: true
    })
}


async function createCar(req, res) {

    const make = req.body.make
    const model = req.body.model
    // check model exist
    const year = req.body.year
    const price = req.body.price

    try {
        const brandCar = new Brand(make, model, year, price)
        await brandCar.save()
    } catch (e) {
        console.error(e)
    }

    res.redirect('/brand')
}

module.exports = { getBrand, getAddCar, createCar,modelsChange }
