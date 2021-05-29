import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle = {toggle}/>
        </>
    )
}

export default Home;
