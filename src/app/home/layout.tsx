import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-ZLY874WBJ2" />
            {children}
            <CookieBanner slug="home" cityName="Expert Panneau Solaire" />
        </>
    );
}
