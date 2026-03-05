import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const floatingBadges = [
    { label: "Education", top: "20%", left: "8%", delay: 0 },
    { label: "Healthcare", top: "35%", right: "10%", delay: 0.5 },
    { label: "127K+ Meals", bottom: "30%", left: "5%", delay: 1 },
    { label: "15 NGOs", bottom: "25%", right: "8%", delay: 1.5 },
];

const Hero = () => {
    const scrollToDiscover = () => {
        const element = document.getElementById('discover');
        if (element) {
            const offset = element.offsetTop - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10 min-h-[85vh]">
            
            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => (
                <motion.div
                    key={idx}
                    className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-medium text-white/60"
                    style={{ 
                        top: badge.top, 
                        left: badge.left, 
                        right: badge.right, 
                        bottom: badge.bottom 
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -8, 0] 
                    }}
                    transition={{
                        opacity: { delay: badge.delay, duration: 0.5 },
                        scale: { delay: badge.delay, duration: 0.5 },
                        y: { 
                            delay: badge.delay + 0.5, 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    {badge.label}
                </motion.div>
            ))}

            {/* Status Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white/80 tracking-wider uppercase">15 Verified NGOs</span>
            </motion.div>

            {/* Main Heading with Stagger */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-2"
            >
                <motion.h1 
                    variants={staggerItem}
                    className="text-5xl md:text-7xl font-black tracking-tight text-white"
                >
                    Connect. Support.
                </motion.h1>
                <motion.h1 
                    variants={staggerItem}
                    className="text-5xl md:text-7xl font-black tracking-tight text-gradient"
                >
                    Transform Nagpur.
                </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mt-8 mb-12 leading-relaxed font-light"
            >
                Bridge the gap between your intent and authentic local impact. 
                Discover verified NGOs in Nagpur needing your dynamic support right now.
            </motion.p>

            {/* CTA Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToDiscover}
                className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-md transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
                Explore Organizations ↓
            </motion.button>
        </div>
    );
};

export default Hero;
