import "../styles/globals.css";
import Navbar from "./compnonents/headers/Navbar/Navbar";
import Footer from "./compnonents/headers/Footer/Footer";
import LenisProvider from "./compnonents/LenisProvider";

export const metadata = {
    title: "Abdullah | Portfolio",
    description: "This is my development portfolio.",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LenisProvider>
                    <Navbar />
                    <div className="container border px-[20px] lg:px-[40px] xl:px-[100px] mx-auto min-h-[calc(100vh-7.5vh)]">
                        {children}
                        <Footer />
                    </div>
                </LenisProvider>
            </body>
        </html>
    );
}
