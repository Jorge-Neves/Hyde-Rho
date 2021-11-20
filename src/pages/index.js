import React, {useState} from 'react'
import Navbar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState('false');

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    )
}

export default Home;
;