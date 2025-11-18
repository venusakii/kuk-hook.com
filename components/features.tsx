import { Brain, Heart, Shield, Smile, Stars, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Cognitive Development',
    description: 'Stimulate problem-solving skills, memory, and logical thinking through engaging play.',
    color: '#FF6B6B',
  },
  {
    icon: Heart,
    title: 'Emotional Growth',
    description: 'Build confidence, empathy, and social skills with toys designed for emotional intelligence.',
    color: '#4ECDC4',
  },
  {
    icon: Zap,
    title: 'Motor Skills',
    description: 'Enhance fine and gross motor skills with hands-on, tactile learning experiences.',
    color: '#FFD93D',
  },
  {
    icon: Stars,
    title: 'Creativity & Imagination',
    description: 'Inspire creative thinking and imaginative play that knows no boundaries.',
    color: '#FF6B6B',
  },
  {
    icon: Shield,
    title: 'Safety Certified',
    description: 'All toys meet international safety standards with non-toxic, child-safe materials.',
    color: '#4ECDC4',
  },
  {
    icon: Smile,
    title: 'Age-Appropriate',
    description: 'Carefully curated for each developmental stage from newborn to 6 years old.',
    color: '#FFD93D',
  },
]

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-balance">
            Why Early Learning Matters
          </h2>
          <p className="text-xl text-[#2C3E50]/70 max-w-2xl mx-auto text-pretty">
            The first six years are crucial for brain development. Our toys are designed to maximize this golden window of learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#FFF8F0] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 shadow-lg"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[#2C3E50]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
