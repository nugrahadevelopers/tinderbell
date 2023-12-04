'use client';

import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import clsx from 'clsx';

const BackgroundSound = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, stop }] = useSound('/assets/audio/audio.mp3');

    function playSong() {
        setIsPlaying(true);
        play();
    }

    function pauseSong() {
        setIsPlaying(false);
        pause();
    }

    function stopSong() {
        setIsPlaying(false);
        stop();
    }

    useEffect(() => {
        playSong();

        return () => {
            stopSong();
        };
    }, []);

    return (
        <div
            className={clsx(
                'fixed bottom-3 right-3 border border-neutral-400 bg-neutral-400 bg-opacity-30 p-2 text-white text-xl cursor-pointer',
            )}
            onClick={isPlaying ? pauseSong : playSong}
        >
            {isPlaying ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-player-stop-filled'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path
                        d='M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z'
                        strokeWidth='0'
                        fill='currentColor'
                    />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-player-play-filled'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path
                        d='M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z'
                        strokeWidth='0'
                        fill='currentColor'
                    />
                </svg>
            )}
        </div>
    );
};

export default BackgroundSound;
