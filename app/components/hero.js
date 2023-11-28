'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import bg from '@/public/assets/img/hero_img.jpg';
import Image from 'next/image';
import { Borel } from 'next/font/google';
import { IoArrowDownCircle } from 'react-icons/io5';
import { Link } from 'react-scroll';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const Hero = () => {
    const searchParams = useSearchParams();

    const to = searchParams.get('to');

    return (
        <div
            className={clsx('min-h-screen')}
            style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div
                className={clsx(
                    'flex flex-col min-h-screen items-center justify-center p-5 md:p-24 bg-black bg-opacity-60',
                )}
            >
                <Image src='/assets/img/ourwedding.gif' alt='hero' width='200' height='135' />
                <p className={clsx('text-[15px] md:text-[26px] font-shadow mt-10 mb-5 md:mb-10')}>
                    Kepada Bapak/Ibu/Saudara/i, {to ?? ''}
                </p>
                <p className={clsx(borel.className, 'text-4xl font-shadow')}>Reno & Anggi</p>
                <p
                    className={clsx(
                        'text-[13px] md:text-[22px] font-shadow mt-2 md:mt-5 mb-5 md:mb-10',
                    )}
                >
                    Akan melangsungkan pernikahan pada:
                </p>
                <p className={clsx(borel.className, 'text-3xl md:text-4xl font-shadow mb-10')}>
                    31 Desember 2023
                </p>
                <Link to={'couple'} smooth={true} duration={500}>
                    <div className={clsx('text-4xl font-shadow animate-bounce cursor-pointer')}>
                        <IoArrowDownCircle />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
