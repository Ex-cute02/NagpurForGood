import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Phone, MapPin, Mail, Award, BarChart3,
    ExternalLink, CheckCircle2, Instagram, Facebook, Youtube
} from 'lucide-react';
import { ngoData } from '../data/ngoData';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '../utils/animations';
import { AnimatedCounter } from '../hooks/useAnimatedCounter';
import DonationModal from '../components/DonationModal';

const NGODetails = () => {
    const { id } = useParams();
    const [ngo, setNgo] = useState(null);
    const [showDonation, setShowDonation] = useState(false);

    useEffect(() => {
        const foundNgo = ngoData.find(n => n.id.toString() === id.toString());
        setNgo(foundNgo);
        window.scrollTo(0, 0);
    }, [id]);

    if (!ngo) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-violet-500 border-t-transparent animate-spin"></div>
                    <p className="font-black tracking-widest uppercase text-xs">Finding Organization...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{ngo.name} | Nagpur For Good</title>
                <meta name="description" content={ngo.description} />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen pt-24 pb-20"
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* Breadcrumb */}
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Back to Directory</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content (Left Column) */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Hero Image Section */}
                            <motion.section 
                                {...fadeInUp}
                                className="relative rounded-[2rem] overflow-hidden group shadow-2xl"
                            >
                                <div className="aspect-[21/9] sm:aspect-[16/7] w-full relative">
                                    <img 
                                        src={ngo.image} 
                                        alt={ngo.name} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            {ngo.logo && (
                                                <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-2xl overflow-hidden shrink-0">
                                                    <img src={ngo.logo} alt="Logo" className="w-full h-full object-contain" />
                                                </div>
                                            )}
                                            <div className="flex flex-wrap gap-2">
                                                {ngo.categories.map((cat, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black text-white/90 border border-white/10 uppercase tracking-widest"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <h1 className="text-3xl sm:text-5xl font-black text-white mb-2 leading-none tracking-tighter uppercase">
                                            {ngo.name}
                                        </h1>
                                        {ngo.founder && (
                                            <p className="text-white/60 text-sm font-medium">
                                                Founded by <span className="text-rose-400">{ngo.founder}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.section>

                            {/* Team & Leadership */}
                            {ngo.leadership && (
                                <motion.section 
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={viewportSettings}
                                    variants={staggerContainer}
                                    className="glass-panel p-8 sm:p-10 rounded-[2rem]"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
                                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">Team & Leadership</h2>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {ngo.leadership.map((lead, idx) => (
                                            <motion.div 
                                                key={idx} 
                                                variants={staggerItem}
                                                className="bg-white/5 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-all text-center group/team"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 mx-auto flex items-center justify-center text-xs font-black text-white mb-3 shadow-lg group-hover/team:scale-110 transition-transform">
                                                    {lead.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <h4 className="text-sm font-bold text-white line-clamp-1">{lead.name}</h4>
                                                <p className="text-[9px] uppercase font-black text-white/30 tracking-widest mt-1">{lead.role}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>
                            )}

                            {/* Mission Section */}
                            <motion.section 
                                initial="initial"
                                whileInView="animate"
                                viewport={viewportSettings}
                                variants={fadeInUp}
                                className="glass-panel p-8 sm:p-12 rounded-[2rem]"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-10 h-1 bg-violet-500 rounded-full"></span>
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-violet-400">Our Strategic Vision</h2>
                                </div>
                                <p className="text-xl sm:text-2xl text-white/80 leading-snug font-light italic mb-8">
                                    "{ngo.description}"
                                </p>
                                {ngo.longDescription && (
                                    <p className="text-white/50 leading-relaxed">
                                        {ngo.longDescription}
                                    </p>
                                )}
                            </motion.section>

                            {/* Programs Section */}
                            {ngo.programs && (
                                <motion.section 
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={viewportSettings}
                                    variants={staggerContainer}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-10 h-1 bg-rose-500 rounded-full"></span>
                                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-rose-400">Active Programs</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {ngo.programs.map((prog, idx) => (
                                            <motion.div 
                                                key={idx} 
                                                variants={staggerItem}
                                                className="glass-panel p-7 rounded-[1.5rem] hover:bg-white/5 transition-all group"
                                            >
                                                <h3 className="text-lg font-black text-white mb-3 group-hover:text-rose-400 transition-colors uppercase tracking-tight">
                                                    {prog.title}
                                                </h3>
                                                <p className="text-white/40 text-sm leading-relaxed mb-5">{prog.description}</p>
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 rounded-xl">
                                                    <BarChart3 className="w-4 h-4 text-rose-500" />
                                                    <span className="text-xs font-black text-rose-500 uppercase">{prog.impact}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>
                            )}

                            {/* Impact Timeline */}
                            {ngo.recentActivities && (
                                <motion.section 
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={viewportSettings}
                                    variants={staggerContainer}
                                    className="glass-panel p-8 sm:p-10 rounded-[2rem]"
                                >
                                    <div className="flex items-center gap-3 mb-10">
                                        <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
                                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Milestones & Drives</h2>
                                    </div>
                                    <div className="space-y-10 relative before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-white/5">
                                        {ngo.recentActivities.map((activity, idx) => (
                                            <motion.a
                                                key={idx}
                                                variants={staggerItem}
                                                href={activity.sourceUrl || '#'}
                                                target={activity.sourceUrl ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="relative pl-10 block group/milestone transition-all hover:translate-x-2"
                                            >
                                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#06060a] border-4 border-emerald-500/50 flex items-center justify-center group-hover/milestone:border-emerald-400 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-[10px] font-black text-emerald-400/70 border border-emerald-400/20 px-2 py-1 rounded-md uppercase tracking-wider">
                                                            {activity.date}
                                                        </span>
                                                        {activity.sourceUrl && (
                                                            <ExternalLink className="w-3 h-3 text-white/20 group-hover/milestone:text-emerald-400 transition-colors" />
                                                        )}
                                                    </div>
                                                    <h4 className="text-lg font-bold text-white mb-2 group-hover/milestone:text-emerald-400 transition-colors">
                                                        {activity.title}
                                                    </h4>
                                                    <p className="text-white/40 text-sm leading-relaxed">{activity.description}</p>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.section>
                            )}
                        </div>

                        {/* Sidebar (Right Column) */}
                        <aside className="lg:col-span-4 space-y-8">

                            {/* Transparency Hub */}
                            <div className="glass-panel p-8 rounded-[2rem] sticky top-32">
                                <div className="flex items-center gap-2 mb-8">
                                    <Award className="w-5 h-5 text-violet-400" />
                                    <h3 className="font-black text-white uppercase tracking-widest text-sm">Transparency Hub</h3>
                                </div>

                                {/* Impact Stats */}
                                {ngo.impactStats && (
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {ngo.impactStats.map((stat, idx) => (
                                            <a
                                                key={idx}
                                                href={stat.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-violet-500/30 transition-all group/stat block"
                                            >
                                                <div className="text-lg font-black text-white group-hover/stat:text-violet-400 transition-colors">
                                                    <AnimatedCounter value={stat.value} />
                                                </div>
                                                <div className="text-[9px] uppercase text-white/30 font-black tracking-tight leading-none mt-1 flex items-center gap-1">
                                                    {stat.label}
                                                    <ExternalLink className="w-2 h-2 opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* Certifications */}
                                {ngo.certifications && (
                                    <div className="space-y-2 mb-8">
                                        {ngo.certifications.map((cert, idx) => (
                                            <div 
                                                key={idx} 
                                                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span className="text-xs font-black uppercase tracking-widest">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="h-[1px] bg-white/5 mb-8"></div>

                                {/* Action Buttons */}
                                <div className="space-y-4">
                                    <button
                                        onClick={() => setShowDonation(true)}
                                        className="w-full py-5 rounded-xl bg-gradient-to-r from-violet-600 to-rose-600 font-black text-white text-sm uppercase tracking-[0.15em] shadow-[0_20px_40px_rgba(236,72,153,0.3)] hover:shadow-[0_25px_50px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
                                    >
                                        Give Direct Support
                                    </button>
                                    <a
                                        href={ngo.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 rounded-xl border-2 border-white/10 font-black text-white text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Official Portal
                                    </a>
                                </div>

                                {/* Board Mini List */}
                                {ngo.leadership && (
                                    <div className="mt-10">
                                        <h4 className="text-[10px] uppercase font-black text-white/30 tracking-[0.15em] mb-4">Board of Directors</h4>
                                        <div className="space-y-3">
                                            {ngo.leadership.slice(0, 3).map((lead, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[9px] text-white/40 font-black">
                                                        {lead.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-white leading-none">{lead.name}</div>
                                                        <div className="text-[8px] uppercase font-black text-white/30 tracking-widest mt-1">{lead.role}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Contact Card */}
                                <div className="mt-10 pt-8 border-t border-white/5">
                                    <h4 className="text-[10px] uppercase font-black text-white/30 tracking-[0.15em] mb-4">Contact</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-white/70">
                                            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium">{ngo.contact}</span>
                                        </div>
                                        {ngo.socialLinks?.email && (
                                            <div className="flex items-center gap-3 text-white/70">
                                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-medium truncate">{ngo.socialLinks.email}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 text-white/70">
                                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium line-clamp-2">{ngo.address}</span>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    {(ngo.socialLinks?.instagram || ngo.socialLinks?.facebook || ngo.socialLinks?.youtube) && (
                                        <div className="flex gap-3 mt-6">
                                            {ngo.socialLinks?.instagram && (
                                                <a href={ngo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-rose-400 hover:text-rose-300 transition-all">
                                                    <Instagram className="w-5 h-5" />
                                                </a>
                                            )}
                                            {ngo.socialLinks?.facebook && (
                                                <a href={ngo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-blue-400 hover:text-blue-300 transition-all">
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                            )}
                                            {ngo.socialLinks?.youtube && (
                                                <a href={ngo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-red-400 hover:text-red-300 transition-all">
                                                    <Youtube className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </motion.div>

            {/* Donation Modal */}
            <DonationModal 
                ngo={ngo} 
                isOpen={showDonation} 
                onClose={() => setShowDonation(false)} 
            />
        </>
    );
};

export default NGODetails;
