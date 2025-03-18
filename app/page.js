"use client";

export default function Home() {
    return (
        <>
            <div className="content h-[calc(100vh-300px-7.5vh)] border ">
                <div className="sectionOne border h-[700px] w-full flex items-start flex-col justify-center">
                    <h6 id="tttteee" className="text-sm border w-fit">
                        We Make it happen
                    </h6>
                    <h1
                        className="text-[110px] font-bold text-transparent font-[AvertaSemi] leading-[100%] border w-full"
                        style={{ WebkitTextStroke: "1px black" }}
                    >
                        Websites Apps Branding
                        <ul className="flex items-center justify-between">
                            <li>Websites</li>
                            <li>Apps</li>
                            <li>Branding</li>
                        </ul>
                    </h1>
                </div>
            </div>
        </>
    );
}
