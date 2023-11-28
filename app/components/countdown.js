import clsx from 'clsx';
import countdownBg from '@/public/assets/img/hero_img.jpg';
import { Borel } from 'next/font/google';
import dynamic from 'next/dynamic';
// import CountDownTimer from '@/app/components/countdowntimer';

const borel = Borel({ weight: '400', subsets: ['latin'] });
const CountDownTimer = dynamic(() => import('@/app/components/countdowntimer'), { ssr: false });

const CountDown = () => {
    return (
        <element name={'countdown'}>
            <div
                style={{
                    backgroundImage: `url(${countdownBg.src})`,
                    width: '100%',
                    height: '380px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                }}
            >
                <div className={clsx('w-full h-full bg-black bg-opacity-80 mt-20')}>
                    <div className={clsx('h-full container mx-auto')}>
                        <div
                            className={clsx(
                                'h-full flex flex-col md:flex-row items-center justify-center p-5',
                            )}
                        >
                            <div className={clsx('w-full md:w-1/3')}>
                                <p className={clsx(borel.className, 'text-xl mb-2')}>
                                    We are waiting for.....
                                </p>
                                <p className={clsx(borel.className, 'text-3xl')}>
                                    The new adventure
                                </p>
                            </div>
                            <div className={clsx('w-full md:w-2/3')}>
                                <CountDownTimer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default CountDown;
