import { useEffect } from "react";
import { AboutSection } from './AboutSection.jsx';
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectSection.jsx";
import { AchievementsSection } from "./AchievementsSection.jsx";
import { ContactSection  } from "./ContactSection.jsx";


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
            Computer Science B.Sc. student 
            Full‑stack developer in progress 🚀 specializing in Android, Web and Mobile apps.
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
      <section id="projects" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">
            Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 group-hover:text-gray-700 transition">
                  PlantPal 🌱
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Android app with Retrofit, Room, Hilt, MVVM, and Perenual Plant API.
                </p>
                <a
                  href="https://github.com/aviv2525/PlantPal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 group-hover:text-gray-700 transition">
                  Web Services API
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  RESTful API in Express.js & MongoDB, with reports and authentication.
                </p>
                <a
                  href="https://github.com/aviv2525/WebServicesAPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 group-hover:text-gray-700 transition">
                  React Native App
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Social-like app with profiles, media gallery, and instant booking feature.
                </p>
                <a
                  href="https://github.com/aviv2525/ReactNativeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <AchievementsSection />
      {/* About Section */}

            <AboutSection />
      <section id="about" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-6">
            About Me
          </h3>
          <p className="mx-auto max-w-3xl text-center text-gray-700">
           I am Aviv, a Computer Science student graduating this year with a strong academic background and hands-on development experience.  
          I have a solid understanding of algorithms, data structures, and software design principles.  
          Skilled in C# .NET, Java, Kotlin, and JavaScript (React, Node.js), I enjoy building both web and mobile applications.  
          I am a fast learner with strong analytical skills, capable of quickly adapting to new technologies and solving complex problems efficiently.  
          My current focus is on developing modern applications that combine clean architecture with an engaging user experience.
          </p>
        </div>
      </section>
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
