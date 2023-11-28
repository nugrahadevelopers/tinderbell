import clsx from 'clsx';
import { Borel, Dosis, Cormorant_Garamond } from 'next/font/google';

const dosis = Dosis({ weight: '700', subsets: ['latin'] });
const borel = Borel({ weight: '400', subsets: ['latin'] });
const greatVibes = Cormorant_Garamond({ weight: '700', subsets: ['latin'] });

const Navbar = () => {
    return (
        <nav
            className={clsx(
                'bg-white bg-opacity-0 text-white border-b border-white border-opacity-10 md:h-[83px] block relative top-0 right-0 left-0 transition-all ease-in-out duration-300',
            )}
        >
            <div
                className={clsx(
                    'nav-container px-[15px] mx-auto relative z-[2] md:h-[83px] flex items-center justify-between',
                )}
            >
                <div className={'w-full flex items-center justify-between md:gap-3'}>
                    <div className={clsx(greatVibes.className, 'text-2xl md:text-5xl')}>RA</div>
                    <div
                        className={clsx(borel.className, 'flex md:hidden text-[11px] italic pt-3')}
                    >
                        31 Desember 2023
                    </div>
                    <div className={clsx(dosis.className, 'flex md:hidden text-1xl')}>
                        Reno & Anggi
                    </div>
                    <div className={clsx('hidden md:flex flex-col')}>
                        <div className={clsx(dosis.className, 'text-2xl')}>Reno & Anggi</div>
                        <div className={clsx(borel.className, 'flex text-[11px] italic')}>
                            31 Desember 2023
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
