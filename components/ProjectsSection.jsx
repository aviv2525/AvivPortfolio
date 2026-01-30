// components/ProjectsSection.jsx
function Tag({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
      {children}
    </span>
  );
}


function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}


export default function ProjectsSection() {
  const projects = [
    {
      title: "PlantPal 🌱 - (Kotlin Android)",
      description:
        "Android app for house plants: API integration, favorites, detail screens, and offline support.",
      tech: ["Kotlin", "Android", "MVVM", "Retrofit", "Room", "Hilt", "Glide", "Perenual API"],
      links: {
        github: "https://github.com/aviv2525/PlantPal",
        demo: "https://youtu.be/hU3Em6RoTjY",
        CARD: "/docs/plantpal-card.jpg",
        photo: "/docs/Checkers-photo.png",
      },
    },
    {
      title: "Web Services API",
      description:
        "RESTful API with Express.js & MongoDB. Monthly reports, user endpoints, and JSDoc documentation.",
      tech: ["Node.js", "Express", "MongoDB", "REST", "JSDoc"],
      links: {
        github: "https://github.com/aviv2525/asyncronic-final-project",
      },
    },
    {
      title: "GoBrew - (React Native App)",
      description:
        "Social-like app with profiles, media gallery, and instant booking feature.",
      tech: ["React Native", "Firebase", "Firestore"],
      links: {
        github: "https://github.com/aviv2525/GoBrew",
      },
    },
    {
      title: "Landing page ☕ - (Kotlin Android)",
      description: "Landing page for small coffee shop menu.",
      tech: ["Kotlin", "Android", "XML"],
      links: {
        github: "https://github.com/aviv2525/Aviv-Coffee-App",
        demo: "https://www.youtube.com/shorts/KU-f9GFVDSs",
      },
    },
    {
      title: "Checkers Game 🎲 - C#.NET APP",
      description:
        "A simple checkers game with an opponent built using C# and WinForms. (Version 1)",
      tech: ["C#", ".NET", "WinForms"],
      links: {
        github: "https://github.com/aviv2525/checkers-game",
        photo: "/docs/Checkers Version1.png",
      },
    },
    {
      title: "UiPath - 🤖 Automation Bot",
      description:
        "An automation bot built with UiPath that streamlines business processes by interacting with files, websites, and systems, significantly reducing manual work and human errors.",
      tech: ["RPA", "UiPath", "Automation"],
      links: {
        // שים לב – יש פה נקודה בסוף ה-URL אצלך (זה ישבור את הלינק)
        github: "https://github.com/aviv2525/UiPath-Outlook-Contacts-From-Excel.",
      },
    },
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-12">
          Projects
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="
                group
                flex h-full flex-col
                rounded-2xl 
                border border-gray-200 
                bg-white 
                p-5 
                shadow-sm 
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* כותרת + תיאור */}
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {p.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm">
                  {p.description}
                </p>

                {/* Tech tags */}
                {p.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>

              {/* Links – יושבים בתחתית הכרטיס */}
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-3">
                {p.links?.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    View on GitHub
                    <ArrowIcon />
                  </a>
                )}

                {p.links?.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    {p.title.includes("PlantPal") ? "Video demo" : "Live demo"}
                    <ArrowIcon />
                  </a>
                )}

                {p.links?.CARD && (
                  <a
                    href={p.links.CARD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    {p.title.includes("PlantPal") ? "Card" : "Project Card"}
                    <ArrowIcon />
                  </a>
                )}

                {p.links?.photo && (
                  <a
                    href={p.links.photo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-blue-600
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    {p.title.includes("Checkers Game")
                      ? "Example"
                      : "Project view"}
                    <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}