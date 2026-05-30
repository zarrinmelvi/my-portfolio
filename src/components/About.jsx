const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-pink-400 font-mono text-sm tracking-widest mb-2">
          ABOUT ME
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Zarrin Melvi Delos Santos
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700 shadow-xl max-w-2xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="font-semibold text-pink-400">Zai</span>, 22 years old.
            Currently a 3rd‑year BSIT student at STI College San Jose Del Monte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;