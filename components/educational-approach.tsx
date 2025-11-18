import { BookOpen, Users, Target, Award } from 'lucide-react'

const approaches = [
  {
    icon: BookOpen,
    title: 'Montessori-Inspired',
    description: 'Self-directed learning with hands-on materials that encourage independence and exploration.',
  },
  {
    icon: Users,
    title: 'Collaborative Play',
    description: 'Toys designed for both solo and group play to develop social skills and cooperation.',
  },
  {
    icon: Target,
    title: 'Milestone-Focused',
    description: 'Each toy targets specific developmental milestones backed by child psychology research.',
  },
  {
    icon: Award,
    title: 'Expert Approved',
    description: 'Developed with pediatricians, educators, and child development specialists.',
  },
]

export function EducationalApproach() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6 text-balance">
              Our Educational Philosophy
            </h2>
            <p className="text-xl text-[#2C3E50]/80 leading-relaxed mb-8 text-pretty">
              We believe learning should be natural, joyful, and child-led. Our approach combines proven educational methodologies with modern understanding of child development.
            </p>
            
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center">
                    <approach.icon className="h-6 w-6 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2C3E50] mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-[#2C3E50]/70 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/20 to-[#FFD93D]/20 rounded-[3rem] blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop&q=80"
              alt="Educational Approach"
              className="relative rounded-[2rem] shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
