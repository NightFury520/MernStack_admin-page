const express = require ('express')
const pubController = require("../controller/pubController")

const mainRouter = express.Router()

mainRouter.route('/publication')
  .get(pubController.getPublications)
  .post(pubController.insertPublication)

mainRouter.route('/publication/:pubid')
  .delete(pubController.deletePublication)

module.exports = mainRouter