import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Parker',
    role: 'Mother of 2',
    content: 'These toys have been incredible for my daughter\'s development. She went from struggling with shapes to mastering complex puzzles in just 3 months!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  },
  {
    name: 'Marcus Johnson',
    role: 'First-time Dad',
    content: 'As a new parent, I was overwhelmed by toy choices. Kuk-Hook made it easy with age-appropriate recommendations. My son loves every single toy!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
  {
    name: 'Rebecca Martinez',
    role: 'Preschool Teacher',
    content: 'I recommend Kuk-Hook to all my students\' parents. The quality and educational value are unmatched. These toys truly make learning fun.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
  },
  {
    name: 'Daniel Foster',
    role: 'Father of Twins',
    content: 'Safe, durable, and engaging - everything we need for our twin boys. They play together, learn together, and we have peace of mind.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Amanda Collins',
    role: 'Pediatric OT',
    content: 'As an occupational therapist, I use Kuk-Hook toys in my practice. They\'re perfectly designed for developing fine motor skills and coordination.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
  },
  {
    name: 'Robert Williams',
    role: 'Grandfather',
    content: 'I love giving my grandchildren toys that actually help them grow. These are gifts that keep giving, unlike the electronic gadgets.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-balance">
            Loved by Parents & Experts
          </h2>
          <p className="text-xl text-[#2C3E50]/70 max-w-2xl mx-auto text-pretty">
            Join thousands of families who trust Kuk-Hook for their children's early learning journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[#FFD93D]/30" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#2C3E50]">{testimonial.name}</h4>
                  <p className="text-sm text-[#2C3E50]/60">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FFD93D] text-[#FFD93D]" />
                ))}
              </div>
              
              <p className="text-[#2C3E50]/80 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
