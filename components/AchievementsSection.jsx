export function AchievementsSection() {
  const items = [
    { title: "B.Sc. in Computer Science", org: "Graduating 2025", note: "Algorithms, Data Structures, OS, DB" },
    { title: "Android (Kotlin) – Course/Track", org: "Self/Academic", note: "MVVM, Retrofit, Room, Hilt" },
    { title: "Web Services & Async", org: "Academic Project", note: "Node.js, Express, MongoDB" },
  ];
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Certifications & Achievements</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.title} className="p-4 rounded-xl border bg-gray-50">
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">{it.org}</div>
              <div className="text-sm mt-1">{it.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
