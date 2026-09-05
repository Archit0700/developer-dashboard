import "./styles.css";

type Project = {
  name: string;
  description: string;
  stack: string[];
  focus: string;
  link: string;
};

const projects: Project[] = [
  {
    name: "MANIPAL-HUB",
    description: "Full-stack campus platform focused on useful student workflows and scalable application structure.",
    stack: ["TypeScript", "React", "API"],
    focus: "Full-stack",
    link: "https://github.com/Archit0700/MANIPAL-HUB",
  },
  {
    name: "AI Pesticide Sprinkler",
    description: "Browser-based plant disease detection interface with TensorFlow.js inference and analytics.",
    stack: ["React", "TensorFlow.js", "Vite"],
    focus: "AI / ML",
    link: "https://github.com/Archit0700/IICFINAL",
  },
];

const technologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "C++",
  "TensorFlow.js",
  "Git",
];

const projectCards = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-card__top">
          <span class="eyebrow">${project.focus}</span>
          <a href="${project.link}" target="_blank" rel="noreferrer" aria-label="Open ${project.name} on GitHub">↗</a>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </article>
    `,
  )
  .join("");

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root was not found.");
}

app.innerHTML = `
  <main class="shell">
    <header class="topbar">
      <div class="brand">AD</div>
      <a class="github-link" href="https://github.com/Archit0700" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </header>

    <section class="hero">
      <div>
        <span class="eyebrow">DEVELOPER DASHBOARD</span>
        <h1>Software engineering, <span>built in public.</span></h1>
        <p class="hero-copy">
          A compact portfolio surface for tracking projects, technical focus, and the engineering work behind them.
        </p>
        <div class="hero-actions">
          <a class="button button--primary" href="https://github.com/Archit0700" target="_blank" rel="noreferrer">View GitHub</a>
          <a class="button button--secondary" href="#projects">Explore projects</a>
        </div>
      </div>
      <aside class="profile-card">
        <div class="status"><span></span> Open to opportunities</div>
        <div class="profile-initials">A</div>
        <h2>Archit</h2>
        <p>Full-stack & AI-focused developer</p>
        <div class="profile-stats">
          <div><strong>2</strong><span>featured builds</span></div>
          <div><strong>8</strong><span>core technologies</span></div>
        </div>
      </aside>
    </section>

    <section class="section" id="projects">
      <div class="section-heading">
        <div>
          <span class="eyebrow">SELECTED WORK</span>
          <h2>Projects that show range</h2>
        </div>
        <p>Full-stack product work alongside applied AI and browser-based ML.</p>
      </div>
      <div class="projects-grid">${projectCards}</div>
    </section>

    <section class="section split">
      <div class="panel">
        <span class="eyebrow">TECH STACK</span>
        <h2>Tools I build with</h2>
        <div class="tags tags--large">
          ${technologies.map((technology) => `<span>${technology}</span>`).join("")}
        </div>
      </div>
      <div class="panel panel--dark">
        <span class="eyebrow">ENGINEERING SIGNALS</span>
        <h2>What this project demonstrates</h2>
        <ul>
          <li>Typed application data with strict TypeScript.</li>
          <li>Responsive UI built without a component framework dependency.</li>
          <li>Clear separation between data, markup, and visual design.</li>
          <li>A base that can evolve into a GitHub API analytics dashboard.</li>
        </ul>
      </div>
    </section>

    <footer>
      <span>Developer Dashboard · 2026</span>
      <span>Built with TypeScript + Vite</span>
    </footer>
  </main>
`;
