const express = require('express');

const NovoImovel = require('../models/tb_novo_imovel');
const Info = require('../models/tb_info_imovel');
const Proprietario = require('../models/tb_proprietario');
const Condominio = require('../models/condominio/tb_novo_condominio');
const Comodos = require('../models/tb_comodos');
const Medidas = require('../models/tb_medidas');
const Preco = require('../models/tb_preco');
const MinhasCaracteristicas = require('../models/tb_minhas_caracteristicas'); 
const Localizacao = require('../models/tb_localizacao');
const Proximidades = require('../models/tb_minhas_proximidades');
const Descricao = require('../models/tb_descricao');
const Complemento = require('../models/tb_complementos');

const obterImoveis = async (req, res) => {
  try {
    const imoveis = await NovoImovel.findAll({
      include: [Info, Proprietario, Condominio, Comodos, Medidas, Preco, MinhasCaracteristicas, Localizacao, Proximidades, Descricao, Complemento]
    });
    return res.status(200).send({ response: imoveis });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterImovelPorId = async (req, res) => {
  try {
    const imovel = await NovoImovel.findByPk(req.params.id_novo_imovel, {
      include: [Info, Proprietario, Condominio, Comodos, Medidas, Preco, MinhasCaracteristicas, Localizacao, Proximidades, Descricao, Complemento]
    });
    if (imovel) {
      return res.status(200).send({ response: imovel });
    } else {
      return res.status(404).send({ message: 'Imóvel não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarImovel = async (req, res) => {
  try {
    const novoImovel = await NovoImovel.create(req.body);
    return res.status(201).send({ response: novoImovel });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarImovel = async (req, res) => {
  try {
    const imovelAtualizado = await NovoImovel.update(req.body, {
      where: { id_novo_imovel: req.params.id_novo_imovel }
    });
    if (imovelAtualizado) {
      return res.status(200).send({ message: 'Imóvel atualizado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Imóvel não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarImovel = async (req, res) => {
  try {
    const deletado = await NovoImovel.destroy({
      where: { id_novo_imovel: req.params.id_novo_imovel }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Imóvel deletado com sucesso' });
    } else {
      return res.status(404).send({ message: 'Imóvel não encontrado' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterImoveis,
  obterImovelPorId,
  criarImovel,
  atualizarImovel,
  deletarImovel
};
