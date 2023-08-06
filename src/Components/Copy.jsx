import React from 'react'

const Copy = () => {
    return (
        <div>
            <div className='relative bottom-0 bg-white  w-full text-black text-center'>
                <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Copy