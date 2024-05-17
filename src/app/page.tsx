import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import AppData from "@data/app.json";
import HeroSection from "@components/sections/Hero";
import AboutSection from "@components/sections/About";
import CategoriesSection from "@components/sections/Categories";
import Products from "@data/products.json";
import TeamSection from "@components/sections/Team";
import CallToActionSection from "@components/sections/CallToAction";
import Pricing from "@components/sections/Pricing";

const ProductsSlider = dynamic(() => import("@components/sliders/Products"), {
    ssr: false,
});

export const metadata = {
    title: {
        default: "Home",
        template: "%s | " + AppData.settings.siteName,
    },
    description: AppData.settings.siteDescription,
};

export default function Home() {
    return (
        <>
            <HeroSection type={1} />
            <AboutSection />
            <CategoriesSection />
            <ProductsSlider
                items={Products.collection["popular"]}
                slidesPerView={4}
            />
            <Pricing />
            <TeamSection />
            <CallToActionSection />
        </>
    );
}
