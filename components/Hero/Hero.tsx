import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'

export const Hero = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Image width={1000} height={600} className="absolute inset-0 h-full w-full object-cover" src={heroImage.src}
                     alt="build your website image"/>
                    <div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-800 opacity-90"></div>
            </div>
            <section className="container z-40 mx-auto text-center text-white">
                <div>
                    <h2 className="text-5xl font-semibold mb-6">We Help Businesses Scale Their Services</h2>
                    <p className="text-xl mb-6">Leverage digital workers to automate tasks</p>
                    <button className="btn border text-red-500 border-red-500 hover:bg-red-500 hover:text-white w-40 h-10">
                        Watch Now
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hero