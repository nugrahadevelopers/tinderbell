'use client';

import { useState } from 'react';
import { format } from 'date-fns';

const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            name,
            comment,
            date: format(new Date(), 'd MMM, yyyy · HH:mm'),
        };
        onSubmit(newComment);
        setName('');
        setComment('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className='mb-6'>
            <div className='py-2 px-4 mb-4 border bg-neutral-800 border-neutral-700'>
                <label htmlFor='comment' className='sr-only'>
                    Your name
                </label>
                <input
                    className='px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-white placeholder-neutral-400 bg-neutral-800'
                    placeholder='Your name please...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className='py-2 px-4 mb-4 border bg-neutral-800 border-neutral-700'>
                <label htmlFor='comment' className='sr-only'>
                    Your comment
                </label>
                <textarea
                    rows='6'
                    className='px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-white placeholder-neutral-400 bg-neutral-800'
                    placeholder='Write something...'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <button
                type='submit'
                className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white border bg-neutral-700 focus:ring-4 focus:ring-neutral-900 hover:bg-neutral-800 border-neutral-700'
            >
                Post
            </button>
        </form>
    );
};

export default CommentForm;
