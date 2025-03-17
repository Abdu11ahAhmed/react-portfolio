"use client";

import { animationFadeIn } from "@/utils/animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animationFadeIn();
    }, []);
    return (
        <div>
            <div
                id="banner-1"
                className="min-h-screen bg-[#212121] z-10 fixed top-0 left-0 w-full"
            ></div>
            {children}
        </div>
    );
}
