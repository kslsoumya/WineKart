const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

const auth = require('../middlewares/Auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // defining routes.
    // params: firstName, lastName, email, mobile, password
    app.post(`${baseUrl}/signup`, userController.signUpUser);

    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup User SignUp.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} lastName lastName of the user. (body params) (required)
     * @apiParam {string} mobile mobile of the user. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "User Created Successfully",
            "status": 200,
            "data": {
                        "userId": "DSfoJbEk8",
                        "firstName": "xyz",
                        "lastName": "abccba",
                        "email": "abc@gmail.com",
                        "status": "I am great",
                        "mobile": 98078656,
                        "createdOn": "2018-07-24T13:32:17.000Z"
                    }
        }
    */

    // bodyParams: email, password.
    app.post(`${baseUrl}/login`, userController.loginUser);

    
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login User Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "wqerwrwe",
                "userDetails": {
                "userId": "AAwW5AL4y",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "email": "someone@mail.com",
                "mobile": 2234435524,
                "status":"Makes Impossible Possible"
            }
        }
    */

    // auth token params: userId.

    app.put(`${baseUrl}/forgotPwd`, userController.resetPwd);

      /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/forgotPwd  Password Reset
     *
     * @apiParam {string} email email of the user. (body params) (required)
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





    app.post(`${baseUrl}/logout`, userController.logoutUser);

    
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout to Logout.
     *
     * 
     * @apiParam {string} authToken authToken of the user.(params or bodyParams or queryParams)(required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": {
                        "n": 0,
                        "ok": 1
                    }
        }
    */


}
