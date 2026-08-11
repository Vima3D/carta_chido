import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
  return (
    <QRCodeSVG
      value="https://carta-chido.vercel.app/"
      size={300}
      level="H"
      includeMargin={true}
    />
  );
}
