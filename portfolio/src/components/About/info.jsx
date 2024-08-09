import React from 'react';

const Info = () => {

    return(
        <div className='about_info grid'>
            <div className='about_box'>
                <i class='bx bx-award  about__icon'></i>
                <h3 className='about_title'>Experience</h3>
                <span className='about_subtitle'>(in years)</span>
            </div>

            <div className='about_box'>
                <i class='bx bx-briefcase-alt  about__icon'></i>
                <h3 className='about_title'>Completed</h3>
                <span className='about_subtitle'>(number of projects)</span>
            </div>

            <div className='about_box'>
                <i class='bx bx-support  about__icon'></i>
                <h3 className='about_title'>Support</h3>
                <span className='about_subtitle'>Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;