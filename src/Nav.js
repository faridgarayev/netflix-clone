import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                src="https://lh5.googleusercontent.com/proxy/upup-5dDi0mXFs3kjB6QkItmn87_SPX0zhgGtuRCmIIeRCR_rhHEqsQjQjN8qQj1xeomiryWJMbb02dwnScLxcBUIRaqJhR8iuYoP8jw2Ih7YX8C6bvgRe_rXH_SdWlr8yXji1V2bYeXKbGkovoT1TbvGwtDOI-s6VxOlJO5-JZueial=w1200-h630-p-k-no-nu"
                alt="Netflix Logo"
            />
            <img
                className='nav__avatar'
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav
