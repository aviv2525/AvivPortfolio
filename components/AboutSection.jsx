const trainingSkills = [
  "Python", "REST APIs", "System Integration",
  "Prompt Engineering", "RAG", "LangChain", "LangGraph", "MCP", "AI System Architecture",
  "Cursor", "GitHub Copilot", "N8N", "Git Flow", "Pull Requests",
  "Monitoring", "Code Reviews", "SDLC", "AI-enabled Support Agent",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 space-y-6">

        <h3 className="text-3xl font-bold tracking-tight text-center mb-6">About Me</h3>

        {/* Bio */}
        <p className="text-lg leading-relaxed text-center">
          Computer Science graduate with a strong drive to learn, create, and grow as a developer.
          <b> C# .NET</b>, and also work with <b>Java</b>, <b>Kotlin (Android)</b>, <b>JavaScript</b>, and <b>PHP </b>
          across both client and server (React, Node.js), with a solid understanding of <b>OOP principles </b>
          and <b>API architecture</b>. I'm a fast learner with strong analytical skills, able to quickly adopt
          new technologies and solve complex problems efficiently. I care about clean architecture,
          performance, and delivering a great user experience.
        </p>

        {/* Training Program Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-800 to-gray-600 flex items-center justify-center text-white text-lg">
                🤖
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 leading-tight">
                  AI-Augmented Software Engineering Training Program
                </h4>
                <p className="text-blue-600 font-medium text-sm mt-0.5">Oz Varuah</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start sm:self-center flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
              May – August 2026
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Intensive <span className="font-semibold text-gray-900">180-hour</span>, project-based program
            focused on backend development, AI-powered applications, SDLC, RAG systems, agent
            orchestration, and AI-native engineering workflows. Culminated in building and presenting
            end-to-end projects.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2">
            {trainingSkills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
