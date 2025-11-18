import { Shield, Leaf, Award, HeartHandshake, Truck, RotateCcw } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: '100% Safe Materials',
    description: 'Non-toxic, BPA-free, and certified safe for all ages',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable wood and recyclable materials',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized by parents and educators worldwide',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Guidance',
    description: 'Free consultation with child development specialists',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free delivery on orders over $50',
  },
  {
    icon: RotateCcw,
    title: '60-Day Returns',
    description: 'Not satisfied? Full refund, no questions asked',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-balance">
            The Kuk-Hook Promise
          </h2>
          <p className="text-xl text-[#2C3E50]/70 max-w-2xl mx-auto text-pretty">
            We're committed to providing the highest quality early learning toys with exceptional service and support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] mb-6 shadow-lg">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                {value.title}
              </h3>
              
              <p className="text-[#2C3E50]/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
