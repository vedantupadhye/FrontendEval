import React from 'react';

const Pagination = ({ pageNo, setPageNo }) => {
    const prevThree = Array.from({ length: 3 }, (_, index) => pageNo - index - 1).filter(value => value > 0).reverse();
    const nextThree = Array.from({ length: 4 }, (_, index) => pageNo + index + 1);
    const totalPages = [...prevThree, ...nextThree];

    const handleNavigation = (direction) => {
        if (direction === 'next') {
            setPageNo(pageNo + 1);
        } else if (direction === 'prev') {
            setPageNo(pageNo - 1);
        }
    };

    return (
        <div>
            <div>
                {prevThree.length > 0 && (
                    <button className='bg-black p-2 m-4 text-white' onClick={() => handleNavigation('prev')}>{"<"}</button>
                )}
                <button className='bg-black p-2 m-4 text-white'>{pageNo}</button>
                <button className='bg-black p-2 m-4 text-white' onClick={() => handleNavigation('next')}>{">"}</button>
            </div>
            <div>
                {totalPages.map((page, index) => (
                    <button
                        key={index}
                        className='bg-black p-2 m-4 text-white'
                        onClick={() => setPageNo(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
