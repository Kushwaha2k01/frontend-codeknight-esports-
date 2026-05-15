import React, { useState, useRef } from 'react';
import './testimonial.css';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alexander Rivers",
            role: "CEO, Nexus Games",
            content: "Codeknight Esports delivered beyond our expectations. Their game testing process is the most thorough we've ever encountered in the industry.",
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Lead Producer, Alpha Studios",
            content: "The animation quality provided by their team brought our characters to life in ways we didn't think possible. Truly a professional powerhouse.",
        },
        {
            id: 3,
            name: "Vikram Malhotra",
            role: "Founder, Titan Tournaments",
            content: "Their strategic consulting for our esports event was flawless. They understand the gamer mindset and technical requirements perfectly.",
        },
        {
            id: 4,
            name: "Elena Rossi",
            role: "Creative Director, V-Art",
            content: "The sound engineering team is exceptional. The atmospheric audio they created for our VR project added a whole new layer of immersion.",
        },
        {
            id: 5,
            name: "David Chen",
            role: "CTO, Global Play",
            content: "Impressed by their server architecture skills. Our multiplayer launch was smooth with zero downtime thanks to Codeknight's expertise.",
        }
    ];

    // Duplicating for infinite horizontal scroll effect
    const scrollTestimonials = [...testimonials, ...testimonials];

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (window.innerWidth <= 768 && scrollRef.current) {
            const container = scrollRef.current;
            const card = container.querySelector('.testimonial-card');
            const itemWidth = card.offsetWidth + 40; // Card width + margins
            const index = Math.round(container.scrollLeft / itemWidth);
            setActiveIndex(index % testimonials.length);
        }
    };

    const scrollTrack = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const card = container.querySelector('.testimonial-card');
            const scrollAmount = card.offsetWidth + 40;
            container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="testimonials" className="testimonial-section">
            <div className="testimonial-container">
                <div className="testimonial-header">
                    <h2 className="testimonial-title">Client Testimonials</h2>
                    <div className="testimonial-header-line"></div>
                    <p className="testimonial-subtitle">
                        Hear from the industry leaders we've collaborated with to shape the future of gaming.
                    </p>
                </div>

                <div className="testimonial-relative-wrapper">
                    <button className="testimonial-nav-btn prev" onClick={() => scrollTrack('left')} aria-label="Previous">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>

                    <div
                        className="testimonial-track"
                        ref={scrollRef}
                        onScroll={handleScroll}
                    >
                        {scrollTestimonials.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-content">{item.content}</p>
                                <div className="testimonial-info">
                                    <h3 className="person-name">{item.name}</h3>
                                    <span className="person-role">{item.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="testimonial-nav-btn next" onClick={() => scrollTrack('right')} aria-label="Next">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                </div>

                <div className="testimonial-dots">
                    {testimonials.map((_, idx) => (
                        <div
                            key={idx}
                            className={`testi-dot ${activeIndex === idx ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;