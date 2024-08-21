import React from 'react';
import './Certification.css';


const Certification = () => {
    return(
       <section className='certification section'>
        <h2 className='section__title'>Certificates</h2>
        <span className='section__subtitle'>Certificates earned</span>
       

       <div className='certification_container container'>
        <div className='certification_tabs'>
            <div className='certification_button certification_active button--flex'>
                <i className='uil uil-graduation-cap certification_icon'></i> Education
            </div>

            <div className='certification_button button--flex'>
                <i className='uil uil-briefcase-alt certification_icon'></i> Experience
            </div>
        </div>


        <div className='certification_sections'>

            <div className='certification_content'>
                <div className='certification_data'>
                    <div>
                        <h3 className='certification_title'>Web Designer</h3>
                        <span className='certification_subtitle'>Spain - Institute </span>
                            <div className='certification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 - Present
                            </div>
                    </div>

                    <div>
                        <span className='certification_rounder'></span>
                    <span className='certification_line'></span>
                    </div>
                </div>


                <div className='certification_data'>

                    <div></div>

                    <div>
                        <span className='certification_rounder'></span>
                    <span className='certification_line'></span>
                    </div>

                    <div>
                        <h3 className='certification_title'>Art Director</h3>
                        <span className='certification_subtitle'>Spain - Institute </span>
                            <div className='certification_calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2021 - Present
                            </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       
       
       </section>
    )
}

export default Certification;