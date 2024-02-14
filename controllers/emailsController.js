const path = require('path');
const fs = require("fs").promises;
const config = require("../helpers/email-config")
require('dotenv').config();


const enviarBoasVindas = async (req, res) => {
    const { email, nome, id, perfil } = req.body;
    try {
        const htmlFilePath = path.join(__dirname, '../template/welcome/index.html');
        let htmlContent = await fs.readFile(htmlFilePath, "utf8");

        htmlContent = htmlContent
            .replace("{{nome}}", nome)
            .replace("{{emailclient}}", email)
            .replace("{{id}}", id)
            .replace("{{perfil}}", perfil)

        config.transporter

        let mailOptions = {
            from: `"Atendimento Zonu" ${process.env.EMAIL_FROM}`,
            to: email,
            subject: "✅ Conta criada com sucesso!",
            html: htmlContent,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada: %s", info.messageId);
        res.send("Email enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar email: ", error);
        res.send("Erro ao enviar email.");
    }
};

const enviarNovoCadastroAnfitriao = async (req, res) => {
    const { email, nomecliente } = req.body;
    const nome = 'Rodrigo'
    try {
        const htmlFilePath = path.join(__dirname, '../template/alerts/conta.html');
        let htmlContent = await fs.readFile(htmlFilePath, "utf8");

        htmlContent = htmlContent
            .replace("{{nome}}", nome)
            .replace("{{emailclient}}", email)
            .replace("{{nomeclient}}", nomecliente)

        config.transporter

        let mailOptions = {
            from: `"Atendimento Trust" ${process.env.EMAIL_FROM}`,
            to: process.env.EMAIL_ANFITRIAO,
            subject: "✅ Nova conta criada",
            html: htmlContent,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada: %s", info.messageId);
        res.send("Email enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar email: ", error);
        res.send("Erro ao enviar email.");
    }
};

const enviarDocAnfitriao = async (req, res) => {
    const { email } = req.body;
    const nome = process.env.NOME_ANFITRIAO
    try {
        const htmlFilePath = path.join(__dirname, '../template/alerts/documentos.html');
        let htmlContent = await fs.readFile(htmlFilePath, "utf8");

        htmlContent = htmlContent
            .replace("{{nome}}", nome)
            .replace("{{emailclient}}", email)

        config.transporter

        let mailOptions = {
            from: `"Atendimento Trust" ${process.env.EMAIL_FROM}`,
            to: process.env.EMAIL_ANFITRIAO,
            subject: "✅ Novos doumentos enviados...",
            html: htmlContent,
        };

    
        let info = await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada: %s", info.messageId);
        res.send("Email enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar email: ", error);
        res.send("Erro ao enviar email.");
    }
};

const enviarEmailAcesso = async (req, res) => {
    const { email, nome, regiao, plataforma, navegador, enderecoIp } = req.body;
    try {
      const htmlFilePath = path.join(__dirname, '../template/acesso/index.html');
      let htmlContent = await fs.readFile(htmlFilePath, "utf8");
  
      htmlContent = htmlContent
      .replace("{{nome}}", nome)
      .replace("{{regiao}}", regiao)
      .replace("{{plataforma}}", plataforma)
      .replace("{{navegador}}", navegador)
      .replace("{{enderecoIp}}", enderecoIp);
  
     config.transporter
  
      let mailOptions = {
        from: `"Segurança Trust" ${process.env.EMAIL_FROM}`,
        to: email,
        subject: "🚨 Detectamos um novo acesso...",
        html: htmlContent,
      };
  
      let info = await transporter.sendMail(mailOptions);
      console.log("Mensagem enviada: %s", info.messageId);
      res.send("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar email: ", error);
      res.send("Erro ao enviar email.");
    }
};

const enviarAlteraSenha = async (req, res) => {
    const { email, nome, regiao, plataforma, navegador, enderecoIp } = req.body;
    try {
      const htmlFilePath = path.join(__dirname, '../template/acesso/index.html');
      let htmlContent = await fs.readFile(htmlFilePath, "utf8");
  
      htmlContent = htmlContent
      .replace("{{nome}}", nome)
      .replace("{{regiao}}", regiao)
      .replace("{{plataforma}}", plataforma)
      .replace("{{navegador}}", navegador)
      .replace("{{enderecoIp}}", enderecoIp);
  
     config.transporter
  
      let mailOptions = {
        from: `"Segurança Trust" ${process.env.EMAIL_FROM}`,
        to: email,
        subject: "🚨 Senha trocada com sucesso!",
        html: htmlContent,
      };
  
      let info = await transporter.sendMail(mailOptions);
      console.log("Mensagem enviada: %s", info.messageId);
      res.send("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar email: ", error);
      res.send("Erro ao enviar email.");
    }
  };

module.exports = {
    enviarBoasVindas,
    enviarNovoCadastroAnfitriao,
    enviarDocAnfitriao,
    enviarEmailAcesso,
    enviarAlteraSenha


};