const Skills = () => {
  const skills = ["Next.js", "React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Linux", "Animation"]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

