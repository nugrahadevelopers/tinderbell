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
            <div className={clsx('container mx-auto')}>
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
                                'flex flex-col md:flex-row shadow hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
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
                                    'w-full md:w-1/2 md:border-t border-b border-r border-neutral-200 px-5 py-6 md:px-8 md:py-10 dark:border-neutral-700',
                                )}
                            >
                                <h3 className={clsx('text-lg font-bold mb-4')}>GROOM</h3>
                                <p className={clsx('text-gray-200 leading-loose mb-4')}>
                                    Hello everyone, I, Reno, am happy to share the news that I have
                                    proposed to a woman who brings happiness and love into my life.
                                    Believing in the beauty of true love, I am sure this will be a
                                    glimpse of heaven for both of us.
                                </p>
                                <p className={clsx(borel.className)}>~ Reno</p>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div
                            className={clsx(
                                'flex flex-col md:flex-row-reverse shadow hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
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
                                    'w-full md:w-1/2 md:border-t border-b border-l border-neutral-200 px-5 py-6 md:px-8 md:py-10 dark:border-neutral-700',
                                )}
                            >
                                <h3 className={clsx('text-lg font-bold mb-4')}>BRIDE</h3>
                                <p className={clsx('text-gray-200 leading-loose mb-4')}>
                                    Hallo everyone, with a sense of happiness, I, Anggi, am
                                    delighted to share the wonderful news that I have accepted a
                                    proposal from someone who fills my days with happiness and love.
                                    I am confident that this relationship will be a paradise on
                                    earth for me. I hope you guys can celebrating with us.
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
