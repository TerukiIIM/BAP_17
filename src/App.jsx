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
                    </section>

                    <section className="w-full flex flex-col">
                        <div className="w-full h-[100vh] relative flex flex-col items-center justify-center">
                            <div className="block h-full w-full">
                                <div className="bg-[#1F2A33] h-40 flex justify-end items-center pe-16 text-white text-xl">
                                    <p>
                                        Il faut lire Robin... <br /> je crois
                                        qu’il faut le toucher !
                                    </p>
                                </div>
                            </div>
                            <img
                                className="absolute mt-14 z-20 w-3xl "
                                src="/livre.png"
                                alt="Livre"
                            />
                            <div className="w-full flex flex-row">
                                <div className="w-1/2 flex flex-col pl-52 ">
                                    <p
                                        className=" text-[32px] mt-20 pb-3 w-56"
                                        id="boldFont"
                                    >
                                        Les aventures de Robin
                                    </p>
                                    <p className="text-[20px] pb-2 w-56">
                                        Apprenez les taches du quotidien avec
                                        Robin !
                                    </p>
                                </div>
                                <div className="w-1/2 flex mr-[8%] -mt-24 pb-10 justify-center">
                                    <img
                                        className=""
                                        src="../public/H1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" flex w-full flex-row ">
                            <div className="h-[100vh] w-1/2 bg-amber-300  flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10">
                                    <p className=" text-[32px] mb-[16px]">
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
                            <div className="h-[100vh] w-1/2 bg-amber-700 flex flex-col justify-center items-center">
                                <img src="../public/A1.png" alt="" />
                                <img src="../public/A3.png" alt="" />
                                <img src="../public/A2.png" alt="" />
                                <img src="../public/A4.png" alt="" />
                            </div>
                        </div>
                        <div className=" flex w-full flex-row ">
                            <div className="h-[100vh] w-1/2 bg-amber-200  flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10">
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
                            <div className="h-[100vh] w-1/2 bg-amber-600 flex flex-col justify-center items-center">
                                <img src="../public/B1.png" alt="" />
                                <img src="../public/B3.png" alt="" />
                                <img src="../public/B2.png" alt="" />
                                <img src="../public/B4.png" alt="" />
                                <img src="../public/B5.png" alt="" />
                            </div>
                        </div>
                        <div className=" flex w-full flex-row ">
                            <div className="h-[100vh] w-1/2 bg-amber-100  flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10">
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
                            <div className="h-[100vh] w-1/2 bg-amber-500 flex flex-col justify-center items-center">
                                <img src="../public/C1.png" alt="" />
                                <img src="../public/C3.png" alt="" />
                                <img src="../public/C2.png" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="text-white">
                        <div className="bg-[#1F2A33] p-10 flex items-start justify-center">
                            <img
                                className="mt-10"
                                src="../public/H2.png"
                                alt=""
                            />

                            <div className="ml-6">
                                <p className="text-xl" id="boldFont2">
                                    Mairie du Plessis-Robinson
                                </p>
                                <p className="text-3xs mt-8">
                                    3, place de la Mairie 92350 <br />
                                    Le Plessis-Robinson
                                </p>
                                <p className="text-3xs mb-4" id="boldFont2">
                                    01 46 01 43 21
                                </p>
                                <p
                                    className="flex flex-row items-center text-3xs"
                                    id="boldFont2"
                                >
                                    <svg
                                        className="mr-3"
                                        width="20"
                                        height="16"
                                        viewBox="0 0 20 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Contactez-nous
                                </p>
                            </div>

                            <div className="mx-14">
                                <p className="text-xl" id="boldFont2">
                                    Horaires
                                </p>
                                <div className="flex flex-row mt-8">
                                    <p className="text-3xs mr-2" id="boldFont2">
                                        Lundi
                                    </p>
                                    <p>de 8h30 à 12h et de 13h à 17h</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-3xs mr-2" id="boldFont2">
                                        Lundi
                                    </p>
                                    <p>de 8h30 à 12h et de 13h à 17h</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-3xs mr-2" id="boldFont2">
                                        Lundi
                                    </p>
                                    <p>de 8h30 à 12h et de 13h à 17h</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-3xs mr-2" id="boldFont2">
                                        Lundi
                                    </p>
                                    <p>de 8h30 à 12h et de 13h à 17h</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-3xs mr-2" id="boldFont2">
                                        Lundi
                                    </p>
                                    <p>de 8h30 à 12h et de 13h à 17h</p>
                                </div>
                            </div>

                            <div className="mr-14">
                                <p className="text-xl" id="boldFont2">
                                    Suivez-nous
                                </p>

                                <div className="flex flex-row items-center mt-8 text-3xs mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-instagram"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line
                                            x1="17.5"
                                            x2="17.51"
                                            y1="6.5"
                                            y2="6.5"
                                        />
                                    </svg>
                                    <svg
                                        className="ml-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-linkedin"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect
                                            width="4"
                                            height="12"
                                            x="2"
                                            y="9"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <svg
                                        className="ml-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                    <svg
                                        className="ml-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="">
                                <p className="text-xl" id="boldFont2">
                                    Presse
                                </p>

                                <p className="flex flex-row items-center mt-8 text-3xs mr-2">
                                    <svg
                                        className="mr-3"
                                        width="20"
                                        height="16"
                                        viewBox="0 0 20 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.45455 12.4444C4.95455 12.4444 4.52652 12.2704 4.17045 11.9222C3.81439 11.5741 3.63636 11.1556 3.63636 10.6667V1.77778C3.63636 1.28889 3.81439 0.87037 4.17045 0.522222C4.52652 0.174074 4.95455 0 5.45455 0H18.1818C18.6818 0 19.1098 0.174074 19.4659 0.522222C19.822 0.87037 20 1.28889 20 1.77778V10.6667C20 11.1556 19.822 11.5741 19.4659 11.9222C19.1098 12.2704 18.6818 12.4444 18.1818 12.4444H5.45455ZM11.8182 8.26667L5.45455 3.93333V10.6667H18.1818V3.93333L11.8182 8.26667ZM11.8182 6.08889L18.1818 1.77778H5.45455L11.8182 6.08889ZM1.81818 16C1.31818 16 0.890152 15.8259 0.534091 15.4778C0.17803 15.1296 0 14.7111 0 14.2222V3.11111H1.81818V14.2222H16.8182V16H1.81818Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Communiqués de presse
                                </p>
                            </div>
                        </div>
                        <div className="h-10 bg-black flex flex-row justify-center items-center text-xs">
                            <a href="">Mentions légales 32 16 20</a>
                            <hr className="border-none w-0.5 bg-white h-5 m-10" />
                            <a href="">Modalités relatives aux cookies</a>
                            <hr className="border-none w-0.5 bg-white h-5 m-10" />
                            <a href="">Politique de confidentialité</a>
                            <hr className="border-none w-0.5 bg-white h-5 m-10" />
                            <a href="">Plan du site</a>
                            <hr className="border-none w-0.5 bg-white h-5 m-10" />
                            <a href="">Accessibilité</a>
                        </div>
                    </section>
                </main>
                <footer></footer>
            </div>
        </>
    );
}

export default App;
