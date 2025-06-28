function generateQR() {
  const container = document.getElementById('qr-code');
  const text = document.getElementById('qrText').value.trim();

  container.innerHTML = ''; // Clear previous QR

  if (!text) {
    alert('Please enter text or a URL');
    return;
  }

  const canvas = document.createElement('canvas');

  QRCode.toCanvas(canvas, text, { width: 256 }, function (err) {
    if (err) {
      console.error('Error generating QR Code:', err);
      alert('Failed to generate QR code.');
      return;
    }
    container.appendChild(canvas);
  });
}
