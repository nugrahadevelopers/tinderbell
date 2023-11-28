'use client';

import clsx from 'clsx';
import { Borel } from 'next/font/google';
import CommentForm from '@/app/components/commentform';
import { useEffect, useState } from 'react';
import Commentlist from '@/app/components/commentlist';

const borel = Borel({ weight: '400', subsets: ['latin'] });

const Comment = () => {
    const [data, setData] = useState(null);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        fetch('/api/comments')
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            });
    }, [trigger]);

    const handleCommentSubmit = async (newComment) => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });

        if (response.ok) {
            setTrigger((prev) => prev + 1);
        }
    };

    return (
        <element name={'comment'} className={clsx('min-h-screen')}>
            <div className={clsx('container mx-auto')}>
                <div className={clsx('min-h-screen flex flex-col items-center justify-center p-5')}>
                    <div className={clsx('w-full text-center mt-20')}>
                        <h2
                            className={clsx(
                                borel.className,
                                'text-4xl font-bold tracking-tight text-white md:text-6xl',
                            )}
                        >
                            Give Us A Word
                        </h2>
                        <p>Mohon Doa dan Restu</p>
                    </div>
                    <div className={clsx('w-full mt-20')}>
                        <div className='max-w-2xl mx-auto px-4'>
                            <CommentForm onSubmit={handleCommentSubmit} />
                            <Commentlist data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </element>
    );
};

export default Comment;
