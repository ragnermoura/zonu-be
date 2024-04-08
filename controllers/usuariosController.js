const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const Code = require("../models/tb_code");
const Token = require("../models/tb_token");
const User = require("../models/tb_usuarios");
const Perfil = require("../models/tb_perfil");

require("dotenv").config();

const cadastrarUsuario = async (req, res, next) => {
  try {
    const perfilExistente = await Perfil.findOne({
      where: { cnpj: req.body.cnpj },
    });
    if (perfilExistente) {
      return res.status(409).send({
        mensagem: "Cnpj já cadastrado, por favor insira um CNPJ diferente!",
      });
    }

    const usuarioExistente = await User.findOne({
      where: { email: req.body.email },
    });
    if (usuarioExistente) {
      return res.status(409).send({
        mensagem: "Email já cadastrado, por favor insira um email diferente!",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const filename = req.file ? req.file.filename : "default-avatar.png";
    const filenameLogo = req.file ? req.file.filename : "default-logo.png";
    const filenameCapa = req.file ? req.file.filename : "default-capa.png";

    const novoUsuario = await User.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      senha: hashedPassword,
      avatar: `/avatar/${filename}`,
      id_plano: req.body.id_plano,
      id_status: req.body.status,
      id_nivel: req.body.nivel,
    });

    const novoperfil = await Perfil.create({
      razao_social: req.body.razao_social,
      cnpj: req.body.cnpj,
      telefone: req.body.telefone,
      cep: req.body.cep,
      avatar: `/logo/${filenameLogo}`,
      avatar: `/capa/${filenameCapa}`,
      endereco: req.body.endereco,
      id_user: novoUsuario.id_user,
    });

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 1,
      code: codigoAleatorio,
      id_user: novoUsuario.id_user,
    });

    const tokenUsuario = await Token.create({
      id_user: novoUsuario.id_user,
      token: uuidv4(),
    });

    const response = {
      mensagem: "Usuário cadastrado com sucesso",
      usuarioCriado: {
        id_user: novoUsuario.id_user,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        nivel: novoUsuario.id_nivel,
        id_perfil: novoperfil.id_perfil,
        razao_social: novoperfil.razao_social,
        cnpj: novoperfil.cnpj,
        token_unico: tokenUsuario.token,
        code: code.code,
        request: {
          tipo: "GET",
          descricao: "Pesquisar um usuário",
          url: `https://trustchecker.com.br/api/usuarios/${novoUsuario.id_user}`,
        },
      },
    };

    return res.status(202).send(response);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const cadastrarUsuarioSimple = async (req, res, next) => {
  try {
     const filename = req.file ? req.file.filename : "default-avatar.png";
     const usuarioExistente = await User.findOne({
      where: { email: req.body.email },
    });
    if (usuarioExistente) {
      return res.status(409).send({
        mensagem: "Email já cadastrado, por favor insira um email diferente!",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);

    const novoUsuario = await User.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      senha: hashedPassword,
      avatar: `/avatar/${filename}`,
      id_plano: req.body.id_plano,
      id_status: req.body.status,
      id_nivel: req.body.nivel,
    });

    const codigoAleatorio = Math.floor(1000 + Math.random() * 9000).toString();

    const code = await Code.create({
      type_code: 1,
      code: codigoAleatorio,
      id_user: novoUsuario.id_user,
    });

    const tokenUsuario = await Token.create({
      id_user: novoUsuario.id_user,
      token: uuidv4(),
    });

    const response = {
      mensagem: "Usuário cadastrado com sucesso",
      usuarioCriado: {
        id_user: novoUsuario.id_user,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        nivel: novoUsuario.id_nivel,
        token_unico: tokenUsuario.token,
        code: code.code,
        request: {
          tipo: "GET",
          descricao: "Pesquisar um usuário",
          url: `https://trustchecker.com.br/api/usuarios/${novoUsuario.id_user}`,
        },
      },
    };

    return res.status(202).send(response);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const obterUsuarios = async (req, res, next) => {
  try {
    const usuarios = await User.findAll();
    return res.status(200).send({ response: usuarios });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const obterUsuarioPorId = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.params.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    return res.status(200).send({ response: usuario });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const atualizarUsuario = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    usuario.nome = req.body.nome;
    usuario.sobrenome = req.body.sobrenome;
    usuario.email = req.body.email;
    usuario.id_nivel = req.body.nivel;
    usuario.id_status = req.body.status;
    await usuario.save();
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const atualizarDadosUsuario = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    usuario.education = req.body.education;
    usuario.phonenumber = req.body.phonenumber;
    usuario.address = req.body.address;
    usuario.zipcode = req.body.zipcode;
    usuario.country = req.body.country;
    usuario.language = req.body.language;

    await usuario.save();
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const excluirUsuario = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    await usuario.destroy();
    return res.status(202).send({ mensagem: "Usuário excluído com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  excluirUsuario,
  cadastrarUsuario,
  cadastrarUsuarioSimple,
  atualizarDadosUsuario,
}
