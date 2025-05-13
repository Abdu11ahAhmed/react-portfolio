"use client";
import Link from "next/link";

function Footer() {
    let footerLinks = ["works", "contact", "About"];
    let logo = "Programmer";
    let footerSocail = ["UpWork", "facebook", "twitter", "linkedin"];

    return (
        <>
            <footer
                className="h-[300px]  grid py-16"
                style={{
                    gridTemplateColumns: "40% 1fr 1fr",
                }}
            >
                <div className="logo">
                    <Link href="/" className="capitalize text-lg leading-0">
                        {logo}
                    </Link>
                    <p className="py-2 pr-2 text-sm">
                        Leading Modern Digital Web Development Creation Agency
                    </p>
                    <p className="text-xs">
                        &copy; {new Date().getFullYear()} {logo}. All Rights
                    </p>
                </div>
                <ul id="links">
                    <li className="pb-0.5">Main Links</li>
                    <li key="Home">
                        <Link href="/" className="py-1 text-sm capitalize">
                            Home
                        </Link>
                    </li>
                    {footerLinks.map((link) => (
                        <li key={link}>
                            <Link
                                href={`/pages/${link}`}
                                className="py-1 text-sm capitalize"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="pb-0.5">Socail Links</li>
                    {footerSocail.map((link) => (
                        <li key={link}>
                            <Link
                                className="py-1 text-sm capitalize"
                                href={`/pages/${link}`}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    );
}
export default Footer;
