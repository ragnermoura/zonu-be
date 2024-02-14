const Perfil = require("../models/tb_perfil");
const User = require("../models/tb_usuarios");


const uploadRg = async (req, res) => {

    const { id_perfil } = req.params;
    const { filename } = req.file;

    const update = {
        pdf_rg: `/documentos/${filename}`
    }

    try {

        await Perfil.update(update, {
            where: {
                id_perfil
            }
        }
        )

        return res.status(201).json({
            success: true,
            mensagem: 'Pdf do RG cadastrado com sucesso!',
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }
};

const getRg = async (req, res) => {

    try {

        const { id_perfil } = req.params

        const pdf_rg = await Perfil.findOne({
            where: { id_perfil },
            attributes: ['pdf_rg']
        })

        res.status(200).json({
            success: true,
            message: 'Sucesso',
            pdf_rg
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }

};

const uploadCnpj = async (req, res) => {

    const { id_perfil } = req.params

    const { filename } = req.file

    const update = {
        pdf_cnpj: `/documentos/${filename}`
    }

    try {

        await Perfil.update(update, {
            where: {
                id_perfil
            }
        }
        )

        return res.status(201).json({
            success: true,
            mensagem: 'Pdf do CNPJ cadastrado com sucesso!',
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }
};

const getCnpj = async (req, res) => {

    try {

        const { id_perfil } = req.params

        const pdf_cnpj = await Perfil.findOne({
            where: { id_perfil },
            attributes: ['pdf_cnpj']
        })

        res.status(200).json({
            success: true,
            message: 'Sucesso',
            pdf_cnpj
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }

};

const uploadImage = async (req, res) => {

    const { id_user } = req.params

    const { filename } = req.file

    const update = {
        avatar: `/avatar/${filename}`
    }

    try {

        await User.update(update, {
            where: {
                id_user
            }
        }
        )

        return res.status(201).json({
            success: true,
            mensagem: 'Imagem cadastrada com sucesso!',
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }
}

const getImage = async (req, res) => {

    try {

        const { id_user } = req.params

        const image = await User.findOne({
            where: { id_user },
            attributes: ['avatar']
        })

        res.status(200).json({
            success: true,
            message: 'Sucesso',
            image
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Ocorreu um erro'
        })
    }

}

module.exports = {
    uploadRg,
    getRg,
    uploadCnpj,
    getCnpj,
    getImage,
    uploadImage,
};
