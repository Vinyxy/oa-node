const Categoria = require("../app/models/category");
const repository = require("../repositories/category-repository");

exports.post = async(req, res) => {
    try {
        await repository.post({
            nome: req.body.nome,
        });
        res.status(201).send({
            message: "Categoria inserida com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir uma Categoria",
            erro: error
        });
    }
};

exports.getAll = async(req, res) => {
    try {
        const data = await repository.get();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        })
    }
};

exports.getById = async(req, res) => {
    try {
        const id = req.params.productId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        if (data == null) {
            res.status(400).json({
                message: "Categoria não encontrado! Verifique se o ID é válido!"
            });
        } else {
            res.status(500).send({
                message: "Falha na requisição",
                erro: error
            });
        }
    }
};

exports.put = async(req, res) => {
    try {
        const id = req.params.categoryId;
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Categoria atualizada com sucesso",
            dados: data
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

//DELETE - controller
exports.delete = async(req, res) => {
    try {
        const id = req.params.productId;
        await repository.delete(id);
        res.status(200).send({
            message: "Categoria removida com sucesso",
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
};