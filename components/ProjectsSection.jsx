// components/ProjectsSection.jsx
function Tag({ children }) {
  return <span className="px-2 py-1 text-xs rounded-full bg-gray-100">{children}</span>;
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
        CARD: "/docs/plantpal-card.jpg",       // ודא שהשם/רישיות תואמים לקובץ בפועל
        photo: "/docs/Checkers-photo.png",      // אם זה תמונה של PlantPal – עדכן לשם נכון
      },
    },
    {
      title: "Web Services API",
      description:
        "RESTful API with Express.js & MongoDB. Monthly reports, user endpoints, and JSDoc documentation.",
      tech: ["Node.js", "Express", "MongoDB", "REST", "JSDoc"],
      links: {
        github: "https://github.com/aviv2525/WebServicesAPI",
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
      description: "Landing page for small coffee shop menu",
      tech: ["Kotlin", "Android", "XML"],
      links: {
        github: "https://github.com/aviv2525/Aviv-Coffee-App", // הורדתי את ה־https הכפול
        demo: "https://www.youtube.com/shorts/KU-f9GFVDSs",
      },
    },
    {
      title: "Checkers Game 🎲 - C#.NET APP",
      description:
        "A simple checkers game with opponent built using C# and WinForms. (Version 1)",
      tech: ["C#", ".NET", "WinForms"],
      links: {
        github: "https://github.com/aviv2525/checkers-game",   // תקין
        photo: "/docs/Checkers Version1.png",                      // ודא התאמה ברישיות לשם הקובץ
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

                <p className="text-gray-600 mb-4 text-sm">{p.description}</p>

                {/* Tech tags */}
                {p.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
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
                  {p.links?.CARD && (
                    <a      
                      href={p.links.CARD}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {p.title.includes("PlantPal") ? "Card →" : "Project Card →"}
                    </a>
                  )}
                  {p.links?.photo && (
                    <a
                      href={p.links.photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {p.title.includes("Checkers Game") ? "example →" : "Project View Ex →"}
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
