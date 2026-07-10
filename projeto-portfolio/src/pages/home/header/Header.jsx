import React, { useState, useEffect } from 'react';
import './Header.css';
import useTexts from '../../../hooks/useTexts';

const Header = () => {
    const texts = useTexts();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobileCheck = window.innerWidth <= 768;
            setIsMobile(mobileCheck);
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            const offset = 60; 
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            
            setMenuOpen(false);
        }
    };

    const headerClassName = `header ${scrolled ? 'scrolled' : ''}`;

    return (
        <header className={headerClassName}>
            <a href="#intro" className="header-logo">Portfolio</a>

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className="nav-option" onClick={() => scrollToSection('about')}>
                                    {texts.About_Header}
                                </button>
                                <button className="nav-option" onClick={() => scrollToSection('projects')}>
                                    {texts.Project_Header}
                                </button>
                                <button className="nav-option" onClick={() => scrollToSection('experiences')}>
                                    {texts.Experience_Header}
                                </button>
                                <button className="nav-option" onClick={() => scrollToSection('contact')}>
                                    {texts.Contact_Header}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav className="nav-header">
                    <ul>
                        <li>
                            <button className="nav-option" onClick={() => scrollToSection('about')}>
                                {texts.About_Header}
                            </button>
                            <button className="nav-option" onClick={() => scrollToSection('projects')}>
                                {texts.Project_Header}
                            </button>
                            <button className="nav-option" onClick={() => scrollToSection('experiences')}>
                                {texts.Experience_Header}
                            </button>
                            <button className="nav-option" onClick={() => scrollToSection('contact')}>
                                {texts.Contact_Header}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;