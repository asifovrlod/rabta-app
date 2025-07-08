'use client'; // ✅ This makes the file a client component

import { usePathname } from 'next/navigation';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();


    const hiddenRoutes = ['/login', '/register', '/forgot-password'];
    const hideLayout = hiddenRoutes.includes(pathname);

    return (
        <>
            {!hideLayout && <Header />}   {/* Show Header if not login/register */}
            {children}                   {/* Always show the page content */}
            {!hideLayout && <Footer />}   {/* Show Footer if not login/register */}
        </>
    );
}
