const Cateogry = require('../app/models/category');

exports.get = async() => {
    const category = await Categoria.find();

    const total = await Categoria.count();

    return { category, total };
}

exports.getById = async(id) => {
    const res = await Categoria.findById(id);
    return res;
}

exports.post = async(data) => {
    const category = new Categoria(data);
    await category.save();
}

exports.put = async(id, data) => {
    await Cateogry.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
        }
    });
}

exports.delete = async(id) => {
    await Categoria.findOneAndRemove(id);
}