import { profile } from "../data/portfolio";

export default function AboutCard() {
  return (
    <div className="card card--about">
      <h1 className="card__name">{profile.name}</h1>
      <p className="card__title">{profile.title}</p>
      <p className="card__tagline">"{profile.tagline}"</p>

      <p className="about__bio">{profile.bio}</p>

      <div className="about__exploring">
        <p className="card__section-label">Currently Exploring</p>
        <div className="about__exploring-items">
          {profile.currentlyExploring.map((item) => (
            <div key={item.label} className="about__exploring-item">
              <span className="about__exploring-label">{item.label}</span>
              <span className="about__exploring-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about__info">
        <span className="about__info-item">
          🎓 {profile.education} (GPA: {profile.gpa})
        </span>
        <span className="about__info-item">🏆 {profile.scholarship}</span>
      </div>

      <div className="about__links">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="about__link"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a href={`mailto:${profile.email}`} className="about__link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email
        </a>
      </div>
    </div>
  );
}
