import { resumeData } from '@/data/resume';
import { User } from 'lucide-react';

export default function Header() {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{resumeData.personal.name}</h1>
      <h2 className="cv-title">{resumeData.personal.title}</h2>
      <div className="cv-info">
        <User size={16} />
        <span>Возраст: {resumeData.personal.age} лет</span>
      </div>
    </header>
  );
}
