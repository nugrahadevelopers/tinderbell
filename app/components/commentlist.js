const CommentList = ({ data }) => {
    return (
        data &&
        data.map((value, index) => (
            <article
                id={index}
                className='p-6 mb-3 text-base bg-white border-t border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900'
            >
                <footer className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                        <p className='inline-flex items-center mr-3 text-sm text-neutral-900 dark:text-white font-semibold'>
                            {value.name}
                        </p>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                            {value.date}
                        </p>
                    </div>
                </footer>
                <p className='text-neutral-500 dark:text-neutral-400'>{value.comment}</p>
            </article>
        ))
    );
};

export default CommentList;
