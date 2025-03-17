"use client";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";

function Navbar() {
    let NavLinks = ["works", "contact"];
    let logo = "Programmer";
    const pathname = usePathname();

    function isActive(href) {
        return pathname === href;
    }

    return (
        <>
            <nav className="h-[7.5vh] flex items-center justify-between px-[20px] xl:px-[40px] 2xl:px-[100px]">
                <TransitionLink href="/" label={logo} className="bg-red-400" />
                <ul className="flex">
                    <li
                        key="Home"
                        className={isActive("/") ? "underline px-2" : "px-2"}
                    >
                        <TransitionLink href="/" label="Home" />
                    </li>
                    {NavLinks.map((link) => {
                        let href = `/${link.toLowerCase()}`;
                        return (
                            <li
                                key={link}
                                className={
                                    isActive(href) ? "underline px-2" : "px-2"
                                }
                            >
                                <TransitionLink href={link} label={link} />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
export default Navbar;
