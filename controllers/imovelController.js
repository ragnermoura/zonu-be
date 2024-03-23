const express = require("express");

const Info = require("../models/tb_info_imovel");
const Comodos = require("../models/tb_comodos");
const Medidas = require("../models/tb_medidas");
const Preco = require("../models/tb_preco");
const Foto = require("../models/tb_imagem_imovel");
const Caracteristicas = require("../models/tb_imovel_caracteristica");
const Localizacao = require("../models/tb_localizacao");
const Descricao = require("../models/tb_descricao");
const Proximidades = require("../models/tb_imovel_proximidades");
const Complemento = require("../models/tb_complementos");
const Publicacao = require("../models/tb_publicacao");
const Imovel = require("../models/tb_imovel");

const criarImovel = async (req, res) => {
  try {
    const tabInfo = await Info.create({
      cod_referencia: req.body.cod_referencia,
      corretor: req.body.corretor,
      agenciador: req.body.agenciador,
      tipo: req.body.tipo,
      perfil_imovel: req.body.perfil_imovel,
      situacao_imovel: req.body.situacao_imovel,
      ano_construcao: req.body.ano_construcao,
      incorporacao: req.body.incorporacao,
      posicao_solar: req.body.posicao_solar,
      terreno: req.body.terreno,
      proximo_mar: req.body.proximo_mar,
      averbado: req.body.averbado,
      escriturado: req.body.escriturado,
      esquina: req.body.esquina,
    });

    const tabComodos = await Comodos.create({
      dormitorio: req.body.dormitorio,
      suite: req.body.suite,
      agenciador: req.body.agenciador,
      banheiro: req.body.banheiro,
      garagem: req.body.garagem,
      garagem_coberta: req.body.garagem_coberta,
      garagem_box: req.body.garagem_box,
      sala_tv: req.body.sala_tv,
      sala_jantar: req.body.sala_jantar,
      sala_estar: req.body.sala_estar,
      lavabo: req.body.lavabo,
      area_servico: req.body.area_servico,
      closet: req.body.closet,
      escritorio: req.body.escritorio,
      casa_empregada: req.body.casa_empregada,
      copa: req.body.copa,
    });

    const tabMedidas = await Medidas.create({
      area_contruida: req.body.area_contruida,
      area_privativa: req.body.area_privativa,
      area_total: req.body.area_total,
    });

    const tabPreco = await Preco.create({
      tipo_negocio: req.body.tipo_negocio,
      preco_imovel: req.body.preco_imovel,
      mostra_preco: req.body.mostra_preco,
      text_preco_opcao: req.body.text_preco_opcao,
      preco_iptu: req.body.preco_iptu,
      periodo: req.body.periodo,
      preco_condominio: req.body.preco_condominio,
      financiado: req.body.financiado,
      aceita_financiamento: req.body.aceita_financiamento,
      minhacasa_minhavida: req.body.minhacasa_minhavida,
      total_mensal_taxas: req.body.total_mensal_taxas,
      descricao_taxas: req.body.descricao_taxas,
      aceita_permuta: req.body.aceita_permuta,
      descricao_permuta: req.body.descricao_permuta,
    });

    const tabLocalizacao = await Localizacao.create({
      cep: req.body.cep,
      pais: req.body.pais,
      estado: req.body.estado,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      logradouro: req.body.logradouro,
      numero: req.body.numero,
      complemento: req.body.complemento,
      numero_unidade: req.body.numero_unidade,
      andar: req.body.andar,
      unidade_por_andar: req.body.unidade_por_andar,
      total_andar: req.body.total_andar,
      total_torres: req.body.total_torres,
      mostrar_andar_site: req.body.mostrar_andar_site,
      mostrar_numero_unidade_site: req.body.mostrar_numero_unidade_site,
      mostrar_logradouro_site: req.body.mostrar_logradouro_site,
      mostrar_bairro_site: req.body.mostrar_bairro_site,
      mostrar_complemento_site: req.body.mostrar_complemento_site,
      mostrar_numero_site: req.body.mostrar_numero_site,
      mostrar_nome_condominio_site: req.body.mostrar_nome_condominio_site,
      mostrar_mapa_site: req.body.mostrar_mapa_site,
    });

    const tabDescricao = await Descricao.create({
      titulo: req.body.titulo,
      apresentacao: req.body.apresentacao,
    });

    const tabComplemento = await Complemento.create({
      link_youtube: req.body.link_youtube,
      link_apresentacao: req.body.link_apresentacao,
    });

    if (req.files && req.files.length) {
      await Promise.all(
        req.files.map((file) =>
          Foto.create({
            foto: `/foto/${file.filename}`,
            status: req.body.status,
            id_imovel: NovoImovel.id_imovel,
          })
        )
      );
    }
    if (req.body.caracteristicas) {
      const caracteristicas = JSON.parse(req.body.caracteristicas);
      if (Array.isArray(caracteristicas)) {
        await Promise.all(
          caracteristicas.map((item) =>
            Caracteristicas.create({
              id_caracteristica: item.id_caracteristica,
              id_imovel: NovoImovel.id_imovel,
            })
          )
        );
      }
    }
    if (req.body.proximidades) {
      const proximidades = JSON.parse(req.body.proximidades);
      if (Array.isArray(proximidades)) {
        await Promise.all(
          proximidades.map((dado) =>
            Proximidades.create({
              id_proximidades: dado.id_proximidades,
              id_imovel: NovoImovel.id_imovel,
            })
          )
        );
      }
    }

    const tabPublicacao = await Publicacao.create({
      mostrar_imovel_publi: req.body.mostrar_imovel_publi,
      tarja_imovel_site_publi: req.body.tarja_imovel_site_publi,
      cor_tarja_publi: req.body.cor_tarja_publi,
      id_imovel: NovoImovel.id_imovel,
    });

    const NovoImovel = await Imovel.Publicacao({
      id_info: tabInfo.id_info,
      tem_condominio: req.body.tem_condominio,
      id_condominio: req.body.id_condominio,
      id_proprietario: req.body.id_proprietario,
      id_comodos: tabComodos.id_comodos,
      id_medidas: tabMedidas.id_medidas,
      id_preco: tabPreco.id_preco,
      id_localizacao: tabLocalizacao.id_localizacao,
      id_descricao: tabDescricao.tabDescricao,
      id_complemento: tabComplemento.id_complemento,
      id_publicacao: tabPublicacao.id_publicacao,
      id_user: req.body.id_user,
    });
  } catch (error) {
    console.error("Erro ao criar prato: ", error);
    return res
      .status(500)
      .send({ mensagem: "Erro ao criar prato", error: error.message });
  }
};

module.exports = {
  criarImovel,
};
