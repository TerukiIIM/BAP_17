import { useEffect, useRef, useState } from "react";
import "../index.css";

const BusAnimation = () => {
    const bus2Ref = useRef(null);
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
        <div className="relative h-screen w-full flex flex-col items-center justify-end">
            <div>
                <p>Une histoire</p>
                <p>Une aventure</p>
            </div>
            <img
                src="../public/ville.svg"
                className="w-[9000px] overflow-hidden"
                alt=""
            />
            <div className="w-full h-40 bg-[#1F2A33]"></div>
            <div className="w-full absolute mb-14" ref={bus2Ref}>
                <img
                    src="/bus.svg"
                    className={` bus2 ${isVisible ? "bus2-animate" : ""}`}
                    alt="Bus en mouvement"
                    loading="eager"
                />
            </div>
        </div>
    );
};

export default BusAnimation;
