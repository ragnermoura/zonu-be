const ImagemCondominio = require("../models/condominio/tb_novo_condominio");
const fs = require('fs');
const path = require('path');


const uploadImages = async (req, res) => {
    const { id_condominio, id_user, status } = req.body; 

    const files = req.files; 

    try {
        
        const images = await Promise.all(files.map(file => {
            return ImagemCondominio.create({
                condominio: `/condominio/${file.filename}`, 
                status,
                id_condominio,
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

const getImagesBycondominioId = async (req, res) => {
    const { id_condominio } = req.params; 

    try {
        const images = await ImagemCondominio.findAll({
            where: { id_condominio }, 
            attributes: ['condominio', 'status', 'id_imagem', 'id_user'], 
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
    const { condominio, status } = req.body;

    try {
        const image = await ImagemCondominio.findByPk(id_imagem);

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Imagem não encontrada",
            });
        }

        
        const updatedImage = await image.update({
            condominio: condominio || image.condominio,
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
    const { id_imagem } = req.params;

    try {
        const image = await ImagemCondominio.findByPk(id_imagem);

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Imagem não encontrada",
            });
        }

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
    getImagesBycondominioId,
    editImage,
    deleteImage,
  };