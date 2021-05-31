import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ServiceSection from '../components/Services'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <ServiceSection />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home;
