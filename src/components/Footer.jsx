import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-900 text-white py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Z-Building</h3>
          <p className="text-gray-300">
            {t('footerDescription') || 'Z-Building — Sizning ishonchli qurilish hamkoringiz.'}
          </p>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t('navContact')}</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <a href="tel:+998910007777" className="hover:underline">+998 91 000 77 77</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:info@z-building.com" className="hover:underline">info@z-building.com</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t('followUs') || 'Ijtimoiy tarmoqlar'}</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-400">
              <FaFacebookF size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-400">
              <FaInstagram size={22} />
            </a>
            <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer" aria-label="Telegram" className="hover:text-blue-400">
              <FaTelegramPlane size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Z-Building. {t('rightsReserved') || 'Barcha huquqlar himoyalangan.'}
      </div>
    </footer>
  );
};

export default Footer;
