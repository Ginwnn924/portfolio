export default function ProjectCard({
  icon,
  name,
  role,
  teamSize,
  period,
  description,
  highlights,
  tech,
  repo,
  className,
}) {
  return (
    <div className={`card ${className || ""}`}>
      <div className="project__header">
        <span className="project__icon">{icon}</span>
        <span className="project__name">{name}</span>
      </div>
      <p className="project__meta">
        {role} · Team Size: {teamSize} · {period}
      </p>
      <p className="project__description">{description}</p>
      <ul className="project__highlights">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="tags">
        {tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="project__repo"
      >
        View Repository <span className="arrow">→</span>
      </a>
    </div>
  );
}
