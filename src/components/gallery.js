import React, { useState, useRef } from 'react';
import './gallery.css';
import gamingconImg from '../assets/gamingcon.jpeg';
import igdcImg from '../assets/igdc.jpeg';
import gdaiImg from '../assets/gdai.jpeg';

const Gallery = () => {
    const galleryItems = [
        { id: 1, year: '2025', title: 'IGDC (Indian Game Developer Conference)', category: 'CONFERENCE', image: igdcImg },
        { id: 2, year: '2025', title: 'GamingCon', category: 'EVENT', image: gamingconImg },
        { id: 3, year: '2025', title: 'GDAI Dev Day', category: 'COMMUNITY', image: gdaiImg },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (window.innerWidth <= 768 && scrollRef.current) {
            const container = scrollRef.current;
            const itemWidth = container.querySelector('.gallery-item').offsetWidth + 20; // width + margins
            const index = Math.round(container.scrollLeft / itemWidth);
            setActiveIndex(index % galleryItems.length);
        }
    };

    const scrollGallery = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const itemWidth = container.querySelector('.gallery-item').offsetWidth + 20;
            container.scrollBy({ left: direction === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' });
        }
    };

    const [selectedMedia, setSelectedMedia] = useState(null);

    /**
     * Assets/GDAI folder se saare images aur videos ko automatically import karne ke liye.
     * Isse aapko manual imports ki zarurat nahi padegi.
     */
    const getGDAIMedia = () => {
        try {
            const context = require.context('../assets/GDAI', false, /\.(png|jpe?g|svg|mp4|webm)$/i);
            return context.keys().map((key) => ({
                type: /\.(mp4|webm)$/i.test(key) ? 'video' : 'image',
                url: context(key)
            }));
        } catch (e) {
            // Agar folder nahi milta ya require.context support nahi karta
            return [{ type: 'image', url: gdaiImg }];
        }
    };

    /**
     * Assets/IGDC folder se saare files fetch karne ke liye logic
     */
    const getIGDCMedia = () => {
        try {
            const context = require.context('../assets/IGDC', false, /\.(png|jpe?g|svg|mp4|webm)$/i);
            return context.keys().map((key) => ({
                type: /\.(mp4|webm)$/i.test(key) ? 'video' : 'image',
                url: context(key)
            }));
        } catch (e) {
            return [{ type: 'image', url: igdcImg }];
        }
    };

    /**
     * Assets/GamingCon folder se saare files fetch karne ke liye logic
     */
    const getGamingConMedia = () => {
        try {
            const context = require.context('../assets/GAMINGCON', false, /\.(png|jpe?g|svg|mp4|webm)$/i);
            return context.keys().map((key) => ({
                type: /\.(mp4|webm)$/i.test(key) ? 'video' : 'image',
                url: context(key)
            }));
        } catch (e) {
            console.error("Error loading GamingCon media:", e);
            return [{ type: 'image', url: gamingconImg }];
        }
    };

    const gdaiMedia = getGDAIMedia();
    const igdcMedia = getIGDCMedia();
    const gamingconMedia = getGamingConMedia();

    const handleCardClick = (item) => {
        console.log("Card clicked:", item.title, "ID:", item.id);
        const title = item.title.toLowerCase();

        if (item.id === 3 || title.includes('gdai') || title.includes('dev day')) {
            setSelectedMedia(gdaiMedia);
        } else if (item.id === 1 || title.includes('igdc')) {
            setSelectedMedia(igdcMedia);
        } else if (item.id === 2 || title.includes('gamingcon')) {
            setSelectedMedia(gamingconMedia);
        } else {
            // Fallback for any other card
            setSelectedMedia([{ type: 'image', url: item.image }]);
        }
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h2 className="gallery-title">Our Gallery</h2>
                    <div className="gallery-header-line"></div>
                    <p className="gallery-subtitle">
                        Highlights from our premium gaming events and conferences.
                    </p>
                </div>

                <div className="gallery-relative-wrapper">
                    <button className="gallery-nav-btn prev" onClick={() => scrollGallery('left')} aria-label="Previous">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div
                        className="gallery-scroll-wrapper"
                        ref={scrollRef}
                        onScroll={handleScroll}
                    >
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                onClick={() => handleCardClick(item)}
                            >
                                <img src={item.image} alt={item.title} className="gallery-item-image" />
                                <div className="gallery-item-content">
                                    <span className="gallery-item-category">{item.category}</span>
                                    <h3 className="gallery-item-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="gallery-nav-btn next" onClick={() => scrollGallery('right')} aria-label="Next">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                <div className="gallery-dots">
                    {galleryItems.map((_, idx) => (
                        <div
                            key={idx}
                            className={`dot ${activeIndex === idx ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* Premium Modal for GDAI Content */}
            {selectedMedia && (
                <div className="gallery-modal-overlay" onClick={() => setSelectedMedia(null)}>
                    <div className="gallery-modal-container" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-modal-close" onClick={() => setSelectedMedia(null)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="gallery-modal-content">
                            {selectedMedia.map((media, index) => (
                                <div key={index} className="modal-media-wrapper">
                                    {media.type === 'image' ? (
                                        <img src={media.url} alt="Gallery Event" className="modal-media-item" />
                                    ) : (
                                        <video
                                            src={media.url}
                                            controls
                                            autoPlay
                                            className="modal-media-item"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;