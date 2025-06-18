"use client"
import { AnimatedGroup } from '@/components/ui/animated-group'

const LINKS = [
   
    {
        name: 'The Habit Protocol',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149349/Mobile1_jc00ce.png',
    },
    {
        name: 'Habit Protocol Dashboard',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149349/Mobile3_qmsbbn.png',
    },

    {
        name: 'CalmAI',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149349/Mobile4_ayqcgk.png',
    },
    {
        name: 'CalmAI Dashboard',
        href: 'https://res.cloudinary.com/anubhav1602/image/upload/v1750149349/Mobile2_tqfpl4.png',
    },
   
];

function MobileCarousel() {
    // Duplicate the list for seamless infinite scroll
    const items = [...LINKS, ...LINKS];
    return (
        <div className="overflow-hidden w-full h-[100px] md:h-[150px] lg:h-[300px]">
            <div
                className="flex gap-6 animate-carousel w-full h-full"
                style={{
                    width: 'max-content',
                    animation: 'carousel 30s linear infinite',
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

export default function MobileCaraousel() {
    return (
        <div className="flex flex-col items-center justify-center">
            <MobileCarousel />
        </div>
    )
}