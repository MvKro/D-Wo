import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'

export const Pricing = () => {
    return (
        <section className="py-12 bg-slate-50" id="pricing">
            <div className="container mx-auto">
                <div className="flex justify-center mb-12 mt-12">
                    <div className="lg:w-2/3 space-y-5 text-center">
                        <h1 className="text-2xl text-gray-800 uppercase tracking-widest">Our Pricing</h1>
                        <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                        <p className="text-gray-400">Call to action pricing table is really crucial to your for your
                            business
                            website. Make your bids stand-out with amazing options.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-12">
                    <div
                        className="bg-white card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 shadow-xl border border-neutral-100 p-10">
                        <div className="card-body">
                            <div className="space-y-2">
                                <h1 className="uppercase text-sm">Economy</h1>
                                <h1 className="text-4xl">$9.90</h1>
                                <h1 className="uppercase text-gray-400 text-xs">Billing Per Month</h1>
                            </div>

                            <hr className="my-7"></hr>

                                <div className="space-y-5">
                                    <p>Bandwidth: <span className="text-red-500 font-medium">1GB</span></p>
                                    <p>Onlinespace: <span className="text-red-500 font-medium">50MB</span></p>
                                    <p>Support: <span className="text-red-500 font-medium">No</span></p>
                                    <p><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                                    <p className="py-12"><a href="#contact" className="px-6 py-3 mt-6 btn bg-red-500 text-white no-underline rounded hover:bg-red-600">Join Now</a></p>
                                </div>
                        </div>
                    </div>
                    <div
                        className="bg-white card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 shadow-xl mb-4 border border-neutral-100 p-10">
                        <div className="card-body">
                            <div className="space-y-2">
                                <h1 className="uppercase text-sm">Deluxe</h1>
                                <h1 className="text-4xl">$19.90</h1>
                                <h1 className="uppercase text-gray-400 text-xs">Billing Per Month</h1>
                            </div>

                            <hr className="my-7"></hr>

                                <div className="space-y-5">
                                    <p>Bandwidth: <span className="text-red-500 font-medium">10GB</span></p>
                                    <p>Onlinespace: <span className="text-red-500 font-medium">500MB</span></p>
                                    <p>Support: <span className="text-red-500 font-medium">Yes</span></p>
                                    <p><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                                    <p className="py-12"><a href="#contact" className="px-6 py-3 mt-6 btn bg-red-500 text-white no-underline rounded hover:bg-red-600">Join Now</a></p>
                                </div>
                        </div>
                    </div>
                    <div
                        className="bg-white card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 shadow-xl border border-neutral-100 p-10">
                        <div className="card-body">
                            <div className="space-y-2">
                                <h1 className="uppercase text-sm">Ultimate</h1>
                                <h1 className="text-4xl">$29.90</h1>
                                <h1 className="uppercase text-gray-400 text-xs">Billing Per Month</h1>
                            </div>

                            <hr className="my-7"></hr>

                                <div className="space-y-5">
                                    <p>Bandwidth: <span className="text-red-500 font-medium">1GB</span></p>
                                    <p>Onlinespace: <span className="text-red-500 font-medium">2GB</span></p>
                                    <p>Support: <span className="text-red-500 font-medium">Yes</span></p>
                                    <p><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                                    <p className="py-12"><a href="#contact" className="px-6 py-3 mt-6 btn bg-red-500 text-white no-underline rounded hover:bg-red-600">Join Now</a></p>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing