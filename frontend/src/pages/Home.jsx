import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsletterBox from "../components/NewsletterBox"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div className="p-12">
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
