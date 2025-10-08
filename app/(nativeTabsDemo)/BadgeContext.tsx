import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BadgeContextType {
    badgeCount: number;
    setBadgeCount: (count: number) => void;
    incrementBadge: () => void;
    decrementBadge: () => void;
    clearBadge: () => void;
}

const BadgeContext = createContext<BadgeContextType | undefined>(undefined);

export const useBadge = () => {
    const context = useContext(BadgeContext);
    if (!context) {
        throw new Error('useBadge must be used within a BadgeProvider');
    }
    return context;
};

interface BadgeProviderProps {
    children: ReactNode;
}

export const BadgeProvider: React.FC<BadgeProviderProps> = ({ children }) => {
    const [badgeCount, setBadgeCount] = useState(4);

    const incrementBadge = () => {
        setBadgeCount(prev => prev + 1);
    };

    const decrementBadge = () => {
        setBadgeCount(prev => Math.max(0, prev - 1));
    };

    const clearBadge = () => {
        setBadgeCount(0);
    };

    const value: BadgeContextType = {
        badgeCount,
        setBadgeCount,
        incrementBadge,
        decrementBadge,
        clearBadge,
    };

    return (
        <BadgeContext.Provider value={value}>
            {children}
        </BadgeContext.Provider>
    );
};
