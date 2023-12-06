'use client';

import Hero from '@/app/components/hero';
import Couple from '@/app/components/couple';
import Countdown from '@/app/components/countdown';
import LoveStory from '@/app/components/lovestory';
import TheEvent from '@/app/components/theevent';
import Comment from '@/app/components/comment';
import DressCode from '@/app/components/dresscode';
import BackgroundSound from '@/app/components/backgroundsound';
import clsx from 'clsx';

const Home = () => {
    return (
        <main className={clsx('bg-black')}>
            <Hero />
            <Couple />
            <Countdown />
            <LoveStory />
            <TheEvent />
            <DressCode />
            <Comment />
            <BackgroundSound />
        </main>
    );
};

export default Home;
