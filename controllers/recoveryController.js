const bcrypt = require('bcrypt');
const User = require('../models/tb_usuarios');

const validaEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    const usuario = await User.findOne({
      where: { email: email }
    });

    if (!usuario) {
      return res.status(404).send({ mensagem: "Usuário não encontrado." });
    }
    return res.status(200).send({ response: usuario });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const alterarSenha = async (req, res) => {
  try {
    const usuario = await User.findByPk(req.body.id_user);
    if (!usuario) {
      return res.status(404).send({ message: "Usuário não encontrado" });
    }

    const hashedPassword = await bcrypt.hash(req.body.senha, 10);

    usuario.senha = hashedPassword;

    await usuario.save();
    return res
      .status(201)
      .send({ mensagem: "Dados de usuário alterados com sucesso!" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

/**
 * @swagger
 * components:
 *   schemas:
 *     ValidaEmailRequest:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Email do usuário a ser validado
 *   responses:
 *     UsuarioNaoEncontrado:
 *       description: Usuário não encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 example: Usuário não encontrado.
 *     ErroServidor:
 *       description: Erro no servidor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *     SucessoUsuario:
 *       description: Operação realizada com sucesso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 example: Dados de usuário alterados com sucesso!
 */

/**
 * @swagger
 * /recovery/validar-email:
 *   post:
 *     summary: Valida o email de um usuário
 *     tags: [Recuperação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidaEmailRequest'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/SucessoUsuario'
 *       404:
 *         $ref: '#/components/responses/UsuarioNaoEncontrado'
 *       500:
 *         $ref: '#/components/responses/ErroServidor'
 */

/**
 * @swagger
 * /recovery/alterar-senha:
 *   patch:
 *     summary: Altera a senha de um usuário
 *     tags: [Recuperação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_user
 *               - senha
 *             properties:
 *               id_user:
 *                 type: integer
 *                 description: ID do usuário que terá a senha alterada
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Nova senha do usuário
 *     responses:
 *       201:
 *         $ref: '#/components/responses/SucessoUsuario'
 *       404:
 *         $ref: '#/components/responses/UsuarioNaoEncontrado'
 *       500:
 *         $ref: '#/components/responses/ErroServidor'
 */


module.exports = {
  validaEmail,
  alterarSenha,
};
