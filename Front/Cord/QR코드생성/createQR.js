const QRCode = require('qrcode');
const path = require('path');

// QR 코드에 넣을 데이터
const qrCodeData = `https://artvizual.com/`;

// QR 코드 옵션 설정
const qrCodeOptions = {
  errorCorrectionLevel: 'H',
  type: 'image/jpg',
  quality: 1,
  margin: 1,
  width: 500,
  color: {
    dark: '#000000FF',
    light: '#FFFFFFFF',
  },
};

// __dirname을 사용하여 현재 폴더에 QR 코드 파일 생성
const filePath = path.join(__dirname, "QR" + ".jpg");

QRCode.toFile(filePath, qrCodeData, qrCodeOptions, (err) => {
  if (err) {
    console.error('QR 코드 생성 중 오류가 발생했습니다:', err);
  } else {
    console.log('QR 코드가 성공적으로 생성되었습니다:', filePath);
  }
});
