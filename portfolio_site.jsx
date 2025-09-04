import { Twitter, Instagram, Github, Linkedin, Send, Brush } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <header className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mayamba Maxwell</h1>
        <p className="text-lg text-gray-700 mb-6">UI/UX Designer • Game Developer • Illustrator</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:scale-110 transition">
            <Twitter size={28} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition">
            <Instagram size={28} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:scale-110 transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
            <Linkedin size={28} />
          </a>
          <a href="https://t.me/Max_Designr" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:scale-110 transition">
            <Send size={28} />
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
            <Brush size={28} />
          </a>
        </div>

        <a
          href="#commissions"
          className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-600 transition"
        >
          Hire Me
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a versatile creative with a background in Computer Science (BSc). My passion lies in
          designing intuitive user experiences, developing engaging games, and creating vibrant illustrations.
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mt-16 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-semibold text-gray-800">UI/UX Project</h3>
            <p className="text-gray-600 text-sm">Modern app interface design using Figma.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-semibold text-gray-800">Game Dev Project</h3>
            <p className="text-gray-600 text-sm">2D pixel art platformer built in Unity.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-semibold text-gray-800">Illustrations</h3>
            <p className="text-gray-600 text-sm">Anime-inspired character artwork.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-semibold text-gray-800">Web Development</h3>
            <p className="text-gray-600 text-sm">Responsive portfolio and landing pages with React.</p>
          </div>
        </div>
      </section>

      {/* Commissions Section */}
      <section id="commissions" className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Commissions</h2>
        <p className="text-gray-700 mb-6">
          I’m open for commissions! Support my work or request a custom piece.
        </p>
        <a
          href="https://paystack.com/pay/your-link"
          className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-600 transition"
        >
          Pay with Paystack
        </a>

        {/* Commission Request Form */}
        <form
          name="commissions"
          method="POST"
          data-netlify="true"
          className="bg-white rounded-2xl shadow-md p-6 mt-8 text-left"
        >
          <input type="hidden" name="form-name" value="commissions" />
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input type="text" name="name" required className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="email" required className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Type of Commission</label>
            <input type="text" name="type" className="w-full p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Details</label>
            <textarea name="details" rows="4" className="w-full p-2 border rounded-md"></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">Email: mayambamaxwell@gmail.com</p>
        <p className="text-gray-700 mb-2">Telegram: @Max_Designr</p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} Mayamba Maxwell. All rights reserved.
      </footer>
    </div>
  );
}
