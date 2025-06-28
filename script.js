function generateQR() {
  const container = document.getElementById('qr-code');
  const text = document.getElementById('qrText').value;

  container.innerHTML = ''; // Clear previous QR

  if (!text) {
    alert('Please enter text or a URL');
    return;
  }

  QRCode.toCanvas(
    document.createElement('canvas'),
    text,
    { width: 256 },
    function (err, canvas) {
      if (err) console.error(err);
      container.appendChild(canvas);
    }
  );
}
