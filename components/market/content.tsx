import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32 bg-gradient-to-b from-white  to-gray-50">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-6">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl font-libre-caslon">The Process</h2>
                    <p className="text-md font-manrope">From idea to execution — here’s how we onboard you and bring your vision to life, step by step.</p>
                </div>
                <img className="rounded-(--radius) grayscale" src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="team image" height="" width="" loading="lazy" />

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">1. Discovery Call</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We kick things off with a quick call to understand your idea, goals, and what success looks like for you.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">2. Proposal & Onboarding</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We share a clear proposal with timelines, milestones, and pricing. Once approved, we onboard you onto our system.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">3. Build Phase</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Our team starts designing and developing your MVP with continuous updates and review loops.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">4. Launch & Handoff</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">We launch your product, hand over everything you need, and stay available for support and iteration.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
