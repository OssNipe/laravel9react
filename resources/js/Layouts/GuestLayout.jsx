import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div>
                <Link href="/">
                <h1 className='w-full text-3xl font-bold text-[#4056A1]'>SWAY3.</h1>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md border-2 border-black overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
