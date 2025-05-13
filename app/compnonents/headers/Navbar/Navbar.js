"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
    const NavLinks = ["works", "contact", "About"];
    const logo = "PRO";
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    function isActive(href) {
        return pathname === href;
    }

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("active");
            setIsOpen(true);
        } else {
            document.body.classList.remove("active");
            setIsOpen(false);
        }
    }, []);

    const themeClick = () => {
        const newTheme = !isOpen ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("active");
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="h-[7.5vh] flex items-center justify-between px-[20px] xl:px-[40px] 2xl:px-[100px]">
            <Link href="/" className="text-md">
                {logo}
            </Link>
            <ul className="flex items-center">
                {NavLinks.map((link) => {
                    const href = `/pages/${link.toLowerCase()}`;
                    return (
                        <li
                            key={link}
                            className={`px-2 leading-none ${
                                isActive(href) ? "active" : ""
                            }`}
                        >
                            <Link href={href} className="text-sm capitalize">
                                {link}
                            </Link>
                        </li>
                    );
                })}
                <li
                    className="theme border h-[18px] w-[35px] rounded-full cursor-pointer relative ml-2"
                    onClick={themeClick}
                >
                    <div
                        className={`bg-[var(--foreground)] h-[12px] w-[12px] rounded-full absolute top-[2px] ${
                            isOpen ? "right-[2px]" : "left-[2px]"
                        }`}
                        style={{
                            transition: "1s ease right, 1s ease left",
                        }}
                    ></div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;