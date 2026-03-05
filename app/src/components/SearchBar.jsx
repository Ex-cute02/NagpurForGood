import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-3xl mx-auto px-6 mb-8"
        >
            <div className="relative group">
                {/* Search Icon */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-violet-400 transition-colors">
                    <Search className="w-5 h-5" />
                </div>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search NGOs by name, cause, or location..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-20 py-4 rounded-2xl glass-input text-white placeholder:text-white/30 text-base font-light focus:ring-2 focus:ring-violet-500/20"
                />

                {/* Keyboard Shortcut Badge */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/30 text-xs font-medium">
                    <span>⌘</span>
                    <span>K</span>
                </div>
            </div>
        </motion.div>
    );
};

export default SearchBar;
