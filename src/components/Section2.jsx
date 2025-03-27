import { useEffect, useRef, useState } from "react";

const BusAnimation = () => {
    const busRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        const currentBus = busRef.current;
        if (currentBus) {
            observer.observe(currentBus);
        }

        return () => {
            if (currentBus) {
                observer.unobserve(currentBus);
            }
        };
    }, []);

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <h2 className="h-screen text-7xl md:text-[11em] mt-80 md:mt-22 font-bold">
                C&apos;est parti !
            </h2>

            <div className="w-full absolute" ref={busRef}>
                <img
                    src="/bus.svg"
                    className={` bus ${isVisible ? "bus-animate" : ""}`}
                    alt="Bus en mouvement"
                    loading="eager"
                />
            </div>
        </div>
    );
};

export default BusAnimation;
