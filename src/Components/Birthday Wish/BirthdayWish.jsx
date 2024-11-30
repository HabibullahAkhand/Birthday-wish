import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BirthdayWish.css"; // Add a CSS file for additional styles

const BirthdayWish = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const sections = [
        {
            id: 1,
            content: (
                <motion.div
                    className="welcome-section"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="welcome-title">Happy Birthday, Turna!</h1>
                    <p className="welcome-message">
                        Today is all about celebrating you. Click the gift below to start your surprise journey!
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="gift-box"
                        onClick={() => setCurrentSection(1)}
                    >
                        🎁
                    </motion.div>
                </motion.div>
            ),
        },
        {
            id: 2,
            content: (
                <motion.div
                    className="photo-collage-section"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Our Cherished Memories</h1>
                    <div className="photo-grid">
                        {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map((photo, index) => (
                            <motion.img
                                key={index}
                                src={photo}
                                alt={`Memory ${index + 1}`}
                                className="memory-photo"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                    <button className="next-button" onClick={() => setCurrentSection(2)}>
                        Next ➡️
                    </button>
                </motion.div>
            ),
        },
        {
            id: 3,
            content: (
                <motion.div
                    className="stars-section"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Make a Wish!</h1>
                    <div className="stars-container">
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="star"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => alert(`Wish ${index + 1}: You’re amazing, Turna!`)}
                                >
                                    ⭐
                                </motion.div>
                            ))}
                    </div>
                    <button className="next-button" onClick={() => setCurrentSection(3)}>
                        Next ➡️
                    </button>
                </motion.div>
            ),
        },
        {
            id: 4,
            content: (
                <motion.div
                    className="fireworks-section"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Final Surprise 🎉</h1>
                    <p>Turna, you’re the light of my life. Here’s to celebrating you today and every day!</p>
                    <motion.div
                        className="fireworks"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        🎆 🎇 🎆
                    </motion.div>
                </motion.div>
            ),
        },
    ];

    return (
        <div className="birthday-wish">
            <AnimatePresence mode="wait">
                {sections[currentSection].content}
            </AnimatePresence>
        </div>
    );
};

export default BirthdayWish;
