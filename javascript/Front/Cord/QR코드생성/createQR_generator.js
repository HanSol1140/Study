const qr = require('qrcode-generator');
const sharp = require('sharp');
const fs = require('fs');

// 전화번호 설정
const phoneNumber = '07040994350';
const telLink = `tel:07040994350`;
// URL 
const URL1 = 'https://nanonix.help?tn=1';
const URL2 = 'https://nanonix.help?tn=2';

// QR 코드 생성 (SVG 형식)
let qrCode = qr(4, 'L');
qrCode.addData(telLink);
qrCode.make();
let qrSvg = qrCode.createSvgTag({});

// SVG를 PNG로 변환하고 너비 지정하여 파일로 저장
const svgBuffer = Buffer.from(qrSvg);
const outputPath = 'phoneQRCode.png'; // PNG 파일 이름
const width = 300; // 원하는 이미지의 너비 (픽셀 단위)

sharp(svgBuffer)
  .png()
  .resize(width) // 너비 지정, 높이는 자동 조정
  .toFile(outputPath, (err, info) => {
    if (err) {
      console.error('QR 코드 생성 중 오류가 발생했습니다:', err);
    } else {
      console.log(`QR 코드가 ${width}px 너비로 PNG 형식으로 성공적으로 생성되었습니다.`, info);
    }
  });
