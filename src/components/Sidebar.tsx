import { resumeData } from '@/data/resume';
import { Phone, Mail, Send, Linkedin, MapPin, Briefcase, Globe } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="cv-sidebar">
      {/* Contacts */}
      <div className="sidebar-section">
        <div className="sidebar-header">Контакты</div>
        <div className="sidebar-content">
          <div className="contact-item">
            <Phone size={16} />
            <span className="contact-value">{resumeData.personal.phone}</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span className="contact-value">
              <a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</a>
            </span>
          </div>
          <div className="contact-item">
            <Send size={16} />
            <span className="contact-value">
              <a href={`https://t.me/${resumeData.personal.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                {resumeData.personal.telegram}
              </a>
            </span>
          </div>
          <div className="contact-item">
            <Linkedin size={16} />
            <span className="contact-value">
              <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                {resumeData.personal.linkedin}
              </a>
            </span>
          </div>
          
          <div style={{ height: '16px' }} />
          
          <div className="contact-item">
            <Globe size={16} />
            <div>
              <span className="contact-label">Гражданство:</span>
              <span className="contact-value">{resumeData.personal.citizenship}</span>
            </div>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <div>
              <span className="contact-label" style={{ fontWeight: 700 }}>Локация:</span>
              <span className="contact-value">{resumeData.location.value}</span>
            </div>
          </div>
          <div className="contact-item">
            <Briefcase size={16} />
            <div>
              <span className="contact-label">Занятость:</span>
              <span className="contact-value">{resumeData.personal.employment}</span>
              <br />
              <span className="contact-value">{resumeData.personal.relocation}</span>
              <br />
              <span className="contact-value">{resumeData.personal.travel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="sidebar-section">
        <div className="sidebar-header">Инструменты</div>
        <div className="sidebar-content">
          <div className="tools-list">
            {resumeData.tools.map((tool, index) => (
              <div key={index} className="tool-item">{tool}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualities */}
      <div className="sidebar-section">
        <div className="sidebar-header">Качества</div>
        <div className="sidebar-content">
          <ul className="qualities-list">
            {resumeData.qualities.map((quality, index) => (
              <li key={index}>{quality}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Languages */}
      <div className="sidebar-section">
        <div className="sidebar-header">Языки</div>
        <div className="sidebar-content">
          {resumeData.languages.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="language-name">
                <span>{lang.language}</span>
                <div className="language-dots">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`dot${i < lang.dots ? ' filled' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className="language-level">{lang.level}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
