const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Welcome to My Animation Portfolio</h1>
        <p className="text-xl mb-8 animate-fade-in-up">Bringing ideas to life through motion and code</p>
        <a
          href="#portfolio"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-bounce"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero

