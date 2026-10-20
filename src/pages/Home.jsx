import Hero from '../components/home/Hero'
import GoalSection from '../components/home/GoalSection'
import BestSellers from '../components/home/BestSellers'
import CategoryCards from '../components/home/CategoryCards'
import FlashSale from '../components/home/FlashSale'
import BrandsGrid from '../components/home/BrandsGrid'
import WhyUs from '../components/home/WhyUs'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <div>
      <Hero />
      <GoalSection />
      <BestSellers />
      <CategoryCards />
      <FlashSale />
      <BrandsGrid />
      <WhyUs />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
