import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';

const FilterBar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 mb-12 z-20 relative" id="discover">
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-black text-white/80 uppercase tracking-widest">
                    Discover by Cause
                </h2>

                <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="flex flex-wrap gap-3"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            variants={staggerItem}
                            onClick={() => onSelectCategory(category)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`
                                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md
                                ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-violet-600 to-rose-600 text-white shadow-[0_4px_24px_rgba(139,92,246,0.4)] border border-transparent scale-105'
                                    : 'bg-white/5 border border-white/8 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/15'
                                }
                            `}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FilterBar;
