'use client';

import clsx from 'clsx';
import { IoHeart } from 'react-icons/io5';
import { Borel } from 'next/font/google';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const LoveStory = () => {
    return (
        <element name={'lovestory'} className={clsx('min-h-screen')}>
            <div className={clsx('container mx-auto')}>
                <div className={clsx('min-h-screen flex flex-col items-center justify-center p-5')}>
                    <div className={clsx('w-full text-center mt-20')}>
                        <h2
                            className={clsx(
                                borel.className,
                                'text-4xl font-bold tracking-tight text-white md:text-6xl',
                            )}
                        >
                            Our Love Story
                        </h2>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <ol className='relative border-s border-neutral-200 dark:border-neutral-700'>
                            <li className='mb-10 ms-6'>
                                <span
                                    className={clsx(
                                        'absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -start-3 dark:bg-neutral-900',
                                    )}
                                >
                                    <IoHeart
                                        className={clsx('text-neutral-800 dark:text-neutral-300')}
                                    />
                                </span>
                                <h3 className='flex items-center mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>
                                    FIRST MEET
                                </h3>
                                <time className='block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500'>
                                    on October 20th, 2022
                                </time>
                                <p className='mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400'>
                                    Around Oct, 2022 we match on dating app and accidentally have
                                    same taste of movie, so we decide to going to movies and yeah
                                    that's how we meet.
                                </p>
                            </li>
                            <li className='mb-10 ms-6'>
                                <span
                                    className={clsx(
                                        'absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -start-3 dark:bg-neutral-900',
                                    )}
                                >
                                    <IoHeart
                                        className={clsx('text-neutral-800 dark:text-neutral-300')}
                                    />
                                </span>
                                <h3 className='flex items-center mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>
                                    FIRST DATE
                                </h3>
                                <time className='block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500'>
                                    on December 4th, 2022
                                </time>
                                <p className='mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400'>
                                    After 2 months of getting to know each other, precisely in
                                    December, we decided to enter into a more serious relationship.
                                </p>
                            </li>
                            <li className='mb-10 ms-6'>
                                <span
                                    className={clsx(
                                        'absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -start-3 dark:bg-neutral-900',
                                    )}
                                >
                                    <IoHeart
                                        className={clsx('text-neutral-800 dark:text-neutral-300')}
                                    />
                                </span>
                                <h3 className='flex items-center mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>
                                    PROPOSAL
                                </h3>
                                <time className='block mb-2 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500'>
                                    on August 26th, 2023
                                </time>
                                <p className='mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400'>
                                    Finally, we decided and agreed to take it to the next level by
                                    moving towards marriage. The man's side proposed to the woman's
                                    side, expressing his commitment, and we selected the day and
                                    date for our wedding.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default LoveStory;
