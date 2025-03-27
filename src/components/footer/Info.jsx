import "../../App.css";

function Info() {
    return (
        <div>
            <div className="bg-[#1F2A33] mt-10 p-10 flex flex-col md:flex-row md:items-start justify-center md:justify-around">
                <img
                    className="md:mt-10 hidden md:flex  md:w-100%"
                    src="../public/H2.png"
                    alt=""
                />
                <div className="mb-10 md:mb-0">
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
                <div className="mb-10 md:mb-0">
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
                            Mardi
                        </p>
                        <p>de 8h30 à 12h et de 13h à 17h</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-3xs mr-2" id="boldFont2">
                            Mercredi
                        </p>
                        <p>de 8h30 à 12h et de 13h à 17h</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-3xs mr-2" id="boldFont2">
                            Jeudi
                        </p>
                        <p>de 8h30 à 12h et de 13h à 17h</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-3xs mr-2" id="boldFont2">
                            Vendredi
                        </p>
                        <p>de 8h30 à 12h et de 13h à 17h</p>
                    </div>
                </div>
                <div className="mb-10 md:mb-0">
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
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // class="lucide lucide-instagram"
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
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <svg
                            className="mx-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // class="lucide lucide-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        <svg
                            className="mr-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // class="lucide lucide-twitter"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            // class="lucide lucide-facebook"
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
            <div className="md:h-10 bg-black flex flex-col md:flex-row justify-center items-center text-xs">
                <a className="mt-5 md:mt-0" href="">
                    Mentions légales 32 16 20
                </a>
                <hr className="border-none w-5 md:w-0.5 bg-white h-0.5 md:h-5 m-5 md:m-10" />
                <a href="">Modalités relatives aux cookies</a>
                <hr className="border-none w-5 md:w-0.5 bg-white h-0.5 md:h-5 m-5 md:m-10" />
                <a href="">Politique de confidentialité</a>
                <hr className="border-none w-5 md:w-0.5 bg-white h-0.5 md:h-5 m-5 md:m-10" />
                <a href="">Plan du site</a>
                <hr className="border-none w-5 md:w-0.5 bg-white h-0.5 md:h-5 m-5 md:m-10" />
                <a className="mb-5 md:mb-0" href="">
                    Accessibilité
                </a>
            </div>
        </div>
    );
}
export default Info;
