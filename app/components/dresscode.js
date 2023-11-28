'use client';

import clsx from 'clsx';
import { Borel } from 'next/font/google';
import Image from 'next/image';
import { FaLocationDot, FaClock } from 'react-icons/fa6';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const DressCode = () => {
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
                            Dress Code
                        </h2>
                        <p className={clsx('font-bold text-xl')}>Earth Tone</p>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div
                            className={clsx(
                                'w-full flex flex-col md:flex-row items-center justify-center',
                            )}
                        >
                            <div
                                className={clsx(
                                    'grid grid-cols-3 md:grid-cols-6 grid-flow-row gap-4',
                                )}
                            >
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#FEFAE0' }}
                                ></div>
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#EAC696' }}
                                ></div>
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#C8AE7D' }}
                                ></div>
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#B99470' }}
                                ></div>
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#765827' }}
                                ></div>
                                <div
                                    className={clsx('h-28 w-28')}
                                    style={{ backgroundColor: '#65451F' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default DressCode;
