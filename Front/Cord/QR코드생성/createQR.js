const QRCode = require('qrcode');

// 전화번호 설정
const phoneNumber = '07040994350'; // 여기에 QR 코드를 통해 전화를 걸 전화번호를 입력하세요.
const telLink = `tel:${phoneNumber}`;

// QR 코드 생성
QRCode.toFile(
  'phoneQRCode.png', // QR 코드 이미지 파일 이름
  telLink, // QR 코드 데이터
  {
    width: 300, // QR 코드 이미지의 너비를 300픽셀로
    color: {
      dark: '#000000', // QR 코드의 색상
      light: '#ffffff' // QR 코드 배경의 색상
    }
  },
  function (err) {
    if (err) throw err;
    console.log('QR 코드가 성공적으로 생성되었습니다.');
  }
);
