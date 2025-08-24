export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-300 mb-6">
          Open to junior software roles and freelance projects. Feel free to reach out.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/aviv2525" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/30">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aviv-malul-46a064216/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/30">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}