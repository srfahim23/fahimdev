import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hello! I'm Fahim Faysal, a passionate animator and web developer with a keen eye for detail and a love for
              bringing ideas to life through motion and code.
            </p>
            <p className="text-lg mb-4">
              With 3 years of experience in the industry, I've had the pleasure of working on a wide range of
              projects, from interactive web experiences to captivating 3D animations.
            </p>
            <p className="text-lg">
              My goal is to create visually stunning and user-friendly experiences that leave a lasting impression. When
              I'm not animating or coding, you can find me [your hobbies or interests].
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

