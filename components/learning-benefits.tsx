import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    age: '0-12 Months',
    title: 'Sensory Exploration',
    skills: ['Visual tracking', 'Tactile awareness', 'Sound recognition', 'Grasp reflex development'],
  },
  {
    age: '1-2 Years',
    title: 'Physical Coordination',
    skills: ['Fine motor skills', 'Hand-eye coordination', 'Balance and movement', 'Object permanence'],
  },
  {
    age: '2-3 Years',
    title: 'Language & Social',
    skills: ['Vocabulary expansion', 'Basic counting', 'Sharing and cooperation', 'Emotional expression'],
  },
  {
    age: '3-6 Years',
    title: 'Complex Thinking',
    skills: ['Problem solving', 'Creative reasoning', 'Pre-reading skills', 'Mathematical concepts'],
  },
]

export function LearningBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Developmental Milestones by Age
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Our toys are specifically designed to support your child's natural development at every stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF6B6B] text-white text-sm font-semibold mb-4">
                {benefit.age}
              </div>
              
              <h3 className="text-2xl font-bold mb-6">
                {benefit.title}
              </h3>
              
              <ul className="space-y-3">
                {benefit.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
