const BrandController = require('../models/brand-car')
const brands = require('../data/brands.json')
const models = require('../data/models.json')


async function getBrand(req, res) {
    const brands = await BrandController.getAll()
    res.render('brand', {
        title: 'Car',
        isBrand: true,
        brands,
        models
    })
}


function getModelsByBrandId(req, res) {
    const id = req.params.id
    const filterModels= models.filter(item => item.brandId === id)
    res.json(filterModels)
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
        const brandCar = new BrandController(make, model, year, price)
        await brandCar.save()
    } catch (e) {
        console.error(e)
    }

    res.redirect('/brand')
}

module.exports = { getBrand, getAddCar, createCar,getModelsByBrandId }
