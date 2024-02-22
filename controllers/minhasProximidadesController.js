const express = require('express');

const MinhasProximidades = require('../models/tb_minhas_proximidades');
const Proximidades = require('../models/tb_proximidades');

const obterMinhasProximidades = async (req, res) => {
  try {
    const minhasProximidades = await MinhasProximidades.findAll({
      include: [{ model: Proximidades, as: 'Proximidades' }] 
    });
    return res.status(200).send({ response: minhasProximidades });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterMinhaProximidadePorId = async (req, res) => {
  try {
    const minhaProximidade = await MinhasProximidades.findByPk(req.params.id_minhas_proximidades, {
      include: [{ model: Proximidades, as: 'Proximidades' }] 
    });
    if (minhaProximidade) {
      return res.status(200).send({ response: minhaProximidade });
    } else {
      return res.status(404).send({ message: 'Minha Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarMinhaProximidade = async (req, res) => {
  try {
    const novaMinhaProximidade = await MinhasProximidades.create(req.body);
    return res.status(201).send({ response: novaMinhaProximidade });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarMinhaProximidade = async (req, res) => {
  try {
    const minhaProximidadeAtualizada = await MinhasProximidades.update(req.body, {
      where: { id_minhas_proximidades: req.params.id_minhas_proximidades }
    });
    if (minhaProximidadeAtualizada) {
      return res.status(200).send({ message: 'Minha Proximidade atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarMinhaProximidade = async (req, res) => {
  try {
    const deletado = await MinhasProximidades.destroy({
      where: { id_minhas_proximidades: req.params.id_minhas_proximidades }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Minha Proximidade deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha Proximidade não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterMinhasProximidades,
  obterMinhaProximidadePorId,
  criarMinhaProximidade,
  atualizarMinhaProximidade,
  deletarMinhaProximidade
};
