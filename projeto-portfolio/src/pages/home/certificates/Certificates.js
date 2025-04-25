import React from 'react';
import { Eye } from 'lucide-react';
import './Certificates.css';

import useTexts from '../../../hooks/useTexts';

const extractDriveId = (url) => {
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
  ];
  for (let pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const Certificates = ({ certificates }) => {
  const texts = useTexts ();

  return (
    <section id="certificates">
      <div className="certificates-content">
        <h2 className="certificates-title">{texts.TitlePage_Certificate}</h2>
        <hr className="certificates-divider" />
        <ul className="certificates-list">
          {certificates.map((cert, index) => {
            const fileId = extractDriveId(cert.pdfLink);
            const thumbnailUrl = `https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${fileId}`;
            const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;

            return (
              <li key={index} className="certificate-item">
                <div className="certificate-preview">
                  <img src={thumbnailUrl} alt={`Miniatura de ${cert.title}`} />
                  <h3 className="certificate-title-text">{cert.title}</h3>
                    <div className="certificate-actions">
                    <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="view-certificate-button">
                      <Eye size={16} style={{ marginRight: '6px' }} />
                      {texts.ButtonView_Certificate}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;