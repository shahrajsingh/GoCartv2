const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb, next) => {
    let img = req.body.Image;
    if (img === "https://picsum.photos/200?grayscale") {
      console.log(" in if");
      next();
    } else {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      cb(error, "images");
    }
  },
  filename: (req, file, cb) => {
    let img = req.body.Image;
    if (img === "https://picsum.photos/200?grayscale") {
      console.log(" in if 1");
      next();
    } else {
      const name = file.originalname.toLowerCase().split(" ").join("-");
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + "-" + Date.now() + "." + ext);
    }
  },
});

module.exports = multer({ storage: storage }).single("image");
