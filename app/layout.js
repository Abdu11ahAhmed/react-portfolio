import "../styles/globals.css";
import Navbar from "./compnonents/headers/Navbar/Navbar";
import Footer from "./compnonents/headers/Footer/Footer";

export const metadata = {
    title: "Abdullah | Portfolio",
    description: "This is my development portfolio.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="container px-[20px] xl:px-[40px] 2xl:px-[100px] border mx-auto h-[calc(100vh-7.5vh)]">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
