const express = require('express');

const Proximidades = require('../models/tb_proximidades');

const obterProximidades = async (req, res) => {
  try {
    const proximidades = await Proximidades.findAll({
      include: [{ all: true }]
    });
    return res.status(200).send({ response: proximidades });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterProximidadePorId = async (req, res) => {
  try {
    const proximidade = await Proximidades.findByPk(req.params.id_proximidade, {
      include: [{ all: true }]
    });
    if (proximidade) {
      return res.status(200).send({ response: proximidade });
    } else {
      return res.status(404).send({ message: 'Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarProximidade = async (req, res) => {
  try {
    const novaProximidade = await Proximidades.create(req.body);
    return res.status(201).send({ response: novaProximidade });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarProximidade = async (req, res) => {
  try {
    const proximidadeAtualizada = await Proximidades.update(req.body, {
      where: { id_proximidade: req.params.id_proximidade }
    });
    if (proximidadeAtualizada[0]) {
      return res.status(200).send({ message: 'Proximidade atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarProximidade = async (req, res) => {
  try {
    const deletado = await Proximidades.destroy({
      where: { id_proximidade: req.params.id_proximidade }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Proximidade deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterProximidades,
  obterProximidadePorId,
  criarProximidade,
  atualizarProximidade,
  deletarProximidade
};
