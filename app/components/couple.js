'use client';

import clsx from 'clsx';
import groom from '@/public/assets/img/groom.jpg';
import bride from '@/public/assets/img/bride.jpg';
import Image from 'next/image';
import { Borel } from 'next/font/google';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const Couple = () => {
    return (
        <element name={'couple'} className={clsx('min-h-screen')}>
            <div className={clsx('container mx-auto bg-black')}>
                <div className={clsx('min-h-screen flex flex-col items-center justify-center p-5')}>
                    <div className={clsx('w-full text-center mt-20')}>
                        <h2
                            className={clsx(
                                borel.className,
                                'text-4xl font-bold tracking-tight text-white md:text-6xl',
                            )}
                        >
                            Intro
                        </h2>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div
                            className={clsx(
                                'flex flex-col md:flex-row shadow bg-neutral-800 hover:bg-neutral-700',
                            )}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${groom.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className={clsx('w-full md:w-1/2')}
                            >
                                <Image
                                    width={512}
                                    height={512}
                                    src={'/assets/img/groom.jpg'}
                                    alt={'groom'}
                                    className={clsx('md:hidden')}
                                />
                            </div>
                            <div
                                className={clsx(
                                    'w-full md:w-1/2 md:border-t border-b border-r px-5 py-6 md:px-8 md:py-10 border-neutral-700 text-white',
                                )}
                            >
                                <h3 className={clsx('text-lg font-bold mb-4')}>GROOM</h3>
                                <p className={clsx('text-gray-200 leading-loose mb-4')}>
                                    Hello everyone, Reno's here, I want to tell you that i have
                                    found my perfect partner, Our love story has been an unexpected
                                    story. You can read our journey in the next section. Btw as we
                                    take the next step on this incredible journey, we want our
                                    friends and family to be by our side. Your presence would mean
                                    the world to us.
                                </p>
                                <p className={clsx(borel.className)}>~ Reno</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div
                            className={clsx(
                                'flex flex-col md:flex-row-reverse shadow bg-neutral-800 hover:bg-neutral-700 md:h-[358px]',
                            )}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${bride.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className={clsx('w-full md:w-1/2')}
                            >
                                <Image
                                    width={512}
                                    height={512}
                                    src={'/assets/img/bride.jpg'}
                                    alt={'bride'}
                                    className={clsx('md:hidden')}
                                />
                            </div>
                            <div
                                className={clsx(
                                    'w-full md:w-1/2 md:border-t border-b border-l px-5 py-6 md:px-8 md:py-10 border-neutral-700 text-white',
                                )}
                            >
                                <h3 className={clsx('text-lg font-bold mb-4')}>BRIDE</h3>
                                <p className={clsx('text-gray-200 leading-loose mb-4')}>
                                    Hallo everyone, with Bismillah, I'm Anggi, finally I have
                                    accepted a proposal from someone who always fills my days with
                                    love and happiness. So please celebrating this happiness with
                                    us.
                                </p>
                                <p className={clsx(borel.className)}>~ Anggi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default Couple;
