var QRCode = require("qrcode");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  const inputUrl = req.query.url;

  QRCode.toDataURL(inputUrl, function (err, url) {
    console.log(url);
    res.send(url);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
