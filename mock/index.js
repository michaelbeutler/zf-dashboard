const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
const port = 3000;

const app = express();

app.use(cors());

const vehicles = [
  {
    id: 1,
    image: "test",
    name: "BMW",
    model: 2022,
    driver_name: "Ayman",
    license_number: "ADS24121",
  },
  {
    id: 2,
    image: "test",
    name: "BMW",
    model: 2022,
    driver_name: "Ayman",
    license_number: "ADS24121",
  },
  {
    id: 3,
    image: "test",
    name: "BMW",
    model: 2022,
    driver_name: "Ayman",
    license_number: "ADS24121",
  },
];

app.post("/upload_data", upload.array("files", 4), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  req.files.forEach((f, i) => {
    fs.renameSync(f.path, `uploads/${req.body.li}_${i}.jpg`, (err) => {
      if (err) throw err;
    });
  });
});

app.get("/vehicles", (req, res) => {
  res.send(JSON.stringify(vehicles));
});

app.get("/vehicles/:id", (req, res) => {
  const vehicle = vehicles.find((v) => v.id == req.params.id);
  res.send(JSON.stringify(vehicle));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
