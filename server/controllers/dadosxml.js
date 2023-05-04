import { db } from "../db.js"

export const getUsers = (_, res) => {
    const q = "select * from guia g inner join profissional on g_profissonal = p_sequencial inner join procedimento p  on g_procedimento = pro_sequencial inner join custoprocedimento c  on g_custoprocedimento  = cp_sequencial inner join qtdeprocedimento q  on g_qtdeprocedimento  = qp_sequencial";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });

};

export const addUser = (req, res) => {
  const qtdeprocedimento =
    "INSERT INTO qtdeprocedimento(`qp_quantidadeexecutada`) VALUES(?)";

  const valuesqtde = [
    req.body.quantidadeexecutada,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados inseridos com sucesso.");
  });

  const profissional =
  "INSERT INTO profissional(`p_nomeContratado`) VALUES(?)";

  const valuespro = [
    req.body.nomeContratado,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados inseridos com sucesso.");
  });

  const procedimento =
  "INSERT INTO procedimento(`pro_codigoprocedimento`,`pro_descricaoprocedimento`) VALUES(?)";

  const valuesproce = [
    req.body.codigoprocedimento,
    req.body.descricaoprocedimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados inseridos com sucesso.");
  });

  const custoprocedimento =
  "INSERT INTO custoprocedimento(`cp_valortotal`) VALUES(?)";

  const valuescustoprocedimento = [
    req.body.cp_valortotal,
  
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados inseridos com sucesso.");
  });

  const guia =
  "INSERT INTO guia(`g_numerocontrato`,`g_profissonal`,`g_procedimento`,`g_custoprocedimento`,`g_qtdeprocedimento`) VALUES(?)";
  
  profissonal       =  " SELECT p_sequencial + 1 FROM profissional ";
  procedimento      =  " SELECT pro_sequencial + 1 FROM procedimento ";
  custoprocedimento =  " SELECT cp_sequencial + 1 FROM custoprocedimento ";
  qtdeprocedimento  =  " SELECT qp_sequencial + 1 FROM qtdeprocedimento ";
  
  const valuesguia = [
    req.body.numerocontrato,
    req.body.profissonal,
    req.body.procedimento,
    req.body.custoprocedimento,
    req.body.qtdeprocedimento,
  
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Dados inseridos com sucesso.");
  });



  };

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

