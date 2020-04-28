var mongoose = require('mongoose')
var Schema = mongoose.Schema
var categorySchema = new Schema({
    nome: String
})
module.exports = mongoose.model('Categoria', categorySchema)