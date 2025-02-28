import Image from "next/image"

const Portfolio = () => {
  const projects = [
    { id: 1, title: "3D Animation Reel", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Interactive Web Experience", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Motion Graphics Showcase", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Responsive Web Design", image: "/placeholder.svg?height=200&width=300" },
    { id: 5, title: "Islamic Hub", image: "/placeholder.svg?height=200&width=300", url: "https://islamic-hub-liard.vercel.app/" },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href={project.url || "#"} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio