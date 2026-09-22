'use client';

import { useEffect, useState } from 'react';
import LoadingDots from './LoadingDots';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setIsLoading(false);

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('load', handleLoad);
            document.body.style.overflow = '';
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F0EEF8] transition-opacity duration-500"
            aria-busy="true"
            aria-label="Cargando"
        >
            <LoadingDots />
        </div>
    );
}
