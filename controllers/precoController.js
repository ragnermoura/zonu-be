const express = require('express');

const Preco = require('../models/tb_preco');

const obterPrecos = async (req, res) => {
  try {
    const precos = await Preco.findAll({
      include: [{ model: Usuario, as: 'Usuario' }] 
    });
    return res.status(200).send({ response: precos });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterPrecoPorId = async (req, res) => {
  try {
    const preco = await Preco.findByPk(req.params.id_preco, {
      include: [{ model: Usuario, as: 'Usuario' }]
    });
    if (preco) {
      return res.status(200).send({ response: preco });
    } else {
      return res.status(404).send({ message: 'Preço não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarPreco = async (req, res) => {
  try {
    const novoPreco = await Preco.create(req.body);
    return res.status(201).send({ response: novoPreco });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarPreco = async (req, res) => {
  try {
    const precoAtualizado = await Preco.update(req.body, {
      where: { id_preco: req.params.id_preco }
    });
    if (precoAtualizado) {
      return res.status(200).send({ message: 'Preço atualizado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Preço não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarPreco = async (req, res) => {
  try {
    const deletado = await Preco.destroy({
      where: { id_preco: req.params.id_preco }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Preço deletado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Preço não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterPrecos,
  obterPrecoPorId,
  criarPreco,
  atualizarPreco,
  deletarPreco
};
