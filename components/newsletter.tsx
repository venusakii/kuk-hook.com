import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-20 lg:py-32 bg-[#2C3E50]">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-[3rem] p-12 lg:p-16 mb-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
              Get Expert Parenting Tips & Exclusive Offers
            </h2>
            
            <p className="text-xl text-white/90 text-pretty">
              Join our community of 50,000+ parents and receive weekly developmental tips, toy recommendations, and special discounts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/95 border-0 h-14 rounded-full px-6 text-[#2C3E50] placeholder:text-[#2C3E50]/50 flex-1"
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-white rounded-full px-8 h-14 whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </form>
            
            <p className="text-sm text-white/70">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Kuk-Hook</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Premium early learning toys designed to nurture curiosity and growth in every child.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Shop</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">All Toys</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Development Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toy Selection Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2025 Kuk-Hook. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
