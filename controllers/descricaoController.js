const express = require('express');

const Descricao = require('../models/tb_descricao');

const obterDescricoes = async (req, res) => {
  try {
    const descricoes = await Descricao.findAll({
      include: [{ all: true }] 
    });
    return res.status(200).send({ response: descricoes });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterDescricaoPorId = async (req, res) => {
  try {
    const descricao = await Descricao.findByPk(req.params.id_descricao, {
      include: [{ all: true }] 
    });
    if (descricao) {
      return res.status(200).send({ response: descricao });
    } else {
      return res.status(404).send({ message: 'Descrição não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarDescricao = async (req, res) => {
  try {
    const novaDescricao = await Descricao.create(req.body);
    return res.status(201).send({ response: novaDescricao });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarDescricao = async (req, res) => {
  try {
    const descricaoAtualizada = await Descricao.update(req.body, {
      where: { id_descricao: req.params.id_descricao }
    });
    if (descricaoAtualizada[0]) {
      return res.status(200).send({ message: 'Descrição atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Descrição não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarDescricao = async (req, res) => {
  try {
    const deletado = await Descricao.destroy({
      where: { id_descricao: req.params.id_descricao }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Descrição deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Descrição não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterDescricoes,
  obterDescricaoPorId,
  criarDescricao,
  atualizarDescricao,
  deletarDescricao
};
