import "../styles/Skills.css";

function Skill() {
  return (
    <div className="skill-page">
      <h1>My Skills 🚀</h1>

      <div className="skill-container">
        <div className="skill-card">
          <h3>HTML</h3>
          <p>Web structure banane me strong.</p>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
          <p>Responsive aur modern design banana.</p>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <p>Dynamic aur interactive websites.</p>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <p>Component based UI development.</p>
        </div>

        <div className="skill-card">
          <h3>Git & GitHub</h3>
          <p>Version control aur collaboration.</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;