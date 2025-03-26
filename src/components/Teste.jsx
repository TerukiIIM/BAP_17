import { useEffect, useRef, useState } from "react";

const ScrollRevealSvg = () => {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const [pathLength, setPathLength] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [setProgress] = useState(0);

    useEffect(() => {
        const path = pathRef.current;
        if (path) {
            const length = path.getTotalLength();
            setPathLength(length);

            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const handleScroll = () => {
            if (!containerRef.current || !isVisible) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let scrollProgress = 0;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                scrollProgress =
                    1 - (rect.top + rect.height) / (windowHeight + rect.height);
                scrollProgress = Math.max(0, Math.min(1, scrollProgress));
            } else if (rect.bottom < 0) {
                scrollProgress = 1;
            }

            setProgress(scrollProgress);

            if (path && scrollProgress > 0) {
                const drawLength = pathLength * (1 - scrollProgress);
                path.style.strokeDashoffset = drawLength;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, [pathLength, isVisible]);

    return (
        <div ref={containerRef} className="relative w-full h-full min-h-screen">
            <svg
                width="616"
                height="3517"
                viewBox="0 0 616 3517"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[800px] pt-[330px] ml-[910px] z-20"
            >
                <g filter="url(#filter0_d_781_2573)">
                    <path
                        ref={pathRef}
                        d="M417 18C417 18 556.5 60 586 167C615.5 274 586 347 561.5 363C528.63 384.466 475.516 364.113 428.5 353C401 346.5 334.896 328.853 264 363C184.877 401.11 137.511 458.748 134 546.5C130.148 642.775 163 667 273.5 750C384 833 464 893.5 502.5 936C556.821 995.965 566.041 1068.94 520 1129C489.611 1168.64 453.531 1173.17 405 1185C304.5 1209.5 237.402 1233.5 199 1277C130.963 1354.07 107.5 1440 142 1534C176.5 1628 292.5 1671.5 405 1732C517.5 1792.5 624.495 1841.61 580 1944.5C556 2000 469 2062.43 355.5 2106C242 2149.57 187.818 2169.33 152 2269.5C116.19 2369.65 149.933 2477 191 2554C215 2599 270.363 2655.72 358.5 2751C403.143 2799.26 500.134 2865.56 526 2926C553.893 2991.18 545.646 3038.47 529.5 3107.5C508.9 3195.58 469.19 3237.93 408.5 3305C352.885 3366.46 315.066 3397.81 241.5 3436C161.016 3477.78 18 3499 18 3499"
                        stroke="#FFBB00"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-out"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_781_2573"
                        x="0.5"
                        y="0.5"
                        width="615.348"
                        height="3516"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_781_2573"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_781_2573"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default ScrollRevealSvg;
