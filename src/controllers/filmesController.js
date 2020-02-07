const Filmes = require('../model/filmes')

//GET
exports.getFilmes = (req, res) => {
    Filmes.find(function (err, filmes) {
        if (err) res.status(500).send(err)
        return res.status(200).send(filmes)
    })
}

//POST
exports.postFilme = (req, res) => {
    let filme = new Filmes(req.body)
    filme.save(function (err) {
        if (err) res.status(500).send(err)
        res.status(201).send({
            status: true,
            mensagem: 'Filme incluido com sucesso'
        })
    })
}

//PUT
exports.putFilme = (req, res) => {
    Filmes.updateOne(
        { titulo: req.params.titulo },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({
                status: true,
                mensagem: 'Atualizado com sucesso'
            })
        }
    )
}

//DELETE
exports.deleteFilme = (req, res) => {
    const titulo = req.params.titulo
    Filmes.findOne({ titulo }, function (err, filme) {
        if (err) return res.status(500).send(err);

        if (!filme) {
            return res.status(200).send({ mensagem: "infelizmente não localizamos o filme para remover" });
        }

        filme.remove(function (err) {
            if (!err) {
                const removido = Filmes.pop();
                res.status(200).send({ message: `Filme ${removido} removido com sucesso...` });
            }
        })
    })

}