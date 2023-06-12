import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'
import kmv from '@/assets/images/kmv.jpg'
import ccj from '@/assets/images/ccj.jpg'
import jmh from '@/assets/images/jmh.jpg'
import styles from '../../styles/Team.module.css'

export const Team = () => {
    return (
        <section className="py-12" id="team">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="lg:w-2/3 space-y-5 text-center">
                        <h1 className="text-2xl text-gray-800 uppercase tracking-widest">Behind the People</h1>
                        <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                        <p className="text-gray-400">It is a long established fact that create category leading brand
                            experiences a reader will be distracted by the readable content of a page when looking at
                            its
                            layout.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 mt-12">
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">

                            <img alt="" src={jmh.src} className={`rounded ${styles.img}`}/>

                            <div>
                                <p>Javier Mendez</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">Sr. RPA Developer</p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">

                            <img alt="" src={kmv.src} className={`rounded ${styles.img}`}/>

                            <div>
                                <p>Karolina Muñoz</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">Sr. Web Developer </p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>

                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3 overflow-hidden">
                            <img alt="" src={heroImage.src} className={`rounded ${styles.img}`}/>
                            <div>
                                <p>Andrey Sanchez</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">RPA Developer</p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>

                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3 overflow-hidden">
                            <img alt="" src={heroImage.src} className={`rounded ${styles.img}`}/>
                            <div>
                                <p>Angel Prado</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">Support</p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src={ccj.src} className={`rounded ${styles.img}`}/>
                            <div>
                                <p>Christian Carrizo</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">Cloud and virtualization</p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3 overflow-hidden">
                            <img alt="" src={heroImage.src} className={`rounded ${styles.img}`}/>
                            <div>
                                <p>Juan Carlos Vargas</p>
                                <p className="mt-3 text-sm uppercase text-gray-400">Finance Analyst</p>
                                <p className="border-b"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team