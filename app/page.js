export default function Home() {
    return (
        <>
            <div className="content min-h-[calc(100vh-300px-7.5vh)] border ">
                <div className="sectionOne relative border w-full flex items-start flex-col justify-center">
                    <div className="upper  h-[700px] flex justify-center flex-col">
                        <h6 id="tttteee" className="text-sm w-fit">
                            We Make it happen
                        </h6>
                        {/* <div className="border border-black flex justify-between w-full"> */}
                            {/* <li className="border border-black">
                                <h1
                                    className="text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "1px black" }}
                                >
                                    Websites
                                </h1>
                            </li>
                            <li className="border border-black">
                                <h1
                                    className="text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "1px black" }}
                                >
                                    Apps
                                </h1>
                            </li>
                            <li className="border border-black">
                                <h1
                                    className="text-[110px] font-[avertaSemi] text-transparent leading-[100%]"
                                    style={{ WebkitTextStroke: "1px black" }}
                                >
                                    Branding
                                </h1>
                            </li> */}
                        {/* </div> */}

                        {/* <h1
                            className="text-[110px] font-bold text-transparent font-[AvertaSemi] leading-[100%] border w-full"
                            style={{ WebkitTextStroke: "1px black" }}
                        >
                            <ul className="flex items-center justify-between border border-black w-[100%]">
                                <li>Websites</li>
                                <li>Apps</li>
                                <li>Branding</li>
                            </ul>
                        </h1> */}
                    </div>
                    <div className="lower">
                        <p className="text-2xl text-black">
                            Leading digital agency with solid design and
                            development expertise <br />
                            based in Egypt. we build readymade websites, mobile
                            applications, and <br />
                            elaborate online business services.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
