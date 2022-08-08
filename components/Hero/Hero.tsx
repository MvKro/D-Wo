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
            <section className="container">
                <div>
                    <h2>We Help Businesses Scale Their Services</h2>
                    <p>Leverage digital workers to automate tasks</p>
                    <button>Watch Now</button>
                </div>
            </section>
        </>
    )
}

export default Hero