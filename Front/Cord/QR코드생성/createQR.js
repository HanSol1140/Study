// npm i qrcode
const QRCode = require('qrcode');

const qrCodeData = `tel:070-4099-4350`;
// const qrCodeData = `hsadfsadfsasadfasdf`;
// const qrCodeData = `http://nanonix.lol`;
// const qrCodeData = `www.naver.com`;
// const qrCodeData = `http://192.168.0.137:3000/CallPage`;

const qrCodeOptions = {
  errorCorrectionLevel: 'H',
  type: 'image/jpg',
  quality: 1,
  margin: 1,
  width: 300,
  color: {
    dark: '#000000FF',
    light: '#FFFFFFFF',
  },
};

QRCode.toFile('phoneQRCode.jpg', qrCodeData, qrCodeOptions, (err) => {
  if (err) {
    console.error('QR 코드 생성 중 오류가 발생했습니다:', err);
  } else {
    console.log('QR 코드가 성공적으로 생성되었습니다.');
  }
});
// https://nanonix.lol