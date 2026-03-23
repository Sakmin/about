import { resumeData } from '@/data/resume';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{resumeData.personal.name}</h1>
      <h2 className="cv-title">{resumeData.personal.title}</h2>
      {resumeData.personal.summary && (
        <p className="cv-summary" style={{ marginTop: '1rem', marginBottom: '1rem', lineHeight: '1.6' }}>
          {resumeData.personal.summary}
        </p>
      )}
      <div className="cv-info">
        <User size={16} />
        <span>Возраст: {resumeData.personal.age} лет</span>
      </div>
    </header>
  );
}
