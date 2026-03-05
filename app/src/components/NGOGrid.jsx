import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import NGOCard from './NGOCard';
import { staggerContainer, staggerItem, scaleIn } from '../utils/animations';

const NGOGrid = ({ ngos }) => {
    if (ngos.length === 0) {
        return (
            <motion.div 
                {...scaleIn}
                className="w-full max-w-6xl mx-auto px-6 py-20 text-center glass-panel rounded-3xl"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                    <Search className="w-8 h-8 text-white/30" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No NGOs Found</h3>
                <p className="text-white/50 font-light">
                    We couldn't find any organizations matching your search criteria.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div 
            layout
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full max-w-6xl mx-auto px-6 pb-24 z-20 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode="popLayout">
                {ngos.map((ngo) => (
                    <motion.div
                        key={ngo.id}
                        layout
                        variants={staggerItem}
                        initial="initial"
                        animate="animate"
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <NGOCard ngo={ngo} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default NGOGrid;
