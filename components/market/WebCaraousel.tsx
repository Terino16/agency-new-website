"use client"
import { AnimatedGroup } from '@/components/ui/animated-group'

const LINKS = [
    {
        name: 'Orbaflow',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149166/Web2_jbrdng.png',
    },
    {
        name: 'Mandate Wizard',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149166/Web3_h9a7yu.png',
    },
    {
        name: 'Norric',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149166/Web1_nw2bn4.png',
    },
    {
        name: 'CrestAI',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750151302/Screenshot_2025-06-17_at_2.12.31_PM_b7rfzm.png',
    },
    {
        name: 'MedConnect',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149167/Web6_xsat5x.png',
    },
    {
        name: 'ResumeAI',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750151302/Screenshot_2025-06-17_at_2.13.09_PM_t7sypf.png',
    },
    {
        name: 'ReviseMate',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149168/Web4_mxw8jl.png',
    },
    {
        name: 'BrandAI',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149169/Web5_cducju.png',
    },
];

function Carousel() {
    // Duplicate the list for seamless infinite scroll
    const items = [...LINKS, ...LINKS];
    return (
        <div className="overflow-hidden w-full h-[100px] md:h-[150px] lg:h-[300px]">
            <div
                className="flex gap-4 animate-carousel w-full h-full"
                style={{
                    width: 'max-content',
                    animation: 'carousel 70s linear infinite',
                }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center "
                    >
                        <img
                            src={item.href}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-[20px] "
                        />
                       
                    </div>
                ))}
            </div>
            <style jsx global>{`
                @keyframes carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <Carousel />
        </div>
    )
}