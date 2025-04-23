// app/components/LenisProvider.js
"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
        });

        lenisRef.current = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Optional: Scroll to top on route change
        const onRouteChange = () => lenis.scrollTo(0);

        window.addEventListener("popstate", onRouteChange);

        return () => {
            window.removeEventListener("popstate", onRouteChange);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
