const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-pink-400 font-mono text-sm tracking-widest mb-2">
          GET IN TOUCH
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's build something cool
        </h2>
        <p className="text-gray-400 mb-10">
          Have an opportunity or just want to connect? Drop a message.
        </p>

        <form className="space-y-5 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        {/* Clickable account links */}
        <div className="mt-10 space-y-2 text-sm">
          <p>
            <a
              href="mailto:delossantoszarrinmelvi@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              delossantoszarrinmelvi@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/zarrinmelvi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              github.com/zarrinmelvi
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/zvrrin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              instagram.com/zvrrin
            </a>
          </p>
          <p>
            <a
              href="https://facebook.com/zarrinmelvidelossantos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              facebook.com/zarrinmelvidelossantos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;