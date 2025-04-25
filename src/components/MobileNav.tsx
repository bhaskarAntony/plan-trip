import React from 'react';
import { Home, Calendar, MapPin, Users, MessageSquare } from 'lucide-react';

const MobileNav: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', href: '#home' },
    { icon: <Calendar size={24} />, label: 'Schedule', href: '#schedule' },
    { icon: <MapPin size={24} />, label: 'Venue', href: '#venue' },
    { icon: <Users size={24} />, label: 'Activities', href: '#activities' },
    { icon: <MessageSquare size={24} />, label: 'Chat', href: '#chat' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center justify-center flex-1 h-full text-secondary-600 hover:text-primary-600 transition-colors"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;