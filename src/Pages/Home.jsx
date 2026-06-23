
import Banner from "../Commponents/Banner"
import Footer from "../Commponents/Footer"
import Navber from "../Commponents/Navber"
import Poster from "../Commponents/Poster"
import ServiceCard from "../Commponents/ServiceCard"
import SpecialPackages from "../Commponents/SpecialPackages"
const Home = () => {
  return (
    <div>
        
        <Navber/>
        <Banner/>
        <ServiceCard/>
        <Poster/>
        <SpecialPackages/>
       <Footer/>
    </div>
  )
}

export default Home