import Hero from '../components/Hero.component'
import About from '../components/About.component'
import Highlights from '../components/Highlights.component'
import Carousel from '../components/Carousel.component'
import BookBanner from '../components/BookBanner.component'
import Footer from '../components/Footer.component'

const Home = () => {
    return ( 
        <div>
            <Hero />
            <About />
            <Highlights />
            <Carousel />
            <BookBanner />
            <Footer />
        </div>
     );
}
 
export default Home;