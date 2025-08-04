"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PhoneSectionProps {
    onShowThirdSection: (show: boolean) => void
}

export function PhoneSection({ onShowThirdSection }: PhoneSectionProps) {
    const phoneRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [hasShownThirdSection, setHasShownThirdSection] = useState(false)

    // Контент для экранов телефона
    const screenData = [
        {
            image: '/images/scroll-screens/phone-slide1.png',
            title: 'WHAT IS\nTHE PROJECT?',
            description:
                'A future-facing system for alternative minds.\nRespecting cognitive difference. Powered by\nneurotype-modeled AI.',
        },
        {
            image: '/images/scroll-screens/phone-slide2.png',
            title: 'Who is\nthe character?',
            description:
                'Meet our symbol of perception beyond the norm.\nA figure representing the beauty of different minds.',
        },
        {
            image: '/images/scroll-screens/phone-slide3.png',
            title: 'The AI Agents',
            description:
                'Autistic, ADHD, bipolar, dyslexic and more —\nSimulated agents that help explore and embody diverse perceptions.',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!phoneRef.current || !scrollContainerRef.current) return

            const phoneSection = phoneRef.current
            const rect = phoneSection.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Проверяем, находимся ли мы в секции с телефоном
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                // Вычисляем прогресс скролла внутри секции телефона
                const sectionHeight = phoneSection.offsetHeight - windowHeight
                const scrolled = Math.abs(rect.top)
                const progress = Math.min(scrolled / sectionHeight, 1)

                // Вычисляем текущий индекс слайда на основе прогресса
                const progressPerScreen = 1 / screenData.length
                const newSlideIndex = Math.min(
                    Math.floor(progress / progressPerScreen),
                    screenData.length - 1
                )

                setCurrentSlideIndex(newSlideIndex)

                // Показываем третий блок только когда пользователь доскроллил до последнего слайда
                if (newSlideIndex >= screenData.length - 1 && !hasShownThirdSection) {
                    setHasShownThirdSection(true)
                    onShowThirdSection(true)
                }
            } else {
                if (rect.bottom < windowHeight) {
                    setCurrentSlideIndex(screenData.length - 1)
                    if (!hasShownThirdSection) {
                        setHasShownThirdSection(true)
                        onShowThirdSection(true)
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [onShowThirdSection, screenData.length, hasShownThirdSection])

    return (
        <section ref={phoneRef} className="relative" style={{ height: `${(screenData.length - 1) * 100}vh` }}>
            {/* Фиксированный фон с изображением */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/images/phone-bg.png)",
                    backgroundAttachment: "fixed",
                }}
            />

            <div
                ref={scrollContainerRef}
                className="sticky top-0 h-screen flex items-center justify-center px-4 relative z-10"
            >
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Phone Frame */}
                        <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                                {/* Phone Screen Content */}
                                <div className="absolute inset-0">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentSlideIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.2, ease: "circInOut" }}
                                            className="h-full flex flex-col"
                                        >
                                            <div className="h-full bg-phoneContent pl-9 pt-13 pr-7.5 pb-4 flex flex-col justify-start">
                                                <div className="">
                                                    <h1 className="font-secondary text-[32px] font-bold">
                                                        NEUROTOK
                                                    </h1>
                                                </div>

                                                <div className="mt-16">
                                                    <h2 className="font-secondary text-5xl font-bold leading-12 tracking-tighter">
                                                        {screenData[currentSlideIndex].title}
                                                    </h2>
                                                </div>

                                                <div className="mt-8">
                                                    <p className="font-main text-base leading-6">
                                                        {screenData[currentSlideIndex].description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex items-center justify-center">
                                                <motion.div
                                                    initial={{ scale: 0.9, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ duration: 0.12, ease: "easeOut" }}
                                                    className="w-full h-full"
                                                >
                                                    <Image
                                                        width="444"
                                                        height="579"
                                                        className="w-full h-full object-cover"
                                                        src={screenData[currentSlideIndex].image}
                                                        alt="phone-slide"
                                                    />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Phone Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                            </div>
                        </div>

                        {/* Slide Indicator */}
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            {screenData.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === currentSlideIndex ? 'bg-yellow-400' : 'bg-gray-600'
                                        }`}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{
                                        scale: index === currentSlideIndex ? 1.2 : 0.8,
                                        opacity: index === currentSlideIndex ? 1 : 0.5
                                    }}
                                    transition={{ duration: 0.06, ease: "easeOut" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
