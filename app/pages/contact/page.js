"use client";
import { useState } from "react";

function Contact() {
    const [selectedInterest, setSelectedInterest] = useState(null);
    const [selectedBudget, setSelectedBudget] = useState(null);

    const interests = [
        "Site from scratch",
        "App from scratch",
        "UI/UX design",
        "Branding",
        "Mobile development",
        "Web development",
        "Maintenance",
    ];

    const budgets = ["10-20k", "20-40k", "40-100k"];

    return (
        <div className="content min-h-[calc(100vh-300px-7.5vh)] ">
            <div className="mt-[100px] relative w-full flex items-start flex-col justify-center  mb-[50px] xl:mb-[100px] 2xl:mb-[200px]">
                {/* Header */}
                <header className=" w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                    <h2 className=" text-2xl md:text-4xl leading-normal">
                        Hey! Tell us all <br />
                        the things 👋
                    </h2>
                </header>

                {/* Interests */}
                <div className="inertset py-3.5 mb-3.5 lg:py-8 lg:mb-5 w-full">
                    <h2 className=" text-xl md:text-2xl leading-normal text-[var(--overlay--)] mb-4">
                        I'm interested in...
                    </h2>
                    <ul className="lg:w-[600px] flex flex-wrap">
                        {interests.map((item, index) => (
                            <li
                                key={index}
                                className={`border py-[10px] px-[20px] rounded-full m-1 ml-0 cursor-pointer hover:text-[var(--background)] hover:border hover:bg-[var(--foreground)] ${
                                    selectedInterest === index ? "active" : ""
                                }`}
                                style={{
                                    transition:
                                        "1s ease color, 0.5s ease background, 1s ease border",
                                }}
                                onClick={() => setSelectedInterest(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form */}
                <form className="w-full py-3.5 mb-3.5 lg:py-8 lg:mb-5">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Your name"
                        className="h-[70px] text-lg w-full mt-4 border-b-2 border-[var(--overlay--)] pl-5 placeholder:text-[var(--overlay--)] outline-0"
                    />
                    <input
                        type="text"
                        id="text"
                        name="text"
                        autoComplete="off"
                        placeholder="Your email"
                        className="h-[70px] text-lg w-full mt-4 border-b-2 border-[var(--overlay--)] pl-5 placeholder:text-[var(--overlay--)] outline-0"
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="h-[160px] text-lg w-full mt-4 border-b-2 border-[var(--overlay--)] p-5 placeholder:text-[var(--overlay--)] outline-0 resize-none"
                    ></textarea>
                </form>

                {/* Budget */}
                <div className="pudget py-3.5 mb-3.5 lg:py-8 lg:mb-5 w-full">
                    <h2 className=" text-xl md:text-2xl leading-normal text-[var(--overlay--)] mb-4">
                        Project budget (USD)
                    </h2>
                    <ul className="w-full flex">
                        {budgets.map((budget, index) => (
                            <li
                                key={index}
                                className={`border py-[10px] px-[20px] rounded-full m-1 ml-0 cursor-pointer hover:text-[var(--background)] hover:border hover:bg-[var(--foreground)] ${
                                    selectedBudget === index ? "active" : ""
                                }`}
                                style={{
                                    transition:
                                        "1s ease color, 0.5s ease background, 1s ease border",
                                }}
                                onClick={() => setSelectedBudget(index)}
                            >
                                {budget}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Submit Button */}
                <button
                    className="mt-5 border px-8 py-3 cursor-pointer rounded-full hover:text-[var(--background)] hover:border hover:bg-[var(--foreground)]"
                    style={{
                        transition:
                            "1s ease color, 0.5s ease background, 1s ease border",
                    }}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
}

export default Contact;
