const multer = require("multer");
const path = require("path");

const saveStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "avatar";

    if (req.baseUrl.includes('logo')) {
      folder = "logo";
    } else if (req.baseUrl.includes('user')) {
      folder = "avatar";
    } else if (req.baseUrl.includes('condominio')) {
      folder = "condominio";
    } else if (req.baseUrl.includes('perfil')) {
      folder = "documentos";
    } else if (req.baseUrl.includes('imovel')) {
      folder = "imovel";
    }


    cb(null, `public/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: saveStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|pdf|jpeg|svg|webp)$/)) {
      return cb(new Error("Por favor, envie apenas png, jpg ou Pdf!"));
    }
    cb(undefined, true);
  },
});

const fileUpload = multer({
  storage: saveStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(new Error("Por favor, envie apenas png, jpg ou Pdf!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload, fileUpload };