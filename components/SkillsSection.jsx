const skills = [
  // Frontend
  { group: "develop & Languages", items: [
    { name: "React", icon: "devicon-react-original" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "C# .NET", icon: "devicon-dotnetcore-plain" },
    { name: "C", icon: "devicon-C-plain" },
    { name: "C++", icon: "devicon-C++-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Kotlin", icon: "devicon-kotlin-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
  ]},
  // Backend & Languages
,
  // Mobile
  { group: "Mobile", items: [
    { name: "Android (Kotlin)", icon: "devicon-android-plain" },
    { name: "React Native", icon: "devicon-android-plain" },
  ]},
  // Databases & Tools
  { group: "Databases & Tools", items: [
    { name: "SQL", icon: "devicon-mysql-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
  ]},

];

function SkillBadge({ icon, name }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition">
      <i className={`${icon} text-3xl`} aria-hidden />
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Skills</h2>
        <div className="space-y-10">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <h3 className="text-xl font-semibold mb-4">{group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map(s => <SkillBadge key={s.name} {...s} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function LevelBar({ label, level = 85 }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gray-900" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

// בתוך SkillsSection, אחרי ה־div של ה־grid:
<div className="mt-10 max-w-xl">
  <h4 className="text-lg font-semibold mb-3">Proficiency (Self‑Assessment)</h4>
  <LevelBar label="C# .NET" level={88} />
  <LevelBar label="React" level={75} />
  <LevelBar label="Kotlin / Android" level={80} />
  <LevelBar label="React Native" level={80} />
  <LevelBar label="Node.js" level={78} />
  <LevelBar label="Algorithms & Data Structures" level={90} />
</div>
