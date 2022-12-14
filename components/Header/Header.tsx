import {useEffect, useMemo, useRef, useState} from "react";
import styles from '../../styles/Header.module.css'
import Image from "next/future/image";
import whiteLogo from "@/assets/images/dwo-blanco.png";

export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const menu = useRef<HTMLDivElement>(null);
    const isMenuOpen = useMemo(() => {
        return !menu.current?.classList.contains("hidden");
    },[toggle])

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop >= 1)
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [])

    const toggleMenu = () => {
        menu.current?.classList.toggle("hidden")
        setToggle(!toggle)
    }


    return (
        <nav
            className={`z-50 px-2 sm:px-4 py-2.5 w-full top-0 left-0 fixed transition duration-500 md:bg-transparent ${isMenuOpen? 'bg-stone-900': '' } ${isSticky ? 'bg-stone-900 shadow-md md:bg-stone-900 md:shadow-md' : ''}`}>
            <div className="container flex flex-wrap items-center mx-auto">
                <a className="text-white mr-auto md:mr-20" >
                    <Image width={120} height={120} src={whiteLogo.src}
                           alt="build your website image"/>
                </a>
                <div className="flex md:order-2">
                    <button onClick={toggleMenu} type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div
                    ref={menu}
                    className={`justify-between items-center w-full md:flex md:w-auto md:order-1 hidden`}
                    id="navbar-sticky">
                    <ul className="text-md font-semibold flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a href="#"
                               className={`${styles.link} hover:text-white`}
                               aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services"
                               className={`${styles.link} hover:text-white`}
                            >
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#pricing"
                               className={`${styles.link} hover:text-white`}
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#team"
                               className={`${styles.link} hover:text-white`}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                               className={`${styles.link} hover:text-white`}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Header