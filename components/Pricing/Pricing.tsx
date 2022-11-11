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
                        <p className="text-gray-400">Fast deployment, no need for technical staff, no licenses, and most importantly, no hidden fees. Start transforming your business now!
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-12">
                    <div
                        className="bg-white card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 shadow-xl border border-neutral-100 p-10">
                        <div className="card-body">
                            <div className="space-y-2">
                                <h1 className="uppercase text-sm">Economy</h1>
                                <h1 className="text-4xl">$100</h1>
                                <h1 className="uppercase text-gray-400 text-xs">BILLING PER MONTH</h1>
                            </div>

                            <hr className="my-7"></hr>

                                <div className="space-y-5">
                                    <p>Automated processes: <span className="text-red-500 font-medium">Up to 2</span></p>
                                    <p> D-Wo implementation Fee: <span className="text-red-500 font-medium">$400</span></p>
                                    <p>Monthly run minutes included: <span className="text-red-500 font-medium">240</span></p>
                                    <p> Extra minute: <span className="text-red-500 font-medium">$0.10</span></p>
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
                                <h1 className="text-4xl">$250</h1>
                                <h1 className="uppercase text-gray-400 text-xs">BILLING PER MONTH</h1>
                            </div>

                            <hr className="my-7"></hr>

                                <div className="space-y-5">
                                    <p>Automated processes: <span className="text-red-500 font-medium">Up to 20</span></p>
                                    <p> D-Wo implementation Fee: <span className="text-red-500 font-medium">$300</span></p>
                                    <p>Monthly run minutes included: <span className="text-red-500 font-medium">1440</span></p>
                                    <p> Extra minute: <span className="text-red-500 font-medium">$0.07</span></p>
                                    <p><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                                    <p className="py-12"><a href="#contact" className="px-6 py-3 mt-6 btn bg-red-500 text-white no-underline rounded hover:bg-red-600">Join Now</a></p>
                                </div>
                        </div>
                    </div>
                    <div
                        className="bg-white card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 shadow-xl border border-neutral-100 p-10">
                        <div className="card-body">
                            <div className="space-y-2">
                                <h1 className="uppercase text-sm">Enterprise</h1>
                                <h1 className="text-4xl">N/A</h1>
                                <h1 className="uppercase text-gray-400 text-xs">BILLING PER MONTH/YEAR</h1>
                            </div>

                            <hr className="my-7"></hr>

                            <div className="space-y-5">
                                <p> Custom number of processes</p>
                                <p> Custom D-Wo implementation Fee</p>
                                <p> Priority SLA</p>
                                <p> Annual billing option</p>
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