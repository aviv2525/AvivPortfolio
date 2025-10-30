import { useEffect } from "react";
import  AboutSection  from'../components/AboutSection.jsx'
import  SkillsSection  from "../components/SkillsSection.jsx";
import  ProjectsSection  from "../components/ProjectsSection.jsx";
import  {AchievementsSection}  from "../components/AchievementsSection.jsx";
import  ContactSection   from "../components/ContactSection.jsx";

console.log({
  AboutSection,
  SkillsSection,
  ProjectsSection,
  AchievementsSection,
  ContactSection
});


export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight">
            Aviv’s Portfolio
          </h1>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition">Home</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-900 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70 md:inline-flex"
          >
            Hire me
          </a>
        </div>
      
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl/tight sm:text-5xl font-bold tracking-tight">
            Hi, I’m Aviv 👋
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
           B.Sc. in Computer Science with a strong drive to learn, create, and grow as a developer.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/aviv2525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-900 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/70"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aviv-malul-46a064216/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/60"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
  
      <ProjectsSection />
     
           
      {/* Achievements Section */}
      {/* About Section */}

            <AboutSection />

      {/* Skills Section */}
      <SkillsSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Contact Section */}

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Contact
          </h3>
          <p className="text-gray-700 mb-6">
            Feel free to reach out via email or LinkedIn 👇
          </p>
          <a
            href="mailto:avivmalul13@gmail.com"
            className="inline-flex items-center rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/60"
          >
            avivmalul13@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Aviv — All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
