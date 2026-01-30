"use client";
import { useEffect, useRef, useState } from "react";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Lottie from "lottie-react";
import animationData from "../styles/SmileFace.json";

export default function Home() {
  // ✅ חדש: state שמחליט אם להסתיר את ההדר
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // ✅ אנימציות כניסה בסקשנים (כמו שהיה אצלך)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".observe-element").forEach((el) => {
      observer.observe(el);
    });

    // ✅ חדש: hide/show header לפי גלילה
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastScrollY.current;

      // תמיד נראה בראש העמוד
      if (y < 40) {
        setHideHeader(false);
        lastScrollY.current = y;
        return;
      }

      // יורדים למטה -> להסתיר
      if (diff > 10) setHideHeader(true);

      // עולים למעלה -> להציג
      if (diff < -10) setHideHeader(false);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


   return (
    // ✅ pt-16 כדי שהתוכן לא ייכנס מתחת ל-header (כי הוא fixed)
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-16">
      {/* Header */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "glass", // תשאיר אם אתה רוצה את אפקט הזכוכית
          "transition-transform duration-300 will-change-transform",
          hideHeader ? "-translate-y-full" : "translate-y-0",

          // ✅ במקום border (שיוצר קו דק), נשים הצללה עדינה
          "shadow-sm shadow-black/10",
          // אם עדיין רואים קו דק במובייל, תחליף ל: "shadow-none"
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-lg sm:text-xl font-bold tracking-tight gradient-text">
            Aviv Malul
          </h1>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#home"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="relative inline-flex items-center rounded-full bg-gradient-to-r from-blue-800 to-gray-600 px-5 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Hire me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden mesh-gradient">
        <div className="absolute inset-0 grid-bg opacity-50" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fadeInUp animate-delay-100">
              <div className="flex items-center justify-center gap-3">
                <span>Hi, I'm</span>
                <span className="gradient-text">Aviv</span>
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed animate-fadeInUp animate-delay-200">
              B.Sc. in Computer Science with a strong drive to learn, create, and grow as a developer.  
              <br className="hidden md:block" />
              I enjoy learning new technologies, working on practical projects, and turning ideas into working products.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fadeInUp animate-delay-300">
              <a
                href="https://github.com/aviv2525"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/aviv-malul-46a064216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-lg ring-1 ring-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-fadeInUp animate-delay-400">
              <a href="#projects" className="inline-flex flex-col items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <span>Scroll to explore</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="observe-element">
        <ProjectsSection />
      </div>

      {/* About Section */}
      <div className="observe-element">
        <AboutSection />
      </div>

      {/* Skills Section */}
      <div className="observe-element">
        <SkillsSection />
      </div>

      {/* Contact Section */}
      <div className="observe-element">
        <ContactSection />
      </div>

 

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-display font-bold text-xl gradient-text mb-2">Aviv Malul</h4>
              <p className="text-sm text-gray-600">Full Stack Developer & Problem Solver</p>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/aviv2525" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/aviv-malul-46a064216/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Aviv Malul — Create with ❤️ always learning. 
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}