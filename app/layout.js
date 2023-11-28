import './globals.css';
import { Poppins } from 'next/font/google';
import clsx from 'clsx';
import Header from '@/app/components/header';
import BackgroundSound from '@/app/components/backgroundsound';

const poppins = Poppins({ weight: '300', subsets: ['latin'] });

export const metadata = {
    title: 'Reno & Anggi Wedding',
    description: 'Tinderbell: From Tinder to Wedding Bell',
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={clsx(poppins.className)}>
                <Header />

                {children}
            </body>
        </html>
    );
};

export default RootLayout;
