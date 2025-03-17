import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animationFadeIn = () => {
    const banner1 = document.getElementById("banner-1");

    if (banner1) {
        const tl = gsap.timeline();

        tl.set([banner1], {
            yPercent: 0,
        }).to([banner1], {
            yPercent: 100,
        });
    }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const banner1 = document.getElementById("banner-1");

    if (banner1) {
        const tl = gsap.timeline();

        tl.set([banner1], {
            yPercent: -100,
        }).to([banner1], {
            yPercent: 0,
            onComplete: () => {
                router.push(href);
            },
        });
    }
};
