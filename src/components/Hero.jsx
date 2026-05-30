import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative text-center max-w-3xl">
        <ProfileImage />
        <p className="text-pink-400 font-mono text-sm mt-6 mb-4 tracking-widest">HELLO, WORLD</p>
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          I'm <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Zarrin Melvi Delos Santos</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          A BSIT student passionate about crafting digital experiences. Code meets design.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;