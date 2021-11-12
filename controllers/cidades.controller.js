const Cidade = require("./../models/cidades");

function validaDados(res, dado) {
  if (!dado.nome) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar o nome da cidade!",
    });
    return;
  } else if (!dado.qtdDeBairros) {
    res.status(400).json({
      message:
        "Campo incompleto! É necessário colocar a quantidade de bairros!",
    });
    return;
  } else if (typeof dado.qtdDeBairros != "number") {
    res
      .status(400)
      .json({ message: "A quantidade de bairros deve ser um número!" });
    return;
  } else if (!dado.populacao) {
    res.status(400).json({
      message: "Campo incompleto! É necessário colocar a população da cidade!",
    });
    return;
  } else if (typeof dado.populacao != "number") {
    res.status(400).json({ message: "A população deve ser um número!" });
    return;
  } else if (!dado.aniversarioCidade) {
    res.status(400).json({
      message:
        "Campo incompleto! É necessário colocar o aniversário da cidade!",
    });
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
  res.status(200).json({ message: "Rota Cidades funcionando" });
};

exports.listAll = async (req, res) => {
  await Cidade.find({})
    .then((cidades) => {
      res.status(200).json(cidades);
    })
    .catch((err) => {
      res.status(400).json({ message: "Não foi encontrado nenhuma cidade!" });
      console.error(err);
    });
};

exports.listName = async (req, res) => {
  await Cidade.findOne({ nome: req.params.nome })
    .then((cidade) => {
      res.status(200).json(cidade);
    })
    .catch((err) => {
      res.status(400).json({ message: "Cidade não encontrada!" });
      console.error(err);
    });
};

exports.postAdd = async (req, res) => {
  if (validaDados(res, req.body)) {
    return;
  }
  await Cidade.create(req.body)
    .then(() => {
      res.status(200).json({ message: `Cidade adicionada com sucesso.` });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Ocorreu um erro no cadastro! Tente novamente." });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if (validaDados(res, req.body)) {
    return;
  }
  if (validaId(res, req.params.id)) {
    return;
  }
  await Cidade.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({ message: "Cidade atualizada!" });
    })
    .catch(() =>
      res.status(400).json({ message: "Ocorreu um erro! Tente novamente." })
    );
};

exports.delDelete = async (req, res) => {
  if (validaId(res, req.params.id)) {
    return;
  }
  await Cidade.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Cidade excluída!" });
    })
    .catch(() => {
      res.status(400).json({ message: "Ocorreu um erro! Tente novamente." });
    });
};
