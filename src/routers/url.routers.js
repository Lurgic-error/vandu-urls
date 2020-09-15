const router = require('express').Router();

const urlController = require('../controllers/url.controllers.js')

router.get("/", urlController.getAll)

router.get("/:code", urlController.view)

router.post("/create-url", urlController.create)

router.delete("/:code", urlController.delete)

module.exports = router

