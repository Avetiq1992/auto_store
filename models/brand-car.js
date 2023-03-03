const uuid = require('uuid').v4
const fs = require('fs')
const path = require('path');
const { stringify } = require('querystring');
const Car = require('../data/brands.json')

  

class brand {
    constructor(make, model, year, price) {

        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.id = uuid()


    }
   

    toJSON() {
        return {
            make: this.make,
            model: this.model,
            year: this.year,
            price: this.price,
            id: this.id
        }
    }



    async save() {
        const brands = await brand.getAll()
        brands.push(this.toJSON())
        const brandData = path.join(__dirname, '..', 'data', 'brandC.json')
        return new Promise((resolve, reject) => {
            fs.writeFile(brandData, JSON.stringify(brands), (err) => {
                if (err) {
                    reject(err)
                }
                resolve()

            }
            )
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'brandC.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )

        })

    }

}


module.exports = brand