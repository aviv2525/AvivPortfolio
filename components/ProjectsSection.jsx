function Tag({ children }) {
  return <span className="px-2 py-1 text-xs rounded-full bg-gray-100">{children}</span>;
}

function ProjectCard({ title, descr, tech = [], links = {} }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{descr}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="mt-4 flex gap-4">
        {links.github && <a className="underline" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
        {links.demo && <a className="underline" href={links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>
    </div>
  );
}

// components/ProjectsSection.jsx
export default function ProjectsSection() {
  const projects = [
    {
      title: "PlantPal 🌱",
      descr:
        "Android app for house plants: API integration, favorites, detail screens, and offline support.",
      tech: ["Kotlin", "Android", "MVVM", "Retrofit", "Room", "Hilt", "Glide", "Perenual API"],
      links: {
        github: "https://github.com/aviv2525/PlantPal",
        demo: "https://youtu.be/hU3Em6RoTjY",
      },
    },
    {
      title: "Web Services API",
      descr:
        "RESTful API with Express.js & MongoDB. Monthly reports, user endpoints, and JSDoc documentation.",
      tech: ["Node.js", "Express", "MongoDB", "REST", "JSDoc"],
      links: {
        github: "https://github.com/aviv2525/WebServicesAPI",
      },
    },
    {
      title: "Portfolio (Next.js)",
      descr:
        "Responsive portfolio with Tailwind, deployed on Netlify with CI/CD from GitHub.",
      tech: ["Next.js", "React", "Tailwind", "Netlify"],
      links: {
        github: "https://github.com/aviv2525/portfolio",
        demo: "https://avivportfolio2525.netlify.app/",
      },
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
          Projects
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 group-hover:text-gray-700 transition">
                  {p.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm">{p.descr}</p>

                {/* Tech tags */}
                {p.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4">
                  {p.links?.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {p.links?.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {p.title.includes("PlantPal") ? "Video demo →" : "Live demo →"}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
