"use client";
import Link from "next/link";

function Footer() {
    let footerLinks = ["works", "contact"];
    let logo = "Programmer";
    let footerSocail = ["wpWork", "facebook", "twitter", "linkedin"];

    return (
        <>
            <footer className="h-[300px] border  grid grid-cols-3 py-16">
                <div className="logo border">
                    <Link href="/" className="uppercase text-sm">
                        {logo}
                    </Link>
                    <p className="py-2 pr-2 text-sm">
                        Leading Modern Digital Web Development Creation Agency
                    </p>
                    <p className="text-xs">
                        &copy; {new Date().getFullYear()} {logo}. All Rights
                    </p>
                </div>
                <ul id="links" className="border">
                    <h2 className="pb-0.5">Main Links</h2>
                    <li key="Home">
                        <Link className="py-1 text-sm" href="/">
                            Home
                        </Link>
                    </li>
                    {footerLinks.map((link) => (
                        <li key={link}>
                            <Link
                                className=" capitalize py-1 text-sm"
                                href={`/${link}`}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="border">
                    <h2 className="pb-0.5">Socail Links</h2>
                    {footerSocail.map((link) => (
                        <li key={link}>
                            <Link
                                className=" capitalize py-1 text-sm"
                                href={`/${link}`}
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
