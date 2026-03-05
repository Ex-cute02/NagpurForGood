import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
                scrolled 
                    ? 'glass-panel bg-[rgba(6,6,10,0.8)] border-b border-violet-500/10' 
                    : 'glass-panel'
            }`}
        >
            <Link to="/" className="flex items-center gap-3 group">
                {/* Logo with gradient ring */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-rose-500 p-[2px] transition-transform group-hover:scale-110">
                    <div className="w-full h-full rounded-full bg-[#06060a] flex items-center justify-center">
                        <span className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-rose-400">
                            NfG
                        </span>
                    </div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                    Nagpur For Good
                </span>
            </Link>

            <div className="flex items-center gap-4">
                <button className="glass-btn px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-colors">
                    Suggest NGO
                </button>
                <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-medium shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:scale-105 active:scale-95">
                    Login
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
