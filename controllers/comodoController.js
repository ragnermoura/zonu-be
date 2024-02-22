const express = require('express');

const Comodos = require('../models/tb_comodos');

const obterComodos = async (req, res) => {
  try {
    const comodos = await Comodos.findAll({
      include: [{ all: true }] 
    });
    return res.status(200).send({ response: comodos });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterComodoPorId = async (req, res) => {
  try {
    const comodo = await Comodos.findByPk(req.params.id_comodos, {
      include: [{ all: true }] 
    });
    if (comodo) {
      return res.status(200).send({ response: comodo });
    } else {
      return res.status(404).send({ message: 'Comodo não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarComodo = async (req, res) => {
  try {
    const novoComodo = await Comodos.create(req.body);
    return res.status(201).send({ response: novoComodo });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarComodo = async (req, res) => {
  try {
    const comodoAtualizado = await Comodos.update(req.body, {
      where: { id_comodos: req.params.id_comodos }
    });
    if (comodoAtualizado[0]) {
      return res.status(200).send({ message: 'Comodo atualizado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Comodo não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarComodo = async (req, res) => {
  try {
    const deletado = await Comodos.destroy({
      where: { id_comodos: req.params.id_comodos }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Comodo deletado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Comodo não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterComodos,
  obterComodoPorId,
  criarComodo,
  atualizarComodo,
  deletarComodo
};
