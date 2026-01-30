/*export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-300 mb-6">
            I'm open to junior software roles and freelance projects. Feel free to reach out :
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
*/


const ContactSection = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "avivmalul13@gmail.com",
      link: "mailto:avivmalul13@gmail.com",
      color: "from-sky-400 to-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/aviv-malul-46a064216/",
      color: "from-blue-500 to-sky-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "GitHub",
      value: "Check out my code",
      link: "https://github.com/aviv2525",
      // במקום אפור/שחור כבד — slate טבעי, עדיין "דארק" אבל נראה טוב
      color: "from-slate-600 to-slate-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* החלק העליון - כמו שהיה לך */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-10">
            I'm open to junior software roles and freelance projects. Feel free to reach out :
          </p>
        </div>

        {/* הכרטיסיות - כמו בקוד הארוך */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                bg-white/5 backdrop-blur
                rounded-2xl p-8
                border border-white/10
                shadow-lg
                transition-all duration-300
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/10
                hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div
                className={`
                  inline-flex items-center justify-center
                  w-14 h-14 rounded-full
                  bg-gradient-to-br ${method.color}
                  text-white mb-6
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              >
                {method.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-white">
                {method.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {method.value}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sky-300 font-medium text-sm group-hover:gap-4 transition-all">
                <span>Connect</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Soft glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
