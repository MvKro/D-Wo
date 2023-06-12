import Image from 'next/future/image'
import heroImage from '@/assets/images/hero-image.png'

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-slate-50 px-4">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="lg:w-2/3 space-y-5 text-center">
                        <h1 className="text-2xl text-gray-800 uppercase tracking-widest">Get in touch</h1>
                        <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
                        <p className="text-gray-400">We thrive when coming up with innovative ideas but
                            also understand that a smart concept should be supported with faucibus sapien odio
                            measurable
                            results.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-2 mt-12">
                    <form method="post"  name="myForm" id="myForm">
                        <p id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <input type="text" name="name" id="name"
                                       className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                                       placeholder="Enter your name"/>


                                    <input type="email"
                                           className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                                           id="email" name="email" placeholder="Enter your email"/>
                            </div>


                            <input type="text"
                                   className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                                   name="subject" id="subject" placeholder="Enter your subject"/>


                                <textarea
                                    className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                                    placeholder="Enter your message" name="comments" id="comments"></textarea>


                                <div className="text-right">
                                    <input type="submit" id="submit" name="send" className="btn bg-red-500 text-white mt-6 btn border border-red-500 w-40 h-10 hover:bg-red-600"
                                           value="Send Message"/>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact