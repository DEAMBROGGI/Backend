const Router = require("express").Router()

const citiesControllers = require("../controllers/citiesControllers")
const {getAllCities, getOneCity,removeCity, addOneCity, addMultiplesCities, modifyCity, removeManyCities} = citiesControllers

Router.route("/cities")
.get(getAllCities)
.post((req, res)=>{Array.isArray(req.body.data) ?addMultiplesCities(req, res):addOneCity(req, res)})
.delete(removeManyCities)

Router.route("/cities/:id")
.get(getOneCity)
.delete(removeCity)
.put(modifyCity)

// Router.route("/multiplecities")
// .post(addMultiplesCities)


module.exports = Router;