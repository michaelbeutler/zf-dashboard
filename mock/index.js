const express = require("express");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
const port = 3000;

const app = express();

app.post("/upload_images", upload.array("image", 4), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  req.files.forEach((f, i) => {
    fs.renameSync(f.path, `uploads/${req.body.li}_${i}.jpg`, (err) => {
      if (err) throw err;
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
