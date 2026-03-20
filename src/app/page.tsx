import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import { resumeData } from '@/data/resume';
import { BookOpen, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="cv-container">
      <Sidebar />
      
      <main className="cv-main">
        <Header />
        
        <Experience />
        
        {/* Education */}
        <section className="cv-section">
          <h3 className="cv-section-title">
            <div className="section-icon">
              <BookOpen size={20} />
            </div>
            Образование
          </h3>
          <div className="education-grid">
            {resumeData.education.map((edu, i) => (
              <div key={i} className="education-item">
                <div className="education-degree">{edu.school}</div>
                <div className="education-school">{edu.degree}</div>
                <div className="education-year">{edu.year} • Средний балл: {edu.gpa}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Courses */}
        <section className="cv-section">
          <h3 className="cv-section-title">Курсы</h3>
          <div className="courses-grid">
            {resumeData.courses.map((course, i) => (
              <div key={i} className="course-item">
                <div className="course-name">{course.name}</div>
                <div className="course-school">{course.school}</div>
                <div className="course-year">{course.year}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* About */}
        <section className="cv-section">
          <h3 className="cv-section-title">
            <div className="section-icon">
              <Heart size={20} />
            </div>
            О себе
          </h3>
          <p className="about-text">{resumeData.about}</p>
          <p className="about-text">
            <strong>Хобби:</strong> {resumeData.hobbies}
          </p>
        </section>
      </main>
    </div>
  );
}
