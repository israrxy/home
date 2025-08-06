import React, { useState, FC, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

type Page = 'home' | 'pookie';
type Theme = 'light' | 'dark';

interface NavigationProps {
    navigateTo: (page: Page) => void;
}

interface HeaderProps {
    navigateTo: (page: Page) => void;
    toggleTheme: () => void;
    theme: Theme;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: FC<HeaderProps> = ({ navigateTo, toggleTheme, theme, isMenuOpen, setIsMenuOpen }) => {
    // Helper to close menu. For links that just scroll, this is all we need.
    const closeMenu = () => setIsMenuOpen(false);

    // For links that also navigate, navigateTo will handle closing the menu.
    const handleNavigation = (e: React.MouseEvent, page: Page) => {
        e.preventDefault();
        navigateTo(page);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#" className="logo" onClick={(e) => handleNavigation(e, 'home')}>
                        israrxy
                    </a>

                    <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#home" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
                        <a href="#apps" onClick={closeMenu}>Apps</a>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </div>

                    <div className="header-controls">
                        <button onClick={toggleTheme} className="btn theme-switcher" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            )}
                        </button>
                        <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                            <span className="hamburger-bar"></span>
                            <span className="hamburger-bar"></span>
                            <span className="hamburger-bar"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};


const Footer: FC = () => (
    <footer className="footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Israr Ahamed. All Rights Reserved.</p>
        </div>
    </footer>
);

const HomePage: FC<NavigationProps> = ({ navigateTo }) => {
    return (
        <>
            <main>
                <div className="container">
                    <section className="hero" id="home">
                        <h1>Israr Ahamed</h1>
                        <p className="subtitle">16-Year-Old Prompt Engineer & Creator</p>
                    </section>

                    <section id="apps" className="section">
                        <h2>App Showcase</h2>
                        <div className="apps-grid">
                            <div className="app-card">
                                <h3>Pookie Browser</h3>
                                <p>A fully functional, modern, and chromium-based browser designed for speed and simplicity.</p>
                                <button onClick={() => navigateTo('pookie')} className="btn">
                                    Learn More
                                </button>
                            </div>
                            <div className="app-card">
                                <h3>PromptCraft AI</h3>
                                <p>An intelligent assistant to help you craft, refine, and organize powerful AI prompts.</p>
                                <button onClick={() => alert('Coming Soon!')} className="btn">
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="section">
                        <h2>About Me</h2>
                        <div className="about-content">
                             <p>
                                I'm a 16-year-old developer and prompt engineer with a deep passion for artificial intelligence and user experience design. I believe in building tools that are not only functional but also beautiful and intuitive. My journey is all about exploring the intersection of human creativity and machine intelligence.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

const PookieBrowserPage: FC<NavigationProps> = ({ navigateTo }) => {
    return (
        <main className="pookie-page">
            <div className="container">
                 <section className="hero">
                    <h1>Pookie Browser</h1>
                    <p className="subtitle">The modern web, reimagined.</p>
                    <a href="#" className="btn btn-primary">Download for free</a>
                </section>

                <section className="section">
                    <h2>Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Blazing Fast</h3>
                            <p>Built on the powerful Chromium engine for top-tier performance and compatibility.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Sleek & Modern</h3>
                            <p>A minimalist user interface that gets out of your way and puts the content first.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Privacy Focused</h3>
                            <p>Equipped with tools to block trackers and protect your digital footprint online.</p>
                        </div>
                    </div>
                </section>

                <section className="section download-section">
                    <h2>Get Pookie Browser</h2>
                     <div className="download-buttons">
                        <button className="btn">Windows</button>
                        <button className="btn">macOS</button>
                        <button className="btn">Linux</button>
                    </div>
                </section>


                 <button onClick={() => navigateTo('home')} className="btn">
                    &larr; Back to Home
                </button>
            </div>
        </main>
    );
};


const App: FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [theme, setTheme] = useState<Theme>('light');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    
    useEffect(() => {
        document.body.classList.toggle('menu-open', isMenuOpen);
    }, [isMenuOpen]);

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'pookie':
                return <PookieBrowserPage navigateTo={navigateTo} />;
            case 'home':
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <>
            <Header 
                navigateTo={navigateTo} 
                toggleTheme={toggleTheme} 
                theme={theme} 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
            />
            {renderPage()}
            <Footer />
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);