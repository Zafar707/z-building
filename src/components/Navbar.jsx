import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/about', label: t('navAbout') },
    { to: '/services', label: t('navServices') },
    { to: '/projects', label: t('navProjects') },
    { to: '/contact', label: t('navContact') },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Z-Building
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 border-b-2 border-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 transition'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* Language Switch */}
          <li>
            <button
              onClick={() => changeLanguage('uz')}
              className="text-gray-700 hover:text-blue-600 px-2"
              aria-label="Change language to Uzbek"
            >
              UZ
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className="text-gray-700 hover:text-blue-600 px-2"
              aria-label="Change language to Russian"
            >
              RU
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="space-y-4">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-blue-700 border-l-4 border-blue-700 pl-3 font-semibold'
                      : 'block text-gray-700 hover:text-blue-600 transition pl-3'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className="flex space-x-4 mt-4">
              <button
                onClick={() => changeLanguage('uz')}
                className="text-gray-700 hover:text-blue-600 px-3 py-1 border rounded"
              >
                UZ
              </button>
              <button
                onClick={() => changeLanguage('ru')}
                className="text-gray-700 hover:text-blue-600 px-3 py-1 border rounded"
              >
                RU
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
