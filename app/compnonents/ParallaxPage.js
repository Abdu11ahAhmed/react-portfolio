import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function ParallaxPage() {
    return (
        <ParallaxProvider>
            <Parallax speed={-20}>
                <img
                    src="/your-image.jpg"
                    className="w-full h-screen object-cover"
                />
            </Parallax>
            <div className="absolute top-1/2 left-1/2 text-white text-4xl">
                Parallax Text
            </div>
        </ParallaxProvider>
    );
}
