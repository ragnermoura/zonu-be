const express = require('express');

const Complemento = require('../models/tb_complementos');

const obterComplementos = async (req, res) => {
  try {
    const complementos = await Complemento.findAll({
      include: [{ all: true }] 
    });
    return res.status(200).send({ response: complementos });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterComplementoPorId = async (req, res) => {
  try {
    const complemento = await Complemento.findByPk(req.params.id_complemento, {
      include: [{ all: true }] 
    });
    if (complemento) {
      return res.status(200).send({ response: complemento });
    } else {
      return res.status(404).send({ message: 'Complemento não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarComplemento = async (req, res) => {
  try {
    const novoComplemento = await Complemento.create(req.body);
    return res.status(201).send({ response: novoComplemento });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarComplemento = async (req, res) => {
  try {
    const complementoAtualizado = await Complemento.update(req.body, {
      where: { id_complemento: req.params.id_complemento }
    });
    if (complementoAtualizado[0]) {
      return res.status(200).send({ message: 'Complemento atualizado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Complemento não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarComplemento = async (req, res) => {
  try {
    const deletado = await Complemento.destroy({
      where: { id_complemento: req.params.id_complemento }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Complemento deletado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Complemento não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterComplementos,
  obterComplementoPorId,
  criarComplemento,
  atualizarComplemento,
  deletarComplemento
};
