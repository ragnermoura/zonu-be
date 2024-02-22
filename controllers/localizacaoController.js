const express = require('express');

const Localizacao = require('../models/tb_localizacao');

const obterLocalizacoes = async (req, res) => {
  try {
    const localizacoes = await Localizacao.findAll({
      include: [{ model: Usuario, as: 'Usuario' }] 
    });
    return res.status(200).send({ response: localizacoes });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterLocalizacaoPorId = async (req, res) => {
  try {
    const localizacao = await Localizacao.findByPk(req.params.id_localizacao, {
      include: [{ model: Usuario, as: 'Usuario' }] 
    });
    if (localizacao) {
      return res.status(200).send({ response: localizacao });
    } else {
      return res.status(404).send({ message: 'Localização não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarLocalizacao = async (req, res) => {
  try {
    const novaLocalizacao = await Localizacao.create(req.body);
    return res.status(201).send({ response: novaLocalizacao });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarLocalizacao = async (req, res) => {
  try {
    const localizacaoAtualizada = await Localizacao.update(req.body, {
      where: { id_localizacao: req.params.id_localizacao }
    });
    if (localizacaoAtualizada) {
      return res.status(200).send({ message: 'Localização atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Localização não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarLocalizacao = async (req, res) => {
  try {
    const deletado = await Localizacao.destroy({
      where: { id_localizacao: req.params.id_localizacao }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Localização deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Localização não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterLocalizacoes,
  obterLocalizacaoPorId,
  criarLocalizacao,
  atualizarLocalizacao,
  deletarLocalizacao
};
