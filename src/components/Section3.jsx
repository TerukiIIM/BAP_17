import { useEffect, useRef, useState } from "react";
import "../index.css";

const BusAnimation = () => {
    const bus2Ref = useRef(null);
    const cityRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTimeout(() => {
                        setAnimate(true);
                    }, 2350);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        const currentBus2 = bus2Ref.current;
        if (currentBus2) {
            observer.observe(currentBus2);
        }

        return () => {
            if (currentBus2) {
                observer.unobserve(currentBus2);
            }
        };
    }, []);

    return (
        <div className="relative h-screen w-[130%] flex flex-col items-center justify-end overflow-hidden">
            <img
                ref={cityRef}
                src="../public/ville.svg"
                className={`absolute ml-[45%]  bottom-37 w-[2500px] transition-transform duration-[5000ms] ease-linear ${
                    isVisible && isAnimate
                        ? "-translate-x-[300px] md:-translate-x-[1200px]"
                        : ""
                }`}
                alt="City Landscape"
            />
            <div className="w-full h-40 bg-[#1F2A33] absolute bottom-0"></div>
            <div
                className="w-full absolute bottom-28 md:bottom-14"
                ref={bus2Ref}
            >
                <img
                    src="/bus.svg"
                    className={`bus2 ${isVisible ? "bus2-animate" : ""}`}
                    alt="Bus en mouvement"
                    loading="eager"
                />
            </div>
        </div>
    );
};

export default BusAnimation;
