/** @module NavBar */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, ChevronDown } from "lucide-react";
import type { NavBarProps } from "./types/navBarTypes";

import logoNoWords from "../assets/images/logo_no_words-removebg-preview.png";
import "./NavBar.css";

const NavBar = ({ items }: NavBarProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;
  
  const isDropdownActive = (item: any): boolean => {
    if (!item.dropdown) return false;
    return item.dropdown.some((dropdownItem: any) => location.pathname === dropdownItem.href);
  };

  const handleDropdownEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(itemName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownMenuEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <nav className={`nav-bar ${isScrolled ? 'nav-bar-scrolled' : 'nav-bar-transparent'}`}>
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <Link to="/" className="nav-bar-logo">
            <img 
              className="nav-bar-logo-image" 
              src={logoNoWords} 
              alt="Artemis Logo" 
            />
            <span className={`nav-bar-logo-text ${isScrolled ? 'nav-bar-logo-text-scrolled' : 'nav-bar-logo-text-transparent'}`}>
              Artemis
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-bar-desktop">
          {items.map((item) => (
            item.dropdown ? (
              <div 
                key={item.name}
                className="nav-bar-dropdown"
                onMouseEnter={() => handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`nav-bar-link nav-bar-dropdown-trigger ${isDropdownActive(item) ? 'nav-bar-link-active' : ''} ${isScrolled ? 'nav-bar-link-scrolled' : 'nav-bar-link-transparent'}`}
                >
                  {item.name}
                  <ChevronDown size={16} className="nav-bar-dropdown-icon" />
                </button>
                {dropdownOpen === item.name && (
                  <div 
                    className="nav-bar-dropdown-menu"
                    onMouseEnter={handleDropdownMenuEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className={`nav-bar-dropdown-item ${isActive(dropdownItem.href) ? 'nav-bar-dropdown-item-active' : ''}`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href!}
                className={`nav-bar-link ${isActive(item.href!) ? 'nav-bar-link-active' : ''} ${isScrolled ? 'nav-bar-link-scrolled' : 'nav-bar-link-transparent'}`}
              >
                {item.name}
              </Link>
            )
          ))}
          <a 
            href="https://www.linkedin.com/company/boulder-artemis-consulting/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`nav-bar-linkedin ${isScrolled ? 'nav-bar-linkedin-scrolled' : 'nav-bar-linkedin-transparent'}`}
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="nav-bar-mobile-button">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`nav-bar-toggle ${isScrolled ? 'nav-bar-toggle-scrolled' : 'nav-bar-toggle-transparent'}`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="nav-bar-mobile">
          <div className="nav-bar-mobile-menu">
            {items.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="nav-bar-mobile-dropdown">
                  <div className="nav-bar-mobile-dropdown-title">{item.name}</div>
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.href}
                      className={`nav-bar-mobile-link nav-bar-mobile-dropdown-item ${isActive(dropdownItem.href) ? 'nav-bar-mobile-link-active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href!}
                  className={`nav-bar-mobile-link ${isActive(item.href!) ? 'nav-bar-mobile-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a 
              href="https://www.linkedin.com/company/boulder-artemis-consulting/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-bar-mobile-linkedin"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 