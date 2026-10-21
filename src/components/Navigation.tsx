import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

interface NavItem {
  path: string;
  label: string;
}

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="nav-container">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              className={`nav-button ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
