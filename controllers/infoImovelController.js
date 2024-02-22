const express = require('express');

const Info = require('../models/tb_info_imovel');

const obterInfos = async (req, res) => {
  try {
    const infos = await Info.findAll({
      include: [{ all: true }] 
    });
    return res.status(200).send({ response: infos });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const obterInfoPorId = async (req, res) => {
  try {
    const info = await Info.findByPk(req.params.id_info, {
      include: [{ all: true }] 
    });
    if (info) {
      return res.status(200).send({ response: info });
    } else {
      return res.status(404).send({ message: 'Informação do imóvel não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const criarInfo = async (req, res) => {
  try {
    const novaInfo = await Info.create(req.body);
    return res.status(201).send({ response: novaInfo });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const atualizarInfo = async (req, res) => {
  try {
    const infoAtualizada = await Info.update(req.body, {
      where: { id_info: req.params.id_info }
    });
    if (infoAtualizada[0]) {
      return res.status(200).send({ message: 'Informação do imóvel atualizada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Informação do imóvel não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deletarInfo = async (req, res) => {
  try {
    const deletado = await Info.destroy({
      where: { id_info: req.params.id_info }
    });
    if (deletado) {
      return res.status(200).send({ message: 'Informação do imóvel deletada com sucesso' });
    } else {
      return res.status(404).send({ message: 'Informação do imóvel não encontrada' });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  obterInfos,
  obterInfoPorId,
  criarInfo,
  atualizarInfo,
  deletarInfo
};
