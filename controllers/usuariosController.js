const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const QRCode = require("qrcode");
const Code = require("../models/tb_code");
const Token = require("../models/tb_token");
const User = require("../models/tb_usuarios");
const Perfil = require("../models/tb_perfil");
const Progress = require("../models/tb_progressao");
const Qrcode = require("../models/tb_qrcode");

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
      termos: "S",
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

    const progressStatus = await Progress.create({
      perfil: 1,
      logo_capa: 0,
      imovel: 0,
      publicacao: 0,
      id_user: novoUsuario.id_user,
    });

    const qrData = "https://zonu.com.br/";
    const qrCodeURL = await QRCode.toDataURL(qrData);

    const novoQrcode = await Qrcode.create({
      qrcode: qrCodeURL,
      tipo: 2,
      id_user: novoUsuario.id_user,
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

    const qrData = "https://zonu.com.br/";
    const qrCodeURL = await QRCode.toDataURL(qrData);

    const novoQrcode = await Qrcode.create({
      qrcode: qrCodeURL,
      tipo: 2,
      id_user: novoUsuario.id_user,
    });

    const progressStatus = await Progress.create({
      perfil: 1,
      logo_capa: 0,
      imovel: 0,
      publicacao: 0,
      id_user: novoUsuario.id_user,
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
    const usuarios = await User.findAll({
      include: [
        { model: Code, as: "code" },
        { model: Token, as: "token" },
        { model: Perfil, as: "perfil" },
        { model: Progress, as: "progress" },
        { model: Qrcode, as: "qrcode" },
      ],
    });
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

const atualizarStatusUsuario = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }
    usuario.id_status = req.body.status;

    await usuario.save();
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const trocaSenha = async (req, res, next) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    // Criptografa a nova senha antes de salvar
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    usuario.senha = hashedPassword;

    // Não é necessário salvar o usuário explicitamente
    // await usuario.save();
 
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const excluirUsuario = async (req, res, next) => {
  try {
    const id_user = req.params.id_user;
    // Primeiro, deleta todas as entradas relacionadas
    await Qrcode.destroy({ where: { id_user } });
    await Token.destroy({ where: { id_user } });
    await Code.destroy({ where: { id_user } });
    await Perfil.destroy({ where: { id_user } });
    await Progress.destroy({ where: { id_user } });

    // Depois, tenta deletar o usuário
    const usuario = await User.findByPk(id_user);
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
  trocaSenha,
  atualizarStatusUsuario,
};
