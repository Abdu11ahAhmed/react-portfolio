import Link from "next/link";

function Navbar() {
    let NavLinks = ["Works", "Contact"];
    let logo = "logo";
    return (
        <>
            <nav className="border h-[7.5vh] flex items-center justify-between">
                <Link href="/"> {logo} </Link>

                <ul className="flex">
                    <li key="Home">
                        <Link className="border px-4 py-1" href="/">
                            Home
                        </Link>
                    </li>
                    {NavLinks.map((link) => (
                        <li key={link}>
                            <Link
                                className="border px-4 py-1"
                                href={`/${link}`}
                            >
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
