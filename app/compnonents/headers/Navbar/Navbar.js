"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    let NavLinks = ["works", "contact"];
    let logo = "PRO";
    const pathname = usePathname();

    function isActive(href) {
        return pathname === href;
    }

    return (
        <>
            <nav className="h-[7.5vh] flex items-center justify-between px-[20px] xl:px-[40px] 2xl:px-[100px]">
                <Link href="/" className="text-md">
                    {logo}
                </Link>
                <ul className="flex">
                    {NavLinks.map((link) => {
                        let href = `/pages/${link.toLowerCase()}`;
                        return (
                            <li
                                key={link}
                                className={
                                    isActive(href) ? "active px-2" : " px-2"
                                }
                            >
                                <Link
                                    href={href}
                                    className="text-sm capitalize"
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
export default Navbar;
