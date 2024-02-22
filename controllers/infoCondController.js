const express = require('express');

const InfoCondominio = require('../models/condominio/tb_info_condominio'); 
const Usuario = require('../models/tb_usuarios'); 

const obterInfoCondominios = async (req, res) => {
  try {
    const infoCondominios = await InfoCondominio.findAll({
      include: [{ model: Usuario, as: 'Usuario' }] 
    });
    return res.status(200).send({ response: infoCondominios });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterInfoCondominioPorId = async (req, res) => {
  try {
    const infoCondominio = await InfoCondominio.findByPk(req.params.id_info_condominio, {
      include: [{ model: Usuario, as: 'Usuario' }]
    });
    if (infoCondominio) {
      return res.status(200).send({ response: infoCondominio });
    } else {
      return res.status(404).send({ message: 'Informações do condomínio não encontradas' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarInfoCondominio = async (req, res) => {
  try {
    const novoInfoCondominio = await InfoCondominio.create(req.body);
    return res.status(201).send({ response: novoInfoCondominio });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarInfoCondominio = async (req, res) => {
  try {
    const infoCondominioAtualizado = await InfoCondominio.update(req.body, {
      where: { id_info_condominio: req.params.id_info_condominio }
    });
    if (infoCondominioAtualizado) {
      return res.status(200).send({ message: 'Informações do condomínio atualizadas com sucesso' });
    } else {
      return res.status(404).send({ message: 'Informações do condomínio não encontradas' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarInfoCondominio = async (req, res) => {
  try {
    const deletado = await InfoCondominio.destroy({
      where: { id_info_condominio: req.params.id_info_condominio }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Informações do condomínio deletadas com sucesso' });
    } else {
      return res.status(404).send({ message: 'Informações do condomínio não encontradas' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterInfoCondominios,
  obterInfoCondominioPorId,
  criarInfoCondominio,
  atualizarInfoCondominio,
  deletarInfoCondominio
};
