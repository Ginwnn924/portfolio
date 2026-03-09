import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle";
import AboutCard from "./components/AboutCard";
import SkillsCard from "./components/SkillsCard";
import ProjectCard from "./components/ProjectCard";
import OpenSourceCard from "./components/OpenSourceCard";
import { projects } from "./data/portfolio";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="portfolio">
      <div className="theme-toggle-wrapper">
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>

      <div className="bento-grid">
        <AboutCard />
        <SkillsCard />
        <ProjectCard {...projects[0]} className="card--project-flash" />
        <ProjectCard {...projects[1]} className="card--project-cine" />
        <OpenSourceCard />
      </div>
    </div>
  );
}
