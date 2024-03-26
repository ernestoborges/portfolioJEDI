import React, { createContext, useContext, useState } from 'react';

const BeepContext = createContext();

export const BeepProvider = ({ children }) => {
    const [muted, setMuted] = useState(false);


    const playBeep = () => {
        if (!muted) {
            const beep = new Audio("/beep.wav");
            beep.volume = 0.2;
            beep.play();
        }
    }

    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <BeepContext.Provider value={{ muted, toggleMute, playBeep }}>
            {children}
        </BeepContext.Provider>
    );
};

export const useBeep = () => {
    const context = useContext(BeepContext);
    if (!context) {
        throw new Error('useBeep deve ser usado dentro de um BeepProvider');
    }
    return context;
};