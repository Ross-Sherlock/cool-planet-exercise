import "./skillscard.css";

interface SkillsCardProps {
  skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="skills-card">
      {skills.map((skill, index) => (
        <div key={skill} className="skill-item">
          <div className="skill-index">Skill #{index + 1}</div>
          <div>{skill}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
