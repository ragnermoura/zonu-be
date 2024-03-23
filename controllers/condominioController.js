const express = require('express');

const NovoCondominio = require('../models/condominio/tb_novo_condominio'); 
const Usuario = require('../models/tb_usuarios'); 


const obterCondominios = async (req, res) => {
  try {
    const condominios = await NovoCondominio.findAll({
      include: [
        { model: Usuario, as: 'Usuario' },
        
      ]
    });
    return res.status(200).send({ response: condominios });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterCondominioPorId = async (req, res) => {
  try {
    const condominio = await NovoCondominio.findByPk(req.params.id_condominio, {
      include: [
        { model: Usuario, as: 'Usuario' },
        
      ]
    });
    if (condominio) {
      return res.status(200).send({ response: condominio });
    } else {
      return res.status(404).send({ message: 'Condomínio não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarCondominio = async (req, res) => {
  try {
    const novoCondominio = await NovoCondominio.create(req.body);
    return res.status(201).send({ response: novoCondominio });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarCondominio = async (req, res) => {
  try {
    const condominioAtualizado = await NovoCondominio.update(req.body, {
      where: { id_condominio: req.params.id_condominio }
    });
    if (condominioAtualizado) {
      return res.status(200).send({ message: 'Condomínio atualizado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Condomínio não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarCondominio = async (req, res) => {
  try {
    const deletado = await NovoCondominio.destroy({
      where: { id_condominio: req.params.id_condominio }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Condomínio deletado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Condomínio não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterCondominios,
  obterCondominioPorId,
  criarCondominio,
  atualizarCondominio,
  deletarCondominio
};
