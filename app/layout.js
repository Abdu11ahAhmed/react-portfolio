import "./styles/globals.css";
import Navbar from "./compnonents/Navbar/Navbar";

export const metadata = {
    title: "Abdullah | Portfolio",
    description: "This is my development portfolio.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
