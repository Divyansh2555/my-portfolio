import "../styles/Skills.css";

function Skill() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js (Express)", "Django", "FastAPI"],
    Databases: ["MySQL", "SQL", "PostgreSQL", "MongoDB"],
    Mobile: ["Flutter"],
    "AI / ML / DL": ["Python", "PyTorch", "TensorFlow", "Scikit-learn"],
    DevOps: ["Docker", "CI/CD", "Git", "GitHub"],
    "UI/UX Design": ["Figma", "Wireframing", "Prototyping"],
  };

  return (
    <div className="skill-page">
      <h1>My Skills 🚀</h1>
      <p className="subtitle">Technologies I work with</p>

      <div className="skill-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div className="skill-card" key={index}>
            <h2>{category}</h2>

            <div className="skill-badges">
              {items.map((skill, i) => (
                <span className="badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;