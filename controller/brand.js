const Brand = require('../models/brand-car')

async function getBrand(req,res){
    const brands = await Brand.getAll()
    res.render('brand', {
        title: 'Car',
        isBrand: true,
        brands
      })
}



async function getAddCar(req,res){
    res.render('add', {
        title: 'Add car',
        isAdd: true
    })
}


async function createCar(req,res){

    const make= req.body.make
    const model=req.body.model
    // check model exist
    const year=req.body.year
    const price= req.body.price

    try{
        const brandCar = new Brand(make,model,year,price)
        await brandCar.save()    
    }catch(e){
        console.error(e)
    }

    res.redirect('/brand')
}

module.exports = {getBrand,getAddCar, createCar}