import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { ProductCategories } from '@/components/product-categories'
import { LearningBenefits } from '@/components/learning-benefits'
import { AgeGroups } from '@/components/age-groups'
import { Testimonials } from '@/components/testimonials'
import { EducationalApproach } from '@/components/educational-approach'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Newsletter } from '@/components/newsletter'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ProductCategories />
      <LearningBenefits />
      <AgeGroups />
      <Testimonials />
      <EducationalApproach />
      <WhyChooseUs />
      <Newsletter />
    </main>
  )
}
