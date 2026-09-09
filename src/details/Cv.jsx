import React from 'react';
import './Cv.css';

// Asset imports from your src/assets folder
import resumePdf from '../assets/Ravi_Resume-Devops.pdf';
import mopsDoc from '../assets/Ravi_complete_mop.docx';

const Cv = () => {
  return (
    <main className="cv-download-page">
      <div className="cv-portal-card">
        <div className="card-badge">Official Documents</div>
        <h1 className="cv-heading">Curriculum Vitae & Technical MOPs</h1>
        <p className="cv-subheading">
          Directly inspect or download verified engineering resumes and standard operating runbooks.
        </p>

        <div className="documents-container">
          {/* Document 1: PDF Resume */}
          <div className="doc-box">
            <div className="doc-info">
              <span className="doc-icon">📄</span>
              <div>
                <h3 className="doc-title">DevOps & Cloud Engineering Resume</h3>
                <span className="doc-format">Format: PDF (Verified)</span>
              </div>
            </div>

            <div className="doc-btn-group">
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-portal outline"
              >
                👁️ View PDF
              </a>
              <a 
                href={resumePdf} 
                download="Thota_Ravi_Kumar_Resume.pdf" 
                className="btn-portal filled"
              >
                ⬇️ Download
              </a>
            </div>
          </div>

          {/* Document 2: Word Doc MOPs */}
          <div className="doc-box">
            <div className="doc-info">
              <span className="doc-icon">📑</span>
              <div>
                <h3 className="doc-title">Production Method of Procedure (MOP)</h3>
                <span className="doc-format">Format: Word Document (.docx)</span>
              </div>
            </div>

            <div className="doc-btn-group">
              <a 
                href={mopsDoc} 
                download="Ravi_complete_mop.docx" 
                className="btn-portal filled"
              >
                ⬇️ Download (.docx)
              </a>
            </div>
          </div>
        </div>

        <div className="doc-footer-hint">
          <span>ℹ️</span>
          <p>
            The MOP contains real-world operational execution steps, validation commands, and rollback procedures.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Cv;
