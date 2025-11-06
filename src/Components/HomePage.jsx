//tk
import FeaturedProducts from "./Pages/FeaturedProducts";
import Features from "./Pages/Features";
import Hero from "./Pages/Hero";
import Hero1 from "./Pages/Hero1";
import HomeProducts from "./Pages/HomeProducts";
import MeetTheTeam from "./Pages/MeetTheTeam";
import PromoSection from "./Pages/PromoSection";
import Section from "./Pages/Section";

function HomePage() {
    return ( 
        <>
        <Hero />
        <Features />
        <HomeProducts />
        <PromoSection />   
        <FeaturedProducts />
        <Hero1/>
        <Section/>
        <MeetTheTeam />
        
        </>
     );
}

export default HomePage;