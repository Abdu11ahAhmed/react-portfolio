"use client";
import Image from "next/image";
import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

function Works() {
    return (
        <>
            <div className="content min-h-[calc(100vh-300px-7.5vh)] ">
                <div className="mt-[100px] relative w-full flex items-start flex-col justify-center  mb-[50px] xl:mb-[100px] 2xl:mb-[200px]">
                    <header className=" w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                        <h2 className=" text-2xl md:text-4xl">
                            Our
                            <br /> Works
                        </h2>
                    </header>
                    <div className="content relative w-full gap-5 min-h-[450px] md:grid md:grid-cols-2 xl:min-h-[800px] 2xl:min-h-[1000px]">
                        <div className="left min-h-[450px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] mb-5 md:mb-0">
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="right min-h-[450px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] mb-5 md:mb-0 xl:mt-20 2xl:mt-40">
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                            <div className="project h-[500px] md:h-[400px] lg:min-h-[500px] xl:min-h-[800px] 2xl:min-h-[1000px] grid grid-rows-[75%1fr] md:grid-rows-[75%1fr] lg:grid-rows-[80%1fr] xl:grid-rows-[85%1fr]">
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
                                </div>{" "}
                                <div className="text flex items-center justify-center">
                                    <h4 className="w-fit block text-center">
                                        <strong>Project - </strong> Lorem ipsum,
                                        dolor sit amet consectetur adipisicing
                                        elit. Expedita, atque.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Works;
