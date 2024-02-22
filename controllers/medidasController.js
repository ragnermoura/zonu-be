const express = require('express');

const Medidas = require('../models/tb_medidas');

const obterMedidas = async (req, res) => {
  try {
    const medidas = await Medidas.findAll({
      include: [{ all: true }] 
    });
    return res.status(200).send({ response: medidas });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterMedidaPorId = async (req, res) => {
  try {
    const medida = await Medidas.findByPk(req.params.id_medidas, {
      include: [{ all: true }] 
    });
    if (medida) {
      return res.status(200).send({ response: medida });
    } else {
      return res.status(404).send({ message: 'Medida não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarMedida = async (req, res) => {
  try {
    const novaMedida = await Medidas.create(req.body);
    return res.status(201).send({ response: novaMedida });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarMedida = async (req, res) => {
  try {
    const medidaAtualizada = await Medidas.update(req.body, {
      where: { id_medidas: req.params.id_medidas }
    });
    if (medidaAtualizada[0]) {
      return res.status(200).send({ message: 'Medida atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Medida não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarMedida = async (req, res) => {
  try {
    const deletado = await Medidas.destroy({
      where: { id_medidas: req.params.id_medidas }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Medida deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Medida não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterMedidas,
  obterMedidaPorId,
  criarMedida,
  atualizarMedida,
  deletarMedida
};
