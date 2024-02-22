const express = require('express');

const MinhasCaracteristicasCondominio = require('../models/condominio/tb_minhas_caracteristicas_condominio'); 
const CaracteristicasCondominio = require('../models/condominio/tb_caracteristica_condominio'); 

const obterMinhasCaracteristicasCondominio = async (req, res) => {
  try {
    const minhasCaracteristicas = await MinhasCaracteristicasCondominio.findAll({
      include: [{ model: CaracteristicasCondominio, as: 'CaracteristicasCondominio' }] 
    });
    return res.status(200).send({ response: minhasCaracteristicas });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterMinhaCaracteristicaCondominioPorId = async (req, res) => {
  try {
    const minhaCaracteristica = await MinhasCaracteristicasCondominio.findByPk(req.params.id_minhas_caracteristicas_condominio, {
      include: [{ model: CaracteristicasCondominio, as: 'CaracteristicasCondominio' }]
    });
    if (minhaCaracteristica) {
      return res.status(200).send({ response: minhaCaracteristica });
    } else {
      return res.status(404).send({ message: 'Minha característica de condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarMinhaCaracteristicaCondominio = async (req, res) => {
  try {
    const novaCaracteristica = await MinhasCaracteristicasCondominio.create(req.body);
    return res.status(201).send({ response: novaCaracteristica });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarMinhaCaracteristicaCondominio = async (req, res) => {
  try {
    const caracteristicaAtualizada = await MinhasCaracteristicasCondominio.update(req.body, {
      where: { id_minhas_caracteristicas_condominio: req.params.id_minhas_caracteristicas_condominio }
    });
    if (caracteristicaAtualizada) {
      return res.status(200).send({ message: 'Minha característica de condomínio atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha característica de condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarMinhaCaracteristicaCondominio = async (req, res) => {
  try {
    const deletado = await MinhasCaracteristicasCondominio.destroy({
      where: { id_minhas_caracteristicas_condominio: req.params.id_minhas_caracteristicas_condominio }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Minha característica de condomínio deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Minha característica de condomínio não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterMinhasCaracteristicasCondominio,
  obterMinhaCaracteristicaCondominioPorId,
  criarMinhaCaracteristicaCondominio,
  atualizarMinhaCaracteristicaCondominio,
  deletarMinhaCaracteristicaCondominio
};
