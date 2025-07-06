import React from 'react';
import { Star } from 'lucide-react';

interface HeaderProps {
    onTitleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => (
    <header className="relative bg-white/70 backdrop-blur-sm border-b-2 border-pink-200 py-6 text-center shadow-lg shadow-pink-500/10 z-20">
        <div className="absolute inset-0 opacity-50 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 animate-spin-slow"></div>
        </div>
        <div className="relative">
            <h1
                className="text-4xl md:text-5xl font-bold text-gray-700 cursor-pointer inline-block"
                onClick={onTitleClick}
                style={{ fontFamily: "'Dancing Script', cursive" }}
            >
                Pastel Sparkle Days
            </h1>
            <p className="text-pink-400 flex items-center justify-center gap-2 mt-2">
                <Star size={16} className="text-yellow-400 fill-yellow-300" />
                My favorite things blog
                <Star size={16} className="text-yellow-400 fill-yellow-300" />
            </p>
        </div>
    </header>
);

export default Header;
