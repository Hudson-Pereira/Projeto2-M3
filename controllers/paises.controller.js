const Pais = require("./../models/paises");

function validaDados(res, dados) {
  if (!dados.nome) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar o nome do país!",
    });
    return;
  } else if (!dados.populacao) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar a população do país!",
    });
    return;
  } else if (typeof dados.populacao != "number") {
    res.status(400).json({ message: "A população deve ser um número!" });
    return;
  } else if (!dados.linguaMae) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar a língua mãe do país!",
    });
    return;
  } else if (!dados.pib) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar o PIB do país!",
    });
    return;
  } else if (typeof dados.pib != "number") {
    res.status(400).json({ message: "O PIB deve ser um número!" });
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
  res.status(200).json({ message: "Rota Paises funcionando" });
};

exports.listAll = async (req, res) => {
  await Pais.find({})
    .then((paises) => {
      res.status(200).json(paises);
    })
    .catch((err) => {
      res.status(400).json({ message: "Não foi encontrado nenhum país!" });
      console.error(err);
    });
};

exports.listName = async (req, res) => {
  await Pais.findOne({ nome: req.params.nome })
    .then((pais) => {
      res.status(200).json(pais);
    })
    .catch((err) => {
      res.status(400).json({ message: "País não encontrado!" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if (validaDados(res, req.body)) {
    return;
  }
  await Pais.create(req.body)
    .then(() => {
      res.status(200).json({ message: `País adicionado com sucesso.` });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Ocorreu um erro no cadastro! Tente novamente." });
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
  await Pais.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({ message: "País atualizado!" });
    })
    .catch(() => {
      res.status(400).json({ message: "Ocorreu um erro! Tente novamente." });
    });
};

exports.delDelete = async (req, res) => {
  if (validaId(res, req.params.id)) {
    return;
  }
  await Pais.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "País excluído!" });
    })
    .catch(() => {
      res.status(400).json({ message: "Ocorreu um erro! Tente novamente." });
    });
};
