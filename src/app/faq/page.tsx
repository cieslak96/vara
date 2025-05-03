'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Title from '@/components/Title'

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="pt-32 bg-white relative z-0">

                {/* White Title Section */}
                <section className="bg-white text-center">
                    <Title title="Frequently Asked Questions" />
                </section>

                {/* Framed FAQ Section with BG Image */}
                <section className="relative py-16 lg:py-60 px-6 sm:px-10 md:px-20 flex justify-center items-center">
                    {/* Background Frame Image */}
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/faq-bg.jpeg"
                            alt="FAQ Background Frame"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    </div>


                    {/* FAQ Content Box */}
                    <div className="max-w-4xl w-full bg-[#f9f9f6]  shadow-xl px-10 py-10 text-[#1e1e1e] backdrop-blur-sm">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold">How much does it cost to lease a suite?</h3>
                                <p>Suite prices vary depending on the size and location of the suite. We offer flexible options to suit different budgets, and pricing is always transparent with no hidden fees.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">What’s included with the suite lease?</h3>
                                <p>Each lease includes high-speed Wi-Fi, 24/7 secured access, private sinks (pedestal or shampoo), free laundry facilities, maintenance support, and access to break rooms and parking.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Can I tour the space before signing?</h3>
                                <p>Absolutely! We encourage you to schedule a private tour so you can explore available suites and ask questions before making a decision.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Can I decorate or remodel my suite?</h3>
                                <p>Yes, we want your suite to reflect your brand and creativity. You're welcome to paint, decorate, and add furnishings as long as they comply with our safety standards.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Are utilities and internet included?</h3>
                                <p>Yes. Your lease covers all standard utilities, and we provide reliable high-speed internet at no extra cost.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Can I share my suite with another professional?</h3>
                                <p>We allow co-leasing in select suites. If you plan to share, let us know during the application process so we can help set you up with the right space.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Is there parking available for my clients?</h3>
                                <p>Yes, we offer ample parking spaces for both you and your clients. All locations are designed with accessibility and convenience in mind.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">What happens if something breaks or I need help?</h3>
                                <p>Our on-call maintenance team is quick to respond. Just submit a support request and we’ll take care of it as soon as possible.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">How do I apply for a suite?</h3>
                                <p>You can fill out the contact form on our website or reach out to our leasing team. We’ll guide you through the process, schedule a tour, and help you find your perfect suite.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
