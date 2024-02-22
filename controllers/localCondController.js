const express = require('express');

const LocalizacaoCondominio = require('../models/condominio/tb_localizacao_condominio'); 
const Usuario = require('../models/tb_usuarios'); 

const obterLocalizacoesCondominio = async (req, res) => {
  try {
    const localizacoes = await LocalizacaoCondominio.findAll({
      include: [{ model: Usuario, as: 'Usuario' }] 
    });
    return res.status(200).send({ response: localizacoes });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterLocalizacaoCondominioPorId = async (req, res) => {
  try {
    const localizacao = await LocalizacaoCondominio.findByPk(req.params.id_localizacao_condominio, {
      include: [{ model: Usuario, as: 'Usuario' }]
    });
    if (localizacao) {
      return res.status(200).send({ response: localizacao });
    } else {
      return res.status(404).send({ message: 'Localização do condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarLocalizacaoCondominio = async (req, res) => {
  try {
    const novaLocalizacao = await LocalizacaoCondominio.create(req.body);
    return res.status(201).send({ response: novaLocalizacao });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarLocalizacaoCondominio = async (req, res) => {
  try {
    const localizacaoAtualizada = await LocalizacaoCondominio.update(req.body, {
      where: { id_localizacao_condominio: req.params.id_localizacao_condominio }
    });
    if (localizacaoAtualizada) {
      return res.status(200).send({ message: 'Localização do condomínio atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Localização do condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarLocalizacaoCondominio = async (req, res) => {
  try {
    const deletado = await LocalizacaoCondominio.destroy({
      where: { id_localizacao_condominio: req.params.id_localizacao_condominio }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Localização do condomínio deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Localização do condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterLocalizacoesCondominio,
  obterLocalizacaoCondominioPorId,
  criarLocalizacaoCondominio,
  atualizarLocalizacaoCondominio,
  deletarLocalizacaoCondominio
};
