import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faWrench, faRobot } from "@fortawesome/free-solid-svg-icons";

export const Service = () => {
    return (
        <>
            <section id="services" className="py-10 bg-slate-50">
                <div className="container mx-auto mt-16">
                <div className="flex justify-center mx-5 mb-12">
                    <div className="lg:w-2/3 space-y-5 text-center mb-6">
                        <h1 className="text-2xl text-gray-800 uppercase tracking-widest">What's a D-wo?</h1>
                        <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                        <p className="text-gray-400">
                            A D-Wo is a custom-made Digital Worker programed to execute your repetitive tasks and create value for your business
                        </p>
                    </div>
                </div>
                </div>
            </section>
            <section id="" className="py-10 mb-12">
                <div className="container mx-auto mb-12">
                    <div className="flex justify-center mx-5 mb-12 mt-12">
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
                                className="w-16 h-16 p-5 leading-loose rounded-full text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white">
                                <FontAwesomeIcon icon={faClipboardList} size="xs" />
                            </div>
                            <h4 className="font-medium">Process Improvement consultancy </h4>
                            <p className="text-gray-400">We audit your business workflows utilizing a lean approach looking for process improvement
                                opportunities to help you optimize your organization.</p>
                        </div>
                        <div
                            className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300">
                            <div
                                className="w-16 h-16 p-4 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white">
                                <FontAwesomeIcon icon={faWrench}  size="xs" />
                            </div>
                            <h4 className="font-medium">Smart Automation SaaS</h4>
                            <p className="text-gray-400">We design, build and host a digital worker for you.
                                Our team will ensure everything is running smoothly so you can focus on more value added and analytical tasks.</p>
                        </div>
                        <div
                            className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300">
                            <div
                                className="w-16 h-16 p-3 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white">
                                <FontAwesomeIcon icon={faRobot}  size="xs" />
                            </div>
                            <h4 className="font-medium">Managed Bot Development</h4>
                            <p className="text-gray-400">Our team will help your organization start building your own automation program with everything
                                from training and best practices to deployment of your first bots.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service