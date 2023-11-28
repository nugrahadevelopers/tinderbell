'use client';

import clsx from 'clsx';
import { Borel } from 'next/font/google';
import Image from 'next/image';
import { FaLocationDot, FaClock } from 'react-icons/fa6';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const TheEvent = () => {
    return (
        <element name={'theevent'} className={clsx('min-h-screen')}>
            <div className={clsx('container mx-auto')}>
                <div className={clsx('min-h-screen flex flex-col items-center justify-center p-5')}>
                    <div className={clsx('w-full text-center mt-20')}>
                        <h2
                            className={clsx(
                                borel.className,
                                'text-4xl font-bold tracking-tight text-white md:text-6xl',
                            )}
                        >
                            The Event
                        </h2>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div className='flex flex-col items-center bg-white border border-neutral-200 shadow md:flex-row hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700'>
                            <div className={clsx('w-full md:w-1/2')}>
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    src={'/assets/img/event.png'}
                                    alt={'groom'}
                                    className='object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg'
                                />
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white'>
                                    LAMARAN
                                </h5>
                                <p
                                    className={clsx(
                                        'mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400 flex flex-row items-center gap-2',
                                    )}
                                >
                                    <FaLocationDot /> Jl. PB Sudirman RT 03 RW 05 Desa Panti, Jember
                                    (Depan Kantor POS Panti)
                                </p>
                                <p
                                    className={clsx(
                                        'mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400 flex flex-row items-center gap-2',
                                    )}
                                >
                                    <FaClock /> 31 Nov 2023, 8AM - 9AM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('w-full mt-16')}>
                        <div className='flex flex-col items-center bg-white border border-neutral-200 shadow md:flex-row-reverse hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700'>
                            <div className={clsx('w-full md:w-1/2')}>
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={'100vw'}
                                    src={'/assets/img/event.png'}
                                    alt={'groom'}
                                    className='object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg'
                                />
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white'>
                                    AKAD
                                </h5>
                                <p
                                    className={clsx(
                                        'mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400 flex flex-row items-center gap-2',
                                    )}
                                >
                                    <FaLocationDot /> Jl. PB Sudirman RT 03 RW 05 Desa Panti, Jember
                                    (Depan Kantor POS Panti)
                                </p>
                                <p
                                    className={clsx(
                                        'mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400 flex flex-row items-center gap-2',
                                    )}
                                >
                                    <FaClock /> 31 Nov 2023, 9AM - 12AM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default TheEvent;
