import { skills } from "../data/portfolio";

export default function SkillsCard() {
  return (
    <div className="card card--skills">
      <p className="card__section-label">Skills</p>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-group">
          <p className="skills-group__label">{category}</p>
          <div className="tags">
            {items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
