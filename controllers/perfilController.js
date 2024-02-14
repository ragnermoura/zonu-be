
const Perfil = require("../models/tb_perfil");
const Usuario = require("../models/tb_acesso");

require('dotenv').config();

const obterPerfil = async (req, res, next) => {
    try {
        const perfil = await Perfil.findAll({
            include: [{
                model: Usuario,
                as: 'usuario', 
                attributes: ['*'] 
            }]
        });
        return res.status(200).send({ response: perfil });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
const obterPerfilPorId = async (req, res, next) => {
    try {
        const perfil = await Perfil.findByPk(req.params.id_perfil);
        if (!perfil) {
            return res.status(404).send({ message: "Perfil do usuário não encontrado" });
        }
        return res.status(200).send({ response: perfil });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
const atualizarPerfil = async (req, res, next) => {
    try {
        const perfil = await Perfil.findByPk(req.body.id_perfil);
        if (!perfil) {
            return res.status(404).send({ message: "Perfil não encontrado" });
        }
        perfil.razao_social = req.body.razao_social;
        perfil.cnpj = req.body.cnpj;
        perfil.cpf = req.body.cpf;
        perfil.telefone = req.body.telefone;
        perfil.cep = req.body.cep;
        perfil.endereco = req.body.endereco;
        await perfil.save();
        return res
            .status(201)
            .send({ mensagem: "Dados do perfil alterados com sucesso!" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
const excluirPerfil = async (req, res, next) => {
    try {
        const perfil = await Perfil.findByPk(req.body.id_perfil);
        if (!perfil) {
            return res.status(404).send({ message: "Perfil não encontrado" });
        }
        await perfil.destroy();
        return res.status(202).send({ mensagem: "Perfil excluído com sucesso!" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
const cadastrarPerfil = async (req, res, next) => {
    try {
        const perfilExistente = await Perfil.findOne({
            where: { cnpj: req.body.cnpj },
        });
        if (perfilExistente) {
            return res
                .status(409)
                .send({
                    mensagem: "Cnpj já cadastrado, por favor insira um CNPJ diferente!",
                });
        }
        const novoperfil = await Perfil.create({
            razao_social: req.body.razao_social,
            cnpj: req.body.cnpj,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            telefone2: req.body.telefone2,
            aniversario: req.body.aniversario,
            cep: req.body.cep,
            endereco: req.body.endereco,
            tem_cnpj: req.body.tem_cnpj,
            termos: req.body.termos,
            id_user: req.body.id_user,
        });
        const response = {
            mensagem: "Usuário cadastrado com sucesso",
            perfilCriado: {
                id_perfil: novoperfil.id_perfil,
                razao_social: novoperfil.razao_social,
                cnpj: novoperfil.cnpj,
                id_user: novoperfil.id_user,
                request: {
                    tipo: "GET",
                    descricao: "Pesquisar um usuário",
                    url: `https://trustchecker.com.br/api/perfil/${novoperfil.id_perfil}`,
                },
            },
        };

        return res.status(202).send(response);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    obterPerfil,
    obterPerfilPorId,
    atualizarPerfil,
    excluirPerfil,
    cadastrarPerfil
   
};