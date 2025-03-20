import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BurgerMenu from "./components/BurgerMenu";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-[100%] h-screen">
                <header className="fixed w-full flex justify-between z-50">
                    <BurgerMenu />

                    <div className="w-15"></div>
                </header>
                <main className="h-full">
                    <section className="flex h-[100vh] flex-col justify-center items-center">
                        <img
                            src="../public/LOGO.png"
                            className="pb-[-20px]"
                            alt="logo de la maison ... "
                        />
                        <div className="flex  flex-col justify-center items-center">
                            <h1 className="w-10/12 text-7xl md:text-[140px] md:w-3xl">
                                Bienvenue
                            </h1>
                            <p className=" w-[398px] md:w-3xl text-center relative text-[12px] md:text-[16px]">
                                Embarque pour une aventure interactive où chaque
                                défi te fait grandir ! Apprends en t’amusant sur
                                l’éducation, le digital et la sécurité routière
                                à travers des jeux captivants et des missions
                                palpitantes.
                            </p>
                            <svg
                                className="ml-52 md:ml-[450px] w-56 md:w-[460px] absolute mt-32 md:mt-60"
                                viewBox="0 0 460 245"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M363.066 0.695912C361.518 0.106986 359.785 0.885001 359.196 2.43366C358.607 3.98231 359.385 5.71516 360.934 6.30409L363.066 0.695912ZM456 92.5L458.977 92.8682L456 92.5ZM17.4999 244.5L34.7631 214.467L0.122177 214.533L17.4999 244.5ZM360.934 6.30409C378.596 13.0209 403.173 23.9007 422.59 38.5806C442.12 53.3461 455.599 71.2939 453.023 92.1318L458.977 92.8682C461.965 68.7061 446.194 48.9039 426.208 33.7944C406.109 18.5993 380.903 7.47908 363.066 0.695912L360.934 6.30409ZM453.023 92.1318C451.853 101.593 445.38 109.363 433.853 115.851C422.308 122.35 406.142 127.288 386.613 131.174C347.572 138.942 296.133 142.321 243.763 146.202C191.536 150.073 138.414 154.443 96.457 164.255C75.4761 169.162 57.094 175.471 42.9439 183.879C28.7782 192.296 18.6108 202.968 14.5711 216.658L20.3257 218.356C23.7931 206.606 32.6274 196.988 46.0088 189.037C59.4057 181.077 77.116 174.94 97.8234 170.098C139.243 160.411 191.882 156.063 244.206 152.186C296.387 148.318 348.289 144.917 387.784 137.058C407.524 133.131 424.425 128.044 436.796 121.08C449.187 114.105 457.48 104.973 458.977 92.8682L453.023 92.1318Z"
                                    fill="#FFED00"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="h-[100vh] flex justify-center items-center flex-col">
                        <Section2 />
                    </section>
                    <section className="h-[100vh] flex  flex-col items-center">
                        <div
                            className="w-[530px] p-[40px] flex-col rounded-4xl"
                            id="shadow"
                        >
                            <div className="w-3/6 flex  flex-col items-start mb-[40px]">
                                <p className=" text-[32px]" id="boldFont">
                                    Robin
                                </p>
                                <p className=" text-[16px] w-52">
                                    Aide Robin à avoir une bonne hygiène de vie
                                </p>
                                <a className="bg-black text-[12px] text-white text-center px-3.5 py-0.5 rounded-[10px] mt-[16px]">
                                    PLAY
                                </a>
                            </div>
                            <div className="bg-[#1f2a330d] h-[341px] flex justify-center items-center p-[20px]">
                                <img
                                    className=" w-[311px] h-[247px]"
                                    src="../public/play.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>

                    <section className="h-[100vh] w-full flex  flex-col items-end">
                        <Section3 />
                        {/* <img
                            src="../public/ville.svg"
                            className="w-[9000px] overflow-hidden"
                            alt=""
                        />
                        <div className="w-full h-40 bg-[#1F2A33]"></div> */}
                    </section>

                    <section className=" flex flex-col">
                        {/* <div className="w-full h-[100vh] flex flex-col items-center justify-around">
                            <div className="relative w-full h-40 bg-[#1F2A33]"></div>
                            <img
                                className="absolute z-20 w-5xl"
                                src="/livre.png"
                                alt="Livre"
                            />
                            <div className="w-full relative flex justify-between">
                                <div className="ml-30 mt-30">
                                    <p className="font-bold text-4xl pb-3">
                                        TITRE
                                    </p>
                                    <p className="text-2xl w-80 pb-2">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Mattis vulputate purus nisi sem
                                        malesuada sit eget.
                                    </p>
                                </div>
                                <img
                                    className="absolute -mt-15 right-80"
                                    src="/madquote 2 1.png"
                                    alt=""
                                />
                                <img
                                    className="mt-20"
                                    src="/arbres.png"
                                    alt="Arbres"
                                />
                            </div>
                        </div> */}

                        <div className="w-full flex flex-col ">
                            <div className="h-[100vh] w-full flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10 bg-red-600 ">
                                    <p className="font-[500] text-[32px] mb-[16px]">
                                        Sécutité routière
                                    </p>
                                    <p className="text-[16px] italic mb-[32px]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Semper id tortor dictumst ultrices porta
                                        amet.
                                    </p>

                                    <div className="mb-[32px]">
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px] ">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="h-[100vh] w-full flex flex-col justify-center items-start">
                                <div className="ml-40 w-[584px]">
                                    <p className="font-[500] text-[32px] mb-[16px]">
                                        Sécutité routière
                                    </p>
                                    <p className="text-[16px] italic mb-[32px]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Semper id tortor dictumst ultrices porta
                                        amet.
                                    </p>

                                    <div className="mb-[32px]">
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px] ">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[100vh] w-full flex flex-col justify-center items-start">
                                <div className="ml-40 w-[584px]">
                                    <p className="font-[500] text-[32px] mb-[16px]">
                                        Sécutité routière
                                    </p>
                                    <p className="text-[16px] italic mb-[32px]">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Semper id tortor dictumst ultrices porta
                                        amet.
                                    </p>

                                    <div className="mb-[32px]">
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-medium text-[20px] mb-[16px]">
                                            Titre
                                        </p>
                                        <p className="text-[16px] ">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Fames tempus enim at eu
                                            lorem gravida suscipit. Ut
                                            consectetur gravida sit tellus massa
                                            mauris enim. Dolor consectetur urna
                                            malesuada at vitae. Adipiscing
                                            feugiat pulvinar sit placerat lacus
                                            eget. Odio sed amet libero aliquet
                                            magna sit vel. Mauris augue
                                            ultricies nunc aliquam. Nunc in
                                            gravida in elementum ultrices morbi.
                                            Sagittis nunc id massa feugiat amet
                                            mattis amet et fusce. Mi praesent
                                            faucibus sem amet sit cursus aliquet
                                            pulvinar tristique.
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="relative w-3xl  ">
                                <svg
                                    className=""
                                    viewBox="0 0 647 2809"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_d_0_1)">
                                        <path
                                            d="M470.704 17.9371C635.642 54.7887 651.915 254.69 606.959 324.678C570.994 380.667 455.856 279.519 350.855 323.723C209 383.443 198 577.5 336.501 550C561.004 505.425 309.9 763.8 259.5 887"
                                            stroke="#FFBB00"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                    <g filter="url(#filter1_d_0_1)">
                                        <path
                                            d="M264.501 876.001C212 988 292.872 1040.99 323 1069C380 1122 398 1182 386.5 1233C369.284 1309.35 362.319 1353.56 279.5 1384.5C147 1434 207.5 1602 207.5 1602C219 1628 222.3 1714.9 113.5 1724.5C4.7002 1734.1 68.1669 1837.83 113.5 1888.5"
                                            stroke="#FFBB00"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                    <g filter="url(#filter2_d_0_1)">
                                        <path
                                            d="M91.9941 1860.5C153.494 1921.5 292.866 2022.99 322.994 2051C379.994 2104 397.994 2164 386.495 2215C369.278 2291.35 313.819 2272.06 230.999 2303C98.4992 2352.5 183.501 2516.5 183.501 2516.5C255.503 2648 436.437 2530.36 508.999 2612C580.998 2693 353.498 2823 17.4984 2784.5"
                                            stroke="#FFBB00"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_0_1"
                                            x="220.832"
                                            y="0.436523"
                                            width="425.195"
                                            height="904.064"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="7.5" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="out"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0 0 0 0 0 1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_0_1"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_0_1"
                                                result="shape"
                                            />
                                        </filter>
                                        <filter
                                            id="filter1_d_0_1"
                                            x="35.9258"
                                            y="858.5"
                                            width="371.371"
                                            height="1047.5"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="7.5" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="out"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0 0 0 0 0 1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_0_1"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_0_1"
                                                result="shape"
                                            />
                                        </filter>
                                        <filter
                                            id="filter2_d_0_1"
                                            x="0"
                                            y="1843"
                                            width="539.832"
                                            height="965.964"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="7.5" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="out"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0 0 0 0 0 1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_0_1"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_0_1"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div> */}
                        </div>
                    </section>
                </main>
                <footer></footer>
            </div>
        </>
    );
}

export default App;
