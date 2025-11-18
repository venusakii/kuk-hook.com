import { Button } from '@/components/ui/button'

const ageGroups = [
  {
    range: '0-6 Months',
    title: 'Newborn Sensory',
    description: 'Soft textures, high contrast, and gentle sounds',
    image: '/baby-sensory-toys-rattles-soft-textures.jpg',
    bgColor: 'bg-[#FFE8E0]',
  },
  {
    range: '6-12 Months',
    title: 'Sitting & Crawling',
    description: 'Activity centers, stackers, and grip toys',
    image: '/baby-activity-toys-stackers-grip-toys.jpg',
    bgColor: 'bg-[#E0F4F4]',
  },
  {
    range: '1-2 Years',
    title: 'Toddler Explorers',
    description: 'Push toys, simple puzzles, and building blocks',
    image: '/toddler-toys-push-toys-simple-puzzles.jpg',
    bgColor: 'bg-[#FFF8DC]',
  },
  {
    range: '2-3 Years',
    title: 'Growing Minds',
    description: 'Pretend play, advanced blocks, and art supplies',
    image: '/preschool-toys-pretend-play-building-blocks.jpg',
    bgColor: 'bg-[#FFE8E0]',
  },
  {
    range: '3-4 Years',
    title: 'Preschool Ready',
    description: 'Educational games, complex puzzles, and STEM toys',
    image: '/preschool-educational-toys-stem-puzzles.jpg',
    bgColor: 'bg-[#E0F4F4]',
  },
  {
    range: '4-6 Years',
    title: 'Young Learners',
    description: 'Advanced STEM, reading prep, and creative kits',
    image: '/kindergarten-learning-toys-stem-creative-kits.jpg',
    bgColor: 'bg-[#FFF8DC]',
  },
]

export function AgeGroups() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-balance">
            Shop by Age Group
          </h2>
          <p className="text-xl text-[#2C3E50]/70 max-w-2xl mx-auto text-pretty">
            Find the perfect toys that match your child's current developmental stage and interests.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={`${group.bgColor} rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={group.image || "/placeholder.svg"}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white text-[#FF6B6B] text-sm font-semibold mb-3">
                  {group.range}
                </div>
                
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  {group.title}
                </h3>
                
                <p className="text-[#2C3E50]/70 mb-4 leading-relaxed">
                  {group.description}
                </p>
                
                <Button variant="ghost" className="text-[#4ECDC4] hover:text-[#4ECDC4]/80 p-0">
                  Browse Toys →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
