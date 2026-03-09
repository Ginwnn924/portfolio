import { openSource } from "../data/portfolio";

export default function OpenSourceCard() {
  return (
    <div className="card card--opensource">
      <p className="card__section-label">Open Source</p>
      <div className="opensource">
        <div className="opensource__left">
          <p className="opensource__project-name">🌐 {openSource.project}</p>
          <p className="opensource__stars">⭐ {openSource.stars} stars</p>
          <p className="opensource__desc">{openSource.description}</p>
        </div>
        <a
          href={openSource.pr}
          target="_blank"
          rel="noopener noreferrer"
          className="opensource__link"
        >
          View PR #87 <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}
