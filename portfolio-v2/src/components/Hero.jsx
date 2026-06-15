export default function Hero() {
    return (
        <div className="max-w-[1100px] mx-auto px-6 pt-8 md:pt-24 border-b border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                <div className="flex-1 md:pr-12">
                    <p className="text-amber-500 text-sm font-mono mb-4">Co-Founder & CTO · MyAppZone / Neareo · Belgium</p>
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">Sujoy<br/>Mondal</h1>
                    <p className="text-gray-300 text-xl mb-4">Built and operated a production no-code platform used by museums, tourism institutions and cultural organizations across Europe.</p>
                    <p className="text-amber-500 text-lg mb-6">One engineer. Ten years. End-to-end ownership.</p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <a href="/case-studies" className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
                            View Case Studies
                        </a>
                        <a href="/Sujoy_Mondal_CV_v2.0.pdf" download className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-950 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
                            Download CV
                        </a>
                        <span className="text-gray-500 text-xs font-mono">2-page PDF · Updated June 2026</span>
                    </div>

                    {/* Looking for */}
                    <div className="mb-10">
                        <p className="text-gray-400 text-sm font-mono mb-2">Currently exploring</p>
                        <div className="flex flex-wrap gap-2">
                            {['Senior Product Engineer', 'Platform Engineer', 'Founding Engineer', 'Remote · Full-time'].map(role => (
                                <span key={role} className="text-xs font-mono bg-gray-800 text-gray-300 border border-gray-700 px-3 py-1 rounded-full">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <img src="/sujoy.jpg" alt="Sujoy Mondal" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mt-4 md:mt-0 mx-auto md:mx-0 flex-shrink-0" />
            </div>
        </div>
    )
}