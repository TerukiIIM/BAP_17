// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import BurgerMenu from "./components/header/BurgerMenu";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Info from "./components/footer/Info";
import Livre from "./components/Livre";
import Teste from "./components/Teste";
import "./index.css";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-[100%] h-screen">
                <header className="fixed w-full flex justify-between z-50">
                    <BurgerMenu />
                    <div className="w-15"></div>
                </header>

                <main className="h-full">
                    <section className="flex h-[100vh] flex-col justify-center items-center ">
                        <img
                            src="../public/LOGO.png"
                            className="pb-[-20px] w-96 md:w-[800px]"
                            alt="logo de la maison ... "
                        />
                        <div className="flex  flex-col justify-center items-center overflow-hidden">
                            <h1 className="w-10/12 text-7xl md:text-[140px] md:w-3xl">
                                Bienvenue
                            </h1>
                            <p className="mt-2 md:mt-0 w-[360px] md:w-3xl text-center relative text-[10px] md:text-[16px]">
                                Embarque pour une aventure interactive où chaque
                                défi te fait grandir! Apprends en t’amusant sur
                                l’éducation, le digital et la sécurité routière
                                à travers des jeux captivants et des missions
                                palpitantes.
                            </p>
                            <svg
                                className="ml-52 md:ml-[450px] w-48 md:w-[460px] absolute mt-28 md:mt-60 "
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
                    <section
                        className="h-[100vh] flex  flex-col items-center justify-center"
                        id="1"
                    >
                        <div
                            className="md:w-[530px] m-5 p-[40px] flex-col rounded-4xl"
                            id="shadow"
                        >
                            <div className=" w-3/6 flex  flex-col items-start mb-[40px]">
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
                            <div className="bg-[#1f2a330d] md:h-[341px] flex justify-center items-center p-[20px]">
                                <img
                                    className=" md:w-[311px] md:h-[247px]"
                                    src="../public/play.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>

                    <section className="h-[100vh] w-full flex  flex-col items-end">
                        <Section3 />
                    </section>

                    <section className="w-full flex flex-col relative">
                        <div className="absolute">
                            <Teste />
                        </div>
                        <div
                            className="w-full h-[100vh] relative flex flex-col items-center justify-center"
                            id="2"
                        >
                            <div className="block h-full w-full">
                                <div className="bg-[#1F2A33] -mt-1 h-40 flex justify-end items-center pe-16 text-white text-xl">
                                    <p>
                                        Il faut lire Robin... <br /> je crois
                                        qu’il faut le toucher !
                                    </p>
                                </div>
                            </div>
                            <div className="absolute">
                                <Livre />
                            </div>
                            <div className="w-full flex justify-center  md:flex-row">
                                <div className="md:w-1/2 flex md:mt-14 -mt-[1425px] md:justify-start  justify-center flex-col md:pl-52 mx-2">
                                    <p
                                        className="text-[30px] md:text-[32px] mt-20 pb-3 md:w-56"
                                        id="boldFont"
                                    >
                                        Les aventures de Robin
                                    </p>
                                    <p className="text-[20px] pb-2 md:w-56">
                                        Apprenez les tâches du quotidien avec
                                        Robin !
                                    </p>
                                </div>
                                <div className="w-0 md:w-1/2 flex mr-[8%] -mt-24 pb-10 justify-center">
                                    <img
                                        className=""
                                        src="../public/H1.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" flex w-full flex-row mb-14 md:mb-0">
                            <div
                                className="h-[100vh] md:w-1/2 w-full  flex flex-col justify-center items-center md:items-start"
                                id="3"
                            >
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
                            <div className="h-0 w-0 md:h-[100vh] md:w-1/2 flex flex-col justify-center items-center">
                                <img
                                    src="../public/A1.png"
                                    className=" z-30"
                                    alt=""
                                />
                                <img
                                    className=" z-30 ml-48"
                                    src="../public/A3.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-48"
                                    src="../public/A2.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-[500px]"
                                    src="../public/A4.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className=" flex w-full flex-row mb-14 md:mb-0">
                            <div className="h-[100vh] md:w-1/2 w-full   flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10">
                                    <p className="font-[500] text-[32px] mb-[16px]">
                                        L’ère du digital
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
                            <div className="h-0 w-0 md:h-[100vh] md:w-1/2  flex flex-col justify-center items-center">
                                <img
                                    className=" z-30 ml-60"
                                    src="../public/B1.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-44"
                                    src="../public/B3.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-96"
                                    src="../public/B2.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-[520px]"
                                    src="../public/B4.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 mr-[520px]"
                                    src="../public/B5.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className=" flex w-full flex-row ">
                            <div className="h-[100vh] md:w-1/2 w-full   flex flex-col justify-center items-center md:items-start">
                                <div className="md:ml-40 w-full md:max-w-2xl p-10">
                                    <p className="font-[500] text-[32px] mb-[16px]">
                                        L’éducation
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
                            <div className="h-0 w-0 md:h-[100vh] md:w-1/2  flex flex-col justify-center items-center">
                                <img
                                    className=" z-30 ml-72"
                                    src="../public/C1.png"
                                    alt=""
                                />
                                <img
                                    className=" z-30 ml-72"
                                    src="../public/C3.png"
                                    alt=""
                                />
                                <img src="../public/C2.png" alt="" />
                            </div>
                        </div>
                    </section>

                    <section className="text-white">
                        <Info />
                    </section>
                </main>
            </div>
        </>
    );
}

export default App;
