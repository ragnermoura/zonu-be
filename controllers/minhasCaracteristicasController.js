const express = require('express');

const MinhasCaracteristicas = require('../models/tb_minhas_caracteristicas');
const Caracteristica = require('../models/tb_caracteristica');

const obterMinhasCaracteristicas = async (req, res) => {
  try {
    const minhasCaracteristicas = await MinhasCaracteristicas.findAll({
      include: [{ model: Caracteristica, as: 'Caracteristica' }] 
    });
    return res.status(200).send({ response: minhasCaracteristicas });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterMinhaCaracteristicaPorId = async (req, res) => {
  try {
    const minhaCaracteristica = await MinhasCaracteristicas.findByPk(req.params.id_minhas_caracteristicas, {
      include: [{ model: Caracteristica, as: 'Caracteristica' }]
    });
    if (minhaCaracteristica) {
      return res.status(200).send({ response: minhaCaracteristica });
    } else {
      return res.status(404).send({ message: 'Minha Característica não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarMinhaCaracteristica = async (req, res) => {
  try {
    const novaMinhaCaracteristica = await MinhasCaracteristicas.create(req.body);
    return res.status(201).send({ response: novaMinhaCaracteristica });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarMinhaCaracteristica = async (req, res) => {
  try {
    const minhaCaracteristicaAtualizada = await MinhasCaracteristicas.update(req.body, {
      where: { id_minhas_caracteristicas: req.params.id_minhas_caracteristicas }
    });
    if (minhaCaracteristicaAtualizada) {
      return res.status(200).send({ message: 'Minha Característica atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha Característica não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarMinhaCaracteristica = async (req, res) => {
  try {
    const deletado = await MinhasCaracteristicas.destroy({
      where: { id_minhas_caracteristicas: req.params.id_minhas_caracteristicas }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Minha Característica deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha Característica não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterMinhasCaracteristicas,
  obterMinhaCaracteristicaPorId,
  criarMinhaCaracteristica,
  atualizarMinhaCaracteristica,
  deletarMinhaCaracteristica
};
