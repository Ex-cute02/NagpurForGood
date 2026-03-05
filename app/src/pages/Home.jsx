import { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import NGOGrid from '../components/NGOGrid';
import { ngoData, allCategories } from '../data/ngoData';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Cursor spotlight effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Filter NGOs by category and search query
    const filteredNGOs = useMemo(() => {
        let result = ngoData;

        // Filter by category
        if (selectedCategory !== 'All') {
            result = result.filter(ngo => ngo.categories.includes(selectedCategory));
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(ngo => 
                ngo.name.toLowerCase().includes(query) ||
                ngo.description.toLowerCase().includes(query) ||
                ngo.address.toLowerCase().includes(query) ||
                ngo.categories.some(cat => cat.toLowerCase().includes(query))
            );
        }

        return result;
    }, [selectedCategory, searchQuery]);

    return (
        <>
            <Helmet>
                <title>Nagpur For Good — Connect. Support. Transform Nagpur.</title>
                <meta name="description" content="Discover verified NGOs in Nagpur making real impact. Connect with organizations working in education, healthcare, environment, and more." />
            </Helmet>

            {/* Cursor Spotlight */}
            <div className="cursor-spotlight" />

            <main>
                <Hero />
                <SearchBar 
                    searchQuery={searchQuery} 
                    onSearchChange={setSearchQuery} 
                />
                <FilterBar
                    categories={allCategories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <NGOGrid ngos={filteredNGOs} />
            </main>
        </>
    );
};

export default Home;
