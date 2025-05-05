"use client";
import Image from "next/image";
import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
    return (
        <>
            <div className="content min-h-[calc(100vh-300px-7.5vh)] ">
                <div className="sectionOne  relative  w-full flex items-start flex-col justify-center mb-[50px] xl:mb-[100px] 2xl:mb-[200px] h-[400px] md:h-[unset]">
                    <div className="upper h-[unset] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px] w-full flex justify-center flex-col">
                        <h6 id="tttteee" className="text-sm w-fit z-10">
                            We Make it happen
                        </h6>
                        <h1 className="text-4xl mb-5 md:hidden">
                            Apps <br /> Websites <br />
                            Branding
                        </h1>
                        <ul className="hidden md:flex justify-between w-full">
                            <li>
                                <h1
                                    className="md:text-[60px] lg:text-[75px] xl:text-[90px] 2xl:text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "var(--fff)" }}
                                >
                                    Websites
                                </h1>
                            </li>
                            <li>
                                <h1
                                    className="md:text-[60px] lg:text-[75px] xl:text-[90px] 2xl:text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "var(--fff)" }}
                                >
                                    Apps
                                </h1>
                            </li>
                            <li>
                                <h1
                                    className="md:text-[60px] lg:text-[75px] xl:text-[90px] 2xl:text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "var(--fff)" }}
                                >
                                    Branding
                                </h1>
                            </li>
                        </ul>
                    </div>
                    <div className="lower">
                        <p className="md:text-2xl">
                            Leading digital agency with solid design and
                            development expertise
                            <br className="hidden lg:flex" />
                            based in Egypt. we build readymade websites, mobile
                            applications, and <br className="hidden lg:flex" />
                            elaborate online business services.
                        </p>
                    </div>
                </div>
                {/* section One  */}

                <div className="sectionTwo  relative w-full flex items-start flex-col justify-center  mb-[50px] xl:mb-[100px] 2xl:mb-[200px]">
                    <header className="  w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                        <h2 className=" text-2xl md:text-4xl">
                            Our
                            <br /> Works
                        </h2>
                    </header>
                    <div className="content w-full hidden xl:block ">
                        <div className="project grid grid-cols-2 2xl:min-h-[1000px]">
                            <div className="text flex items-start justify-center flex-col pl-[130px]">
                                <h3 className="text-3xl pb-2.5">Nobleman</h3>
                                <p className="leading-5">
                                    Nobleman | Luxury & Lifestyle <br />
                                    is a website for give a luxury experiance
                                    <br /> for selling Luxury
                                </p>
                            </div>
                            <div className="image overflow-hidden">
                                <ParallaxProvider>
                                    <Parallax speed={-12.5}>
                                        <Image
                                            src="/images/nobleman.avif"
                                            height={100}
                                            width={100}
                                            alt="projects images"
                                            className="h-full w-full object-cover"
                                        />
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                        </div>
                        <div className="project grid grid-cols-2 2xl:min-h-[1000px]">
                            <div className="image overflow-hidden">
                                <ParallaxProvider>
                                    <Parallax speed={-12.5}>
                                        <Image
                                            src="/images/nft_1.avif"
                                            height={100}
                                            width={100}
                                            alt="projects images"
                                            className="h-full w-full object-cover"
                                        />
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                            <div className="text flex items-start justify-center flex-col pl-[130px]">
                                <h3 className="text-3xl pb-2.5">
                                    NFT Marketplace
                                </h3>
                                <p className="leading-5">
                                    Nft Marketplace Ui Created With Anima For
                                    <br />
                                    Figma. Collect, Buy And Sell Art From More
                                    <br />
                                    Than 20k Nft Artists.
                                </p>
                            </div>
                        </div>
                        <div className="project grid grid-cols-2 2xl:min-h-[1000px]">
                            <div className="text flex items-start justify-center flex-col pl-[130px]">
                                <h3 className="text-3xl pb-2.5">
                                    Project Name
                                </h3>
                                <p className="leading-5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    <br /> adipisicing elit. Rerum, temporibus.
                                </p>
                            </div>
                            <div className="image overflow-hidden">
                                <ParallaxProvider>
                                    <Parallax speed={-12.5}>
                                        <Image
                                            src="/images/Shopify sites.avif"
                                            height={100}
                                            width={100}
                                            alt="projects images"
                                            className="h-full w-full object-cover"
                                        />
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                        </div>
                        <div className="project grid grid-cols-2 2xl:min-h-[1000px]">
                            <div className="image overflow-hidden">
                                <ParallaxProvider>
                                    <Parallax speed={-12.5}>
                                        <Image
                                            src="/images/project4.avif"
                                            height={100}
                                            width={100}
                                            alt="projects images"
                                            className="h-full w-full object-cover"
                                        />
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                            <div className="text flex items-start justify-center flex-col pl-[130px]">
                                <h3 className="text-3xl pb-2.5">
                                    Gaming Website
                                </h3>
                                <p className="leading-5">
                                    A full screen login & sign up <br />
                                    for a gaming website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content  w-full grid md:grid-cols-2 md:gap-5 xl:hidden">
                        <div className="project mb-2.5 lg:mb-0 grid grid-rows-[30%1fr] w-full sm:w-[400px] md:w-[unset] mx-auto h-[500px] md:h-[500px] xl:min-h-[1000px]">
                            <div className="text  flex items-start justify-center flex-col xl:pl-[130px]">
                                <h3 className="text-xl pb-1">Project Name</h3>
                                <p className="leading-5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    <br className="hidden sm:flex" />
                                    adipisicing elit. Rerum, temporibus.
                                </p>
                            </div>
                            <div className="image  overflow-hidden">
                                <Image
                                    src="/images/nobleman.avif"
                                    height={100}
                                    width={100}
                                    alt="projects images"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="project mb-2.5 lg:mb-0 grid grid-rows-[30%1fr] w-full sm:w-[400px] md:w-[unset] mx-auto h-[500px] md:h-[500px] xl:min-h-[1000px]">
                            <div className="text  flex items-start justify-center flex-col xl:pl-[130px]">
                                <h3 className="text-xl pb-1">Project Name</h3>
                                <p className="leading-5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    <br className="hidden sm:flex" />
                                    adipisicing elit. Rerum, temporibus.
                                </p>
                            </div>
                            <div className="image  overflow-hidden">
                                <Image
                                    src="/images/nft_1.avif"
                                    height={100}
                                    width={100}
                                    alt="projects images"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="project mb-2.5 lg:mb-0 grid grid-rows-[30%1fr] w-full sm:w-[400px] md:w-[unset] mx-auto h-[500px] md:h-[500px] xl:min-h-[1000px]">
                            <div className="text  flex items-start justify-center flex-col xl:pl-[130px]">
                                <h3 className="text-xl pb-1">Project Name</h3>
                                <p className="leading-5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    <br className="hidden sm:flex" />
                                    adipisicing elit. Rerum, temporibus.
                                </p>
                            </div>
                            <div className="image  overflow-hidden">
                                <Image
                                    src="/images/shopify sites.avif"
                                    height={100}
                                    width={100}
                                    alt="projects images"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="project mb-2.5 lg:mb-0 grid grid-rows-[30%1fr] w-full sm:w-[400px] md:w-[unset] mx-auto h-[500px] md:h-[500px] xl:min-h-[1000px]">
                            <div className="text  flex items-start justify-center flex-col xl:pl-[130px]">
                                <h3 className="text-xl pb-1">Project Name</h3>
                                <p className="leading-5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    <br className="hidden sm:flex" />
                                    adipisicing elit. Rerum, temporibus.
                                </p>
                            </div>
                            <div className="image  overflow-hidden">
                                <Image
                                    src="/images/project4.avif"
                                    height={100}
                                    width={100}
                                    alt="projects images"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="border-2 rounded-full hover:text-[var(--background)] hover:bg-[var(--foreground)] hover:border-2 hover:-[var(--foreground)] hover:scale-[0.95]"
                        style={{
                            padding: "0.7rem 1.5rem",
                            margin: "50px auto",
                            display: "block",
                            width: "fit-content",
                        }}
                    >
                        See All Projects
                    </Link>
                </div>
                {/* section Two  */}

                <div className="sectionThree relative w-full flex items-start flex-col justify-center mb-[50px] xl:mb-[100px] 2xl:mb-[200px]">
                    <header className="  w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                        <h2 className=" text-2xl md:text-4xl">
                            About <br />
                            Us
                        </h2>
                    </header>
                    <div className="content w-full md:grid md:grid-cols-2">
                        <h4 className="text-xl pb-2.5 md:text-2xl lg:text-3xl">
                            Info
                        </h4>
                        <p className="lg:text-xl">
                            We aim to be the investors we wished we had when we
                            started out. Lightning-fast, always on your side and
                            fundamentally helpful. our knowledge is your
                            knowledge. our network is your network. your
                            problems are Our problems. we don't have all the
                            answers, but we will help you to find them.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="border-2 rounded-full hover:text-[var(--background)] hover:bg-[var(--foreground)] hover:border-2 hover:-[var(--foreground)] hover:scale-[0.95]"
                        style={{
                            padding: "0.7rem 1.5rem",
                            margin: "50px auto",
                            display: "block",
                            width: "fit-content",
                        }}
                    >
                        More About US
                    </Link>
                </div>
                {/* section Three  */}

                <div className="sectionFour relative w-full flex items-start flex-col justify-center mb-[50px] xl:mb-[100px] 2xl:mb-[200px]">
                    <header className="  w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                        <h2 className=" text-2xl md:text-4xl">
                            Our <br />
                            Services
                        </h2>
                    </header>
                    <div className="content w-full md:grid md:grid-cols-2">
                        <h4 className="text-xl pb-2.5 md:text-2xl lg:text-3xl">
                            Customzed For <br /> Your needs
                        </h4>
                        <p className="lg:text-xl">
                            We're driven by user‑centered design that drives
                            productivity and increases revenue. Our expertise
                            and ingenuity are remarkable, yet we always strive
                            to outdo and outperform our previous achievements.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="border-2 rounded-full hover:text-[var(--background)] hover:bg-[var(--foreground)] hover:border-2 hover:-[var(--foreground)] hover:scale-[0.95]"
                        style={{
                            padding: "0.7rem 1.5rem",
                            margin: "50px auto",
                            display: "block",
                            width: "fit-content",
                        }}
                    >
                        More About US
                    </Link>
                </div>
                {/* section Four  */}
            </div>
        </>
    );
}
