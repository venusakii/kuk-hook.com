import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Building & Construction',
    description: 'Blocks, stackers, and building sets for spatial awareness',
    image: '/colorful-wooden-building-blocks-for-children.jpg',
    count: '45+ toys',
  },
  {
    title: 'Puzzles & Problem Solving',
    description: 'Shape sorters, jigsaw puzzles, and logical thinking games',
    image: '/wooden-puzzles-and-shape-sorters-for-kids.jpg',
    count: '60+ toys',
  },
  {
    title: 'Music & Rhythm',
    description: 'Instruments and musical toys for auditory development',
    image: '/colorful-musical-instruments-toys-for-children.jpg',
    count: '30+ toys',
  },
  {
    title: 'Art & Creativity',
    description: 'Drawing, painting, and craft materials for expression',
    image: '/art-supplies-and-craft-materials-for-kids.jpg',
    count: '55+ toys',
  },
]

export function ProductCategories() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-balance">
            Explore by Learning Type
          </h2>
          <p className="text-xl text-[#2C3E50]/70 max-w-2xl mx-auto text-pretty">
            Each category is designed to target specific developmental skills while keeping play fun and engaging.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#2C3E50]">
                    {category.title}
                  </h3>
                  <span className="text-sm font-medium text-[#FF6B6B]">
                    {category.count}
                  </span>
                </div>
                
                <p className="text-[#2C3E50]/70 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <Button variant="ghost" className="text-[#4ECDC4] hover:text-[#4ECDC4]/80 hover:bg-[#4ECDC4]/10 p-0">
                  View Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
