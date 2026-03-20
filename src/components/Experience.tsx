import { resumeData } from '@/data/resume';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="cv-section">
      <h3 className="cv-section-title">
        <div className="section-icon">
          <Briefcase size={20} />
        </div>
        Опыт работы
      </h3>
      
      <div>
        {resumeData.experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-period">{job.period}</div>
            <div className="experience-content">
              <div className="experience-company">{job.company}</div>
              
              {job.roles && job.roles.length > 0 ? (
                <div className="experience-roles">
                  {job.roles.map((role, i) => (
                    <div key={i} className="experience-role-item">
                      <span className="experience-role-title">{role.title}</span>
                      <span className="experience-role-period"> — {role.period}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="experience-role">{job.role}</div>
              )}
              
              {job.functions && job.functions.length > 0 && (
                <>
                  <div className="experience-subtitle">Функции</div>
                  <ul className="experience-list">
                    {job.functions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {job.achievements && job.achievements.length > 0 && (
                <>
                  <div className="experience-subtitle">{job.sectionTitle || "Достижения"}</div>
                  <ul className="experience-list">
                    {job.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {job.tools && (
                <div className="experience-tools">{job.tools}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
