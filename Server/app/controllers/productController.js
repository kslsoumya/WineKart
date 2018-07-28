
const mongoose = require('mongoose')
const shortId = require('shortid')
const check = require('../libs/checkLib')
const time = require('./../libs/timeLib');

const prodModel = mongoose.model('Wine')
const logger = require('../libs/loggerLib')
const response = require('../libs/responseLib')



// Get Products function--

let getAllProducts = (req, res) => {
    console.log('Inside get all products---')
    prodModel.find().lean().exec((err, prodDetails)=>{
        if (err) {
            logger.error('Failed To Get Products', 'Wine Controller:Get All Products()', 10)
             let apiResponse = response.generate(true, 'Failed to Get All Products', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(prodDetails)) {
            logger.info('No Products Found', 'productController:Get All Products()', 4)
            let  apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)

        } else {
            logger.info('Products retrieved', 'productController:Get All Products()', 4)
            delete prodDetails._id;
            delete prodDetails.__v;
            let  apiResponse = response.generate(false, 'Products retrieved', 200, prodDetails)
            res.send(apiResponse)
        }
    })
}
// End of getAllProducts function


// Get Single Function ---

let getWinesByCountry = (req, res) => {
    prodModel.find({ 'country' :req.params.countryName }, (err, retrievedDetails) => {
        if (err) {
            logger.error('Failed to get Wine details', 'productController:getWinesByCountry()', 10)
            let apiResponse = response.generate(true, 'Failed to get Wine details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedDetails)) {
            logger.info('No Products Found', 'productController:getWinesByCountry()', 10)
            let apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedDetails._id;
            delete retrievedDetails.__v;
            logger.info(' Products Found', 'productController:getWinesByCountry()', 10)
            let apiResponse = response.generate(false, 'Products retrieved', 200, retrievedDetails)
            res.send(apiResponse)
        }
    })
}

// End of Get Single User Function---

// Get All Active Products Function--

let getWinesByRegion1 = (req, res) => {
    prodModel.find({ 'region_1' :req.params.regionName }, (err, retrievedDetails) => {
        if (err) {
            logger.error('Failed to get Product details', 'productController:getWinesByRegion1()', 10)
            let apiResponse = response.generate(true, 'Failed to get Wine details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedDetails)) {
            logger.info('No Products Found', 'productController:getWinesByRegion1()', 10)
            let apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedDetails._id;
            delete retrievedDetails.__v;
            logger.info(' Products Found', 'productController:getWinesByRegion1()', 10)
            let apiResponse = response.generate(false, 'Products retrieved', 200, retrievedDetails)
            res.send(apiResponse)
        }
    })
}
// End of get Active Products function

let getWinesByRegion2 = (req, res) => {
    prodModel.find({ 'region_2' :req.params.regionName }, (err, retrievedDetails) => {
        if (err) {
            logger.error('Failed to get Product details', 'productController:getWinesByRegion2()', 10)
            let apiResponse = response.generate(true, 'Failed to get Product details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedDetails)) {
            logger.info('No Products Found', 'productController:getWinesByRegion2()', 10)
            let apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedDetails._id;
            delete retrievedDetails.__v;
            logger.info(' Products Found', 'productController:getWinesByRegion2()', 10)
            let apiResponse = response.generate(false, 'Products retrieved', 200, retrievedDetails)
            res.send(apiResponse)
        }
    })
}

let getWinesByProvince = (req, res) => {
    prodModel.find({ 'province' :req.params.provinceName }, (err, retrievedDetails) => {
        if (err) {
            logger.error('Failed to get Product details', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(true, 'Failed to get Wine details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedDetails)) {
            logger.info('No Products Found', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedDetails._id;
            delete retrievedDetails.__v;
            logger.info(' Products Found', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(false, 'Products retrieved', 200, retrievedDetails)
            res.send(apiResponse)
        }
    })
}

let getWinesByVariety = (req, res) => {
    prodModel.find({ 'variety' :req.params.varietyName }, (err, retrievedDetails) => {
        if (err) {
            logger.error('Failed to get Product details', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(true, 'Failed to get Product details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedDetails)) {
            logger.info('No Products Found', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(false, 'No Products Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedDetails._id;
            delete retrievedDetails.__v;
            logger.info(' Products Found', 'productController:getWinesByProvince()', 10)
            let apiResponse = response.generate(false, 'Products retrieved', 200, retrievedDetails)
            res.send(apiResponse)
        }
    })
}






module.exports = {
    getAllProducts: getAllProducts,
    getWinesByCountry:getWinesByCountry,
    getWinesByProvince: getWinesByProvince,
    getWinesByRegion1 : getWinesByRegion1,
    getWinesByRegion2 : getWinesByRegion2,
    getWinesByVariety : getWinesByVariety
}