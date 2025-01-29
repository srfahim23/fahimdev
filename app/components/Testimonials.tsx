const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "John Doe", role: "Creative Director", text: "An exceptional animator with a keen eye for detail." },
    {
      id: 2,
      name: "Jane Smith",
      role: "Web Developer",
      text: "Great to work with, delivers high-quality animations on time.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Marketing Manager",
      text: "Brought our brand to life with stunning motion graphics.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

