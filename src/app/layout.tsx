import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rubik, Monoton } from "next/font/google";
import { register } from "swiper/element/bundle";

import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";
import "@styles/scss/style.scss";
import "./globals.css";
import "@styles/css/default.css";

import AppData from "@data/app.json";
import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-rubik",
    display: "swap",
});

const monoton = Monoton({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-monoton",
    display: "swap",
});
const inter = Inter({ subsets: ["latin"] });
// register Swiper custom elements
register();

export const metadata: Metadata = {
    title: {
        default: AppData.settings.siteName,
        template: "%s | " + AppData.settings.siteName,
    },
    description: AppData.settings.siteDescription,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${rubik.variable} ${monoton.variable}`}>
            <body>
                {/* app wrapper */}
                <div className="sb-app">
                    <Header />

                    {/* dynamic content */}
                    <div id="sb-dynamic-content" className="sb-transition-fade">
                        {children}
                        <Footer />
                    </div>
                    <ScrollbarProgress />
                </div>
                {/* app wrapper end */}
            </body>
        </html>
    );
}
