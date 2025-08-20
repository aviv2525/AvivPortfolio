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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="PlantPal – Android"
            descr="Android app (Kotlin) using MVVM, Retrofit, Room, Hilt. Favorites, detail screens, offline support."
            tech={["Kotlin", "Android", "MVVM", "Retrofit", "Room", "Hilt"]}
            links={{ github: "https://github.com/<your-username>/PlantPal", demo: "#" }}
          />
          <ProjectCard
            title="Portfolio (This Site)"
            descr="React + Tailwind portfolio deployed on Netlify with clean components and sections."
            tech={["React", "Tailwind", "Netlify"]}
            links={{ github: "https://github.com/<your-username>/portfolio", demo: "https://avivportfolio2525.netlify.app/" }}
          />
          <ProjectCard
            title="C# .NET App"
            descr="Desktop/Server-side project in C# .NET demonstrating clean architecture and data handling."
            tech={["C#", ".NET", "OOP", "SQL"]}
            links={{ github: "https://github.com/<your-username>/dotnet-app" }}
          />
        </div>
      </div>
    </section>
  );
}
