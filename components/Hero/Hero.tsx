import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'
import useModal from "../../hooks/useModal";
import { Modal } from "../Modal/Modal";

export const Hero = () => {
    const { isOpen, toggle } = useModal();
    return (
        <>
            <div className="overflow-hidden">
                <Image width={1000} height={600} className="absolute inset-0 h-full w-full object-cover" src={heroImage.src}
                     alt="build your website image"/>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-900 to-sky-800 opacity-80"></div>
            </div>
            <section className="container z-40 mx-auto text-center text-white">
                <div>
                    <h2 className="text-5xl font-semibold mb-6">We Help Businesses Scale Their Services</h2>
                    <p className="text-xl mb-6">Leverage digital workers to automate tasks</p>
                    <button className="btn bg-gradient-to-r from-red-400 to-red-600 opacity-80 text-white w-40 h-10 hover:animate-bounce" onClick={toggle}>
                        Watch Video
                    </button>
                </div>
            </section>
            <Modal isOpen={isOpen} toggle={toggle}></Modal>
        </>
    )
}

export default Hero