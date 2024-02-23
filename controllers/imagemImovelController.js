const ImagemImovel = require("../models/tb_imagem_imovel");
const fs = require('fs');
const path = require('path');


const uploadImages = async (req, res) => {
    const { id_novo_imovel, id_user, status } = req.body; 

    const files = req.files; 

    try {
        const images = await Promise.all(files.map(file => {
            return ImagemImovel.create({
                imovel: `/imovel/${file.filename}`,
                status,
                id_novo_imovel,
                id_user
            });
        }));

        return res.status(201).json({
            success: true,
            mensagem: "Imagens cadastradas com sucesso!",
            images: images
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Ocorreu um erro ao tentar cadastrar as imagens",
        });
    }
};

const getImagesByImovelId = async (req, res) => {
    const { id_novo_imovel } = req.params;

    try {
        const images = await ImagemImovel.findAll({
            where: { id_novo_imovel },
            attributes: ['imovel', 'status', 'id_imagem', 'id_user'],
        });

        if (images.length > 0) {
            res.status(200).json({
                success: true,
                message: "Sucesso",
                images,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Nenhuma imagem encontrada para este imóvel",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Ocorreu um erro",
        });
    }
};

const editImage = async (req, res) => {
    const { id_imagem } = req.params;
    const { imovel, status } = req.body;

    try {
        const image = await ImagemImovel.findByPk(id_imagem);

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Imagem não encontrada",
            });
        }

       
        const updatedImage = await image.update({
            imovel: imovel || image.imovel,
            status: status || image.status,
        });

        return res.status(200).json({
            success: true,
            message: "Imagem atualizada com sucesso!",
            image: updatedImage,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Ocorreu um erro ao tentar atualizar a imagem",
        });
    }
};

const deleteImage = async (req, res) => {
    const { id_imagem } = req.params; // ID da imagem a ser excluída

    try {
        const image = await ImagemImovel.findByPk(id_imagem);

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Imagem não encontrada",
            });
        }

        // Remove a imagem
        await image.destroy();

        return res.status(200).json({
            success: true,
            message: "Imagem excluída com sucesso!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Ocorreu um erro ao tentar excluir a imagem",
        });
    }
};

module.exports = {
    uploadImages,
    getImagesByImovelId,
    editImage,
    deleteImage,
  };