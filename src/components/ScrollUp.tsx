import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowUp } from "lucide-react";

const ScrollUp = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollThreshold = 200;

    return (
        <div className={`z-[9999999999] fixed max-[450px]:bottom-3 bottom-6 right-6 max-[450px]:right-4`}>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`p-[6px]  shadow-[0_-1px_8px_#525252] cursor-pointer w-fit rounded-md bg-gradient-to-r from-blue-600 to-purple-700 flex flex-col items-center justify-center overflow-hidden transform transition-transform hover:-translate-y-2  ${scrollY > scrollThreshold ? 'block' : 'hidden'}`}
            >
                <ArrowUp className='text-white text-[25px] max-[450px]:text-[20px]' />
            </button>
        </div>
    );
};

export default ScrollUp;
