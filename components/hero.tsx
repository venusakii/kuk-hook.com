import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFE8E0] to-[#FFF8F0] py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFD93D]/20 px-4 py-2 text-sm font-medium text-[#2C3E50]">
              <Sparkles className="h-4 w-4 text-[#FF6B6B]" />
              Trusted by 50,000+ Parents Worldwide
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-[#2C3E50] lg:text-7xl text-balance">
              Learn Through <span className="text-[#FF6B6B]">Play</span>, Grow Through <span className="text-[#4ECDC4]">Discovery</span>
            </h1>
            
            <p className="text-xl text-[#2C3E50]/80 leading-relaxed text-pretty">
              Premium early learning toys designed by child development experts to nurture curiosity, creativity, and cognitive growth in your little ones.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white rounded-full px-8">
                Explore Our Toys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                Learn Our Approach
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#FF6B6B]">100%</div>
                <div className="text-sm text-[#2C3E50]/70">Safe Materials</div>
              </div>
              <div className="h-12 w-px bg-[#2C3E50]/20" />
              <div>
                <div className="text-3xl font-bold text-[#4ECDC4]">Expert</div>
                <div className="text-sm text-[#2C3E50]/70">Designed</div>
              </div>
              <div className="h-12 w-px bg-[#2C3E50]/20" />
              <div>
                <div className="text-3xl font-bold text-[#FFD93D]">4.9★</div>
                <div className="text-sm text-[#2C3E50]/70">Parent Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FF6B6B]/20 via-[#4ECDC4]/20 to-[#FFD93D]/20 rounded-[3rem] blur-3xl" />
            <img
              src="/colorful-educational-wooden-toys-blocks-puzzles-fo.jpg"
              alt="Early Learning Toys"
              className="relative rounded-[2rem] shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
