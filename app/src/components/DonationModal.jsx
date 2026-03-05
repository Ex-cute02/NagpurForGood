import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, X } from 'lucide-react';
import { scaleIn } from '../utils/animations';

const DonationModal = ({ ngo, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ngo.mockUPI);
    };

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${ngo.mockUPI}&pn=${encodeURIComponent(ngo.name)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        {...scaleIn}
                        className="relative w-full max-w-sm glass-panel p-10 rounded-[2rem] text-center space-y-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full glass-btn text-white/60 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Heart Icon */}
                        <div className="inline-flex p-4 rounded-[1.5rem] bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            <Heart className="w-12 h-12" />
                        </div>

                        {/* Title */}
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                                Direct Donation
                            </h3>
                            <p className="text-white/50 text-sm font-light">
                                100% of your gift goes via official UPI directly to {ngo.name}.
                            </p>
                        </div>

                        {/* QR Code */}
                        <div className="bg-white p-5 rounded-[1.5rem] inline-block">
                            <img
                                src={qrCodeUrl}
                                alt="UPI QR Code"
                                className="w-44 h-44 rounded-xl"
                            />
                        </div>

                        {/* VPA Display */}
                        <div className="space-y-2">
                            <span className="text-[10px] uppercase font-black text-white/30 tracking-widest block">
                                Merchant VPA
                            </span>
                            <div className="flex items-center justify-center gap-2">
                                <span className="bg-white/5 px-4 py-2 rounded-xl text-white font-mono text-sm tracking-wider border border-white/10">
                                    {ngo.mockUPI}
                                </span>
                                <button
                                    onClick={copyToClipboard}
                                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/10"
                                    title="Copy VPA"
                                >
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Close Text */}
                        <button
                            onClick={onClose}
                            className="w-full text-white/30 uppercase text-[10px] font-black tracking-widest hover:text-white transition-colors py-2"
                        >
                            Close Portal
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DonationModal;
