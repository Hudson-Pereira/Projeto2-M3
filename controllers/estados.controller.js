const Estado = require("./../models/estados");

function validaDados(res, dados) {
  if (!dados.nome) {
    res.status(400).json({ message: "Falta nome..." });
    return;
  } else if (!dados.regiao) {
    res.status(400).json({ message: "Falta regiao..." });
    return;
  } else if (!dados.populacao) {
    res.status(400).json({ message: "Falta populacao..." });
    return;
  } else if (!dados.valorSalMin) {
    res.status(400).json({ message: "Falta valorSalMin..." });
    return;
  }
}

function validaId(res, id) {
  if (id.length != 24) {
    res.status(400).json({
      message:
        "Número de ID não encontrado, verifique o número e tente novamente.",
    });
  }
}

exports.index = (req, res) => {
  res.status(200).json({ message: "Rota inicial Estados Ok" });
};

exports.listAll = async (req, res) => {
  await Estado.find({})
    .then((estados) => {
      res.status(200).json(estados);
    })
    .catch((err) => {
      res.status(400).json({ message: "Nada encontrado..." });
      console.error(err);
    });
};

exports.listName = async (req, res) => {
  await Estado.findOne({ nome: req.params.nome })
    .then((estado) => {
      res.status(200).json(estado);
    })
    .catch((err) => {
      res.status(400).json({ message: "ERROR" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if (validaDados(res, req.body)) {
    return;
  }
  await Estado.create(req.body)
    .then(() => {
      res.status(200).json({ message: `Estado adicionado com sucesso.` });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "ERROR!!! Verifique os dados e tente novamente." });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if (validaId(res, req.params.id)) {
    return;
  }
  if (validaDados(res, req.body)) {
    return;
  }
  await Estado.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({ message: "Estado alterado com sucesso." });
    })
    .catch(() => {
      res.status(400).json({ message: "ERROR" });
    });
};

exports.delDelete = async (req, res) => {
  if (validaId(res, req.params.id)) {
    return;
  }
  await Estado.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Estado excluido com sucesso." });
    })
    .catch(() => {
      res.status(400).json({ message: "ERROR" });
    });
};
