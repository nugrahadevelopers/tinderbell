import clsx from 'clsx';
import Navbar from '@/app/components/navbar';

const Header = () => {
    return (
        <header className={clsx('block fixed w-full h-[60px] top-0 z-10')}>
            <Navbar />
        </header>
    );
};

export default Header;