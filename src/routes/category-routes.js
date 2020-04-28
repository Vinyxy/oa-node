const express = require('express')
var router = express.Router(); //interceptação das rotas
const categoryController = require('../controllers/category-controllers');

//POST
router.post("/", categoryController.post);

//GET ALL
router.get("/", categoryController.getAll);

//findById
router.get("/:categoryId", categoryController.getById);

//PUT
router.put("/:categoryId", categoryController.put);

router.delete("/:categoryId", categoryController.delete);

module.exports = router;