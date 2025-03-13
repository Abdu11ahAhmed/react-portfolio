import Link from "next/link";

function Navbar() {
    let NavLinks = ["Works", "Contact"];
    let logo = "Abdullah";
    return (
        <>
            <nav className="h-[7.5vh] flex items-center justify-between px-[20px]">
                <Link href="/"> {logo} </Link>

                <ul className="flex">
                    <li key="Home">
                        <Link className="px-4 py-1" href="/">
                            Home
                        </Link>
                    </li>
                    {NavLinks.map((link) => (
                        <li key={link}>
                            <Link className="px-4 py-1" href={`/${link}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
export default Navbar;
