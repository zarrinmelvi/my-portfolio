const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/70 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Zai.
        </h1>
        <div className="space-x-8 hidden md:flex">
          <a href="#about" className="text-gray-300 hover:text-pink-400 transition font-medium">About</a>
          <a href="#portfolio" className="text-gray-300 hover:text-pink-400 transition font-medium">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-pink-400 transition font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;