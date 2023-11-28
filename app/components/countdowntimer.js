'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const CountDownTimer = ({ targetDate = 'Dec 31, 2023 07:59:59' }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const timeDifference = targetTime - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={clsx('grid grid-cols-4 gap-4')}>
            <div className={clsx('flex flex-col items-center justify-center p-2 gap-4')}>
                <div className={clsx('text-4xl font-bold')}>{timeLeft.days}</div>
                <div>DAYS</div>
            </div>
            <div className={clsx('flex flex-col items-center justify-center p-2 gap-4')}>
                <div className={clsx('text-4xl font-bold')}>{timeLeft.hours}</div>
                <div>HOURS</div>
            </div>
            <div className={clsx('flex flex-col items-center justify-center p-2 gap-4')}>
                <div className={clsx('text-4xl font-bold')}>{timeLeft.minutes}</div>
                <div>MINS</div>
            </div>
            <div className={clsx('flex flex-col items-center justify-center p-2 gap-4')}>
                <div className={clsx('text-4xl font-bold')}>{timeLeft.seconds}</div>
                <div>SECS</div>
            </div>
        </div>
    );
};

export default CountDownTimer;
