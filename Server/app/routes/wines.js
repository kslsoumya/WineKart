const express = require('express');
const router = express.Router();
const productController = require("./../../app/controllers/productController");
const appConfig = require("./../../config/appConfig")

const auth = require('../middlewares/Auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/wines`;

    //  defining routes.
    app.get(`${baseUrl}/get/all`,auth.isAuthenticated, productController.getAllProducts);

     /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/all Get Wines
      *
      * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)


      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Products retrieved",
             "status": 200,
             "data": {
                       [country:"US"
                        description:"This tremendous 100% varietal 
                                    wine hails from Oakville and was aged over 
                                    three years in oak."
                        designation:"Martha's Vineyard"
                        points:96
                        price:235
                        province:"California"
                        region_1:"Napa Valley"
                        region_2:"Napa"
                        variety:"Cabernet Sauvignon"
                        winery:"Heitz"
                        _id:"5b5c570aebef27f08aa80b92"  
                       ]
                        
                     }
         }
    */

    //  Params: countryName.
    app.get(`${baseUrl}/get/country/:countryName`,auth.isAuthenticated, productController.getWinesByCountry);

     /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/country/:countryName  Country Filter
      *
      * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)


      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Products retrieved",
             "status": 200,
             "data": {
                       [country:"US"
                        description:"This tremendous 100% varietal 
                                    wine hails from Oakville and was aged over 
                                    three years in oak."
                        designation:"Martha's Vineyard"
                        points:96
                        price:235
                        province:"California"
                        region_1:"Napa Valley"
                        region_2:"Napa"
                        variety:"Cabernet Sauvignon"
                        winery:"Heitz"
                        _id:"5b5c570aebef27f08aa80b92"  
                       ]
                        
                     }
         }
    */

    //   params : provinceName.

     app.get(`${baseUrl}/get/province/:provinceName`,auth.isAuthenticated,productController.getWinesByProvince);

       /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/province/:provinceName  Province Filter
      * 
      * 
      *  @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)

      *
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Password Reset Successful",
             "status": 200,
              "data": {
                         "userId": "AAwW5AL4y",
                         "firstName": "vbbbbbb",
                         "lastName": "aaaaaa",
                         "email": "xxxxxx@gmail.com",
                         "status": "Makes Impossible Possible!",
                         "mobile": 1234234325,
                         "createdOn": "2018-07-23T04:12:35.000Z"
                     }
           }
  */





app.get(`${baseUrl}/get/region_1/:regionName`,auth.isAuthenticated, productController.getWinesByRegion1);


 /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/region_1/:regionName  Region1 Filter
      *
      * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)


      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Products retrieved",
             "status": 200,
             "data": {
                       [country:"US"
                        description:"This tremendous 100% varietal 
                                    wine hails from Oakville and was aged over 
                                    three years in oak."
                        designation:"Martha's Vineyard"
                        points:96
                        price:235
                        province:"California"
                        region_1:"Napa Valley"
                        region_2:"Napa"
                        variety:"Cabernet Sauvignon"
                        winery:"Heitz"
                        _id:"5b5c570aebef27f08aa80b92"  
                       ]
                        
                     }
         }
    */


app.get(`${baseUrl}/get/region_2/:regionName`,auth.isAuthenticated, productController.getWinesByRegion2);

 /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/region_2/:regionName  Region2 Filter
      *
      * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)


      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Products retrieved",
             "status": 200,
             "data": {
                       [country:"US"
                        description:"This tremendous 100% varietal 
                                    wine hails from Oakville and was aged over 
                                    three years in oak."
                        designation:"Martha's Vineyard"
                        points:96
                        price:235
                        province:"California"
                        region_1:"Napa Valley"
                        region_2:"Napa"
                        variety:"Cabernet Sauvignon"
                        winery:"Heitz"
                        _id:"5b5c570aebef27f08aa80b92"  
                       ]
                        
                     }
         }
    */






app.get(`${baseUrl}/get/variety/:varietyName`,auth.isAuthenticated, productController.getWinesByVariety);


     /**
      * @apiGroup Wines
      * @apiVersion  1.0.0
      * @api {get} /api/v1/wines/get/variety/:varietyName  Variety Filter
      *
      * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)


      * 
      * @apiSuccess {object} myResponse shows error status, message, http status code, result.
      * 
      * @apiSuccessExample {object} Success-Response:
          {
             "error": false,
             "message": "Products retrieved",
             "status": 200,
             "data": {
                       [country:"US"
                        description:"This tremendous 100% varietal 
                                    wine hails from Oakville and was aged over 
                                    three years in oak."
                        designation:"Martha's Vineyard"
                        points:96
                        price:235
                        province:"California"
                        region_1:"Napa Valley"
                        region_2:"Napa"
                        variety:"Cabernet Sauvignon"
                        winery:"Heitz"
                        _id:"5b5c570aebef27f08aa80b92"  
                       ]
                        
                     }
         }
    */





}
