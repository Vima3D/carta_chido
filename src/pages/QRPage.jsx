import { QRCodeSVG } from "qrcode.react";
import "./QRPage.css";

export default function QRPage() {
  return (
    <div className="qr-page">
      <div className="qr-header">
        <h1>Escanea nuestro menú</h1>
        <p>Apunta la cámara de tu teléfono al código QR</p>
      </div>

      <div className="qr-container">
        {/* CHIDO */}
        <div className="qr-card qr-chido">
          <h2>CHIDO</h2>
          <p className="qr-subtitle">Carta</p>

          <div className="qr-code">
            <QRCodeSVG
              value="https://carta-chido.vercel.app/"
              size={320}
              level="H"
              includeMargin={true}
            />
          </div>

          <p className="qr-instruction">Escanea para ver nuestra carta</p>
        </div>
      </div>
    </div>
  );
}
