const CommentList = ({ data }) => {
    return (
        data &&
        data.map((value, index) => (
            <article
                id={index}
                className='p-6 mb-3 text-base border-t border-neutral-700 bg-neutral-900'
            >
                <footer className='flex justify-between items-center mb-2'>
                    <div className='flex items-center'>
                        <p className='inline-flex items-center mr-3 text-sm text-white font-semibold'>
                            {value.name}
                        </p>
                        <p className='text-sm text-neutral-400'>{value.date}</p>
                    </div>
                </footer>
                <p className='text-neutral-400'>{value.comment}</p>
            </article>
        ))
    );
};

export default CommentList;
