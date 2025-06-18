import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import Image from 'next/image'


const transitionVariants = {
    container: {},
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden  ">

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3EA3FE]   to-stone-50  z-[-2]" />

                {/* <div className="absolute top-[10%] left-0 w-full h-[700px] rounded-l-full rounded-t-md rounded-r-full bg-white  blur-3xl z-[-1]" /> */}

                <Image src="/cirblu.svg" alt="hero" width={900} height={900} className="absolute top-[10%] left-[10%] w-[80%] h-[80%] z-[-1] blur-[5px]" />

                <section>
                    <div className="relative pt-12 md:pt-24 lg:pt-42">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {},
                            }}
                            className="absolute inset-0 -z-20">
                            <></>
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center mt-16 sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className=" group mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 ">
                                        <span className="text-white text-sm">Booking Slots Available from July 1st</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className=" max-w-4xl mx-auto font-libre-caslon tracking-tighter leading-tight mt-8  text-5xl md:text-7xl lg:mt-8 xl:text-[4.75rem] text-white">
                                    We Build and Launch Your MVP in Weeks
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="font-manrope mx-auto mt-4 max-w-2xl text-balance text-lg text-white">
                                    At MVP Experience, we help founders rapidly build affordable MVPs, so you can validate ideas, attract investors, and launch faster.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        item: {
                                          hidden: {
                                            opacity: 0,
                                            filter: 'blur(12px)',
                                            y: 12,
                                          },
                                          visible: {
                                            opacity: 1,
                                            filter: 'blur(0px)',
                                            y: 0,
                                            transition: {
                                              bounce: 0.3,
                                              duration: 1.5,
                                            },
                                          },
                                        },
                                    }}
                                    className="mt-8 flex flex-row items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="rounded-xl px-5 ">
                                            <Link href="#link">
                                                <span className="text-nowrap text-sky-500">Start Building</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap text-white">View Pricing</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        item: {
                                          hidden: {
                                            opacity: 0,
                                            filter: 'blur(12px)',
                                            y: 12,
                                          },
                                          visible: {
                                            opacity: 1,
                                            filter: 'blur(0px)',
                                            y: 0,
                                            transition: {
                                              bounce: 0.3,
                                              duration: 1.5,
                                            },
                                          },
                                        },
                                    }}
                                    className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div className='flex items-center justify-center gap-3 text-sm text-white'>
                                        <div className='flex items-center gap-2 '> <Image src='/check.png' alt='Websites' width={20} height={20} />Websites</div>
                                        <div className='flex items-center gap-2 '> <Image src='/check.png' alt='Mobile Apps' width={20} height={20} />Mobile Apps</div>
                                        <div className='flex items-center gap-2 '> <Image src='/check.png' alt='AI Wrappers' width={20} height={20} />AI Wrappers</div>
                                    </div>


                                </AnimatedGroup>

                             
                            </div>
                        </div>


                    </div>
                </section>
            </main>
        </>
    )
}
