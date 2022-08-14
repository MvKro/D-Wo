import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'

export const Service = () => {
    return (
            <section id="services" className="py-10">
                <div className="container py-10 mx-auto">
                    <div className="flex justify-center mx-5">
                        <div className="lg:w-2/3 space-y-5 text-center">
                            <h1 className="text-2xl text-gray-800 uppercase tracking-widest">Our Service</h1>
                            <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                            <p className="text-gray-400">
                                We design and built bots to help businesses free up resources, reduce costs and achieve sustainable scalability
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12">
                        <div
                            className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300">
                            <div
                                className="w-16 h-16 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white">
                                <i className="pe-7s-diamond"></i>
                            </div>
                            <h4 className="font-medium">Process Improvement consultancy </h4>
                            <p className=" text-gray-400"></p>
                        </div>
                        <div
                            className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300">
                            <div
                                className="w-16 h-16 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white">
                                <i className="pe-7s-display2"></i>
                            </div>
                            <h4 className="font-medium">Smart Automation SaaS</h4>
                            <p className=" text-gray-400"></p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Service