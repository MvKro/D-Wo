import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'

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
                            <img alt="" src="assets/images/team/img-1.jpg" className="rounded"/>
                                <div>
                                    <a href="page-profile.html">Javier Mendez</a>
                                </div>
                                <div className="text-sm uppercase text-gray-400">Sr. RPA Developer</div>
                                <div className="border-b"></div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src="assets/images/team/img-2.jpg" className="rounded"/>
                                <div>
                                    <a href="page-profile.html">Karolina Muñoz</a>
                                </div>
                                <div className="text-sm uppercase text-gray-400">Sr. Web Developer </div>
                                <div className="border-b"></div>
                        </div>
                    </div>

                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src="assets/images/team/img-3.jpg" className="rounded"/>
                                <div>
                                    <a href="page-profile.html">Andrey Sanchez</a>
                                </div>
                                <div className="text-sm uppercase text-gray-400">RPA Developer</div>
                                <div className="border-b"></div>
                        </div>
                    </div>

                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src="assets/images/team/img-4.jpg" className="rounded"/>
                                <div>
                                    <a href="page-profile.html">Angel Prado</a>
                                </div>
                                <div className="text-sm uppercase text-gray-400">Support</div>
                                <div className="border-b"></div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src="assets/images/team/img-4.jpg" className="rounded"/>
                            <div>
                                <a href="page-profile.html">Christian Carrizo</a>
                            </div>
                            <div className="text-sm uppercase text-gray-400">Cloud and virtualization</div>
                            <div className="border-b"></div>
                        </div>
                    </div>
                    <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                        <div className="text-center space-y-3">
                            <img alt="" src="assets/images/team/img-4.jpg" className="rounded"/>
                            <div>
                                <a href="page-profile.html">Juan Carlos Vargas</a>
                            </div>
                            <div className="text-sm uppercase text-gray-400">Finance Analyst</div>
                            <div className="border-b"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team