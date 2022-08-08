import { Navbar } from "flowbite-react";
import dwo from "../../assets/images/dwo.png"
import Image from 'next/future/image'

export const Header = () => {
    return (
        <div className="fixed w-full">
            <Navbar
                id="navbar"
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <Image
                        src={dwo.src}
                        width={6}
                        height={6}
                        className="mr-3 w-6 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        D-Wo
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About Us
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

export default Header