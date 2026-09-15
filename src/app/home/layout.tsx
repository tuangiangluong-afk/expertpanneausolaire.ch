import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GoogleAnalytics GA_MEASUREMENT_ID="G-JRTDH56WVZ" />
            {children}
            <CookieBanner slug="home" cityName="Expert Panneau Solaire" />
        </>
    );
}
