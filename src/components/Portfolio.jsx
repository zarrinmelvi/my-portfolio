const projects = [
  {
    title: "Favorite Recipe App",
    description:
      "A mobile app for browsing and saving your favorite recipes. Built with Android Studio using Java and XML.",
    tech: ["Android Studio", "Java", "XML"],
    status: "Completed",
  },
  {
    title: "OmniScan",
    description:
      "A cross-platform app that lets users scan items and manage their digital pantry.",
    tech: ["Vue.js"],
    status: "Upcoming",
  },
  {
    title: "Personal Portfolio",
    description:
      "This very site — a sleek, professional portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    status: "Live",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-pink-400 font-mono text-sm tracking-widest">
            MY WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Projects & Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;