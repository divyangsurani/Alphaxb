let qr;
(function () {
  qr = new QRious({
    element: document.querySelector("#qrCode"),
    size: 200,
    value: "https://alphaxb.com/",
    /*
      background: "#123456",
      backgroundAlpha: 0.7,
      foreground: "darkcyan",
      foregroundAlpha: 0.5, 
      padding: 20, 
      level: "H",
    */
  });
})();

const generateQRCode = () => {
  const qrText = document.querySelector("#qrText").value;
  qr.set({
    value: qrText,
  });
};