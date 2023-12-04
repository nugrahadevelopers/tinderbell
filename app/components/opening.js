import clsx from 'clsx';
import Image from 'next/image';
import logo from '@/public/assets/img/tb-logo.png';
import { useSearchParams } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';

const Opening = ({ hidden = false, handleOnclick }) => {
    const searchParams = useSearchParams();
    const to = searchParams.get('to');

    return (
        <div
            className={clsx(
                'fixed top-0 left-0 z-40 w-full h-full bg-black text-black',
                hidden ? 'hidden' : '',
            )}
        >
            <div className={clsx('min-h-screen flex flex-col items-center justify-center')}>
                <Image
                    src={logo.src}
                    alt={'logo'}
                    width={52}
                    height={52}
                    className={clsx('animate-pulse')}
                />
                <p
                    className={clsx(
                        'text-[15px] md:text-[26px] font-shadow mt-10 mb-2 md:mb-5 text-white',
                    )}
                >
                    Hello, {to ?? ''}
                </p>
                <p
                    className={clsx(
                        'text-[15px] md:text-[26px] font-shadow mb-5 md:mb-5 text-white',
                    )}
                >
                    Thank You for opening this invitation
                </p>
                <p
                    className={clsx(
                        'text-[15px] md:text-[26px] font-shadow mb-5 md:mb-5 text-white',
                    )}
                >
                    <button
                        className={clsx('border p-2 flex items-center gap-3')}
                        onClick={handleOnclick}
                    >
                        Let's Start <IoArrowForward />
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Opening;
