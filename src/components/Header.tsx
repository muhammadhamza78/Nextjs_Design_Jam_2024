"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useWishlist } from "@/content/WishlistContext";

interface DropdownOption {
  value: string;
  label: string;
}

const languages: DropdownOption[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' }
];

const currencies: DropdownOption[] = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' }
];

const filters: DropdownOption[] = [
  { value: 'all', label: 'All' },
  { value: 'popular', label: 'Popular' },
  { value: 'new', label: 'New Arrivals' },
  { value: 'sale', label: 'Sale' }
];

const Header = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const { wishlist } = useWishlist();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setLanguageDropdown(false);
        setCurrencyDropdown(false);
        setFilterDropdown(false);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileDropdown = (type: string) => {
    setActiveMobileDropdown(activeMobileDropdown === type ? null : type);
  };

  const handleOptionSelect = (
    option: DropdownOption,
    type: 'language' | 'currency' | 'filter'
  ) => {
    if (type === 'language') {
      setSelectedLanguage(option);
    } else if (type === 'currency') {
      setSelectedCurrency(option);
    } else {
      setSelectedFilter(option);
    }
    setActiveMobileDropdown(null);
  };

  return (
    <header className="bg-violet-700 text-white relative" ref={headerRef}>
      <div className="py-2 text-sm">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <AiOutlineMail />
                <span className="hidden lg:inline">mhhasanul@gmail.com</span>
              </a>
              <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <MdPhone />
                <span className="hidden lg:inline">(12345)67890</span>
              </a>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              {/* Desktop Dropdowns */}
              <div className="relative">
                <button className="flex items-center gap-1 hover:text-gray-200" onClick={() => toggleMobileDropdown('filter')}>
                  <span>{selectedFilter.label}</span>
                  <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'filter' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'filter' && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg z-10 min-w-[120px]">
                    {filters.map((filter) => (
                      <button
                        key={filter.value}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleOptionSelect(filter, 'filter')}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button className="flex items-center gap-1 hover:text-gray-200" onClick={() => toggleMobileDropdown('language')}>
                  <span>{selectedLanguage.label}</span>
                  <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'language' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'language' && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg z-10 min-w-[120px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.value}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleOptionSelect(lang, 'language')}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button className="flex items-center gap-1 hover:text-gray-200" onClick={() => toggleMobileDropdown('currency')}>
                  <span>{selectedCurrency.label}</span>
                  <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'currency' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'currency' && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded-lg shadow-lg z-10 min-w-[120px]">
                    {currencies.map((curr) => (
                      <button
                        key={curr.value}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleOptionSelect(curr, 'currency')}
                      >
                        {curr.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="/login" className="flex items-center gap-2 hover:text-gray-200">
                <FiUser />
                <span>Login</span>
              </a>

              <a href="/wishlist" className="flex items-center gap-2 hover:text-gray-200 relative">
                <FaRegHeart />
                <span>Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-red-600 rounded-full px-2 py-1">
                    {wishlist.length}
                  </span>
                )}
              </a>

              <a href="/notifications" className="hover:text-gray-200">
                <IoIosNotificationsOutline className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="flex justify-between items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <RiCloseLine className="text-2xl" /> : <RiMenu3Line className="text-2xl" />}
              </button>

              <div className="flex items-center gap-4">
                <a href="/wishlist" className="relative">
                  <FaRegHeart className="text-xl" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-red-600 rounded-full px-2 py-1">
                      {wishlist.length}
                    </span>
                  )}
                </a>
                <a href="/notifications">
                  <IoIosNotificationsOutline className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute left-0 right-0 top-full bg-violet-800 shadow-lg z-50">
                <div className="p-4 space-y-4">
                  <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2 py-2">
                    <AiOutlineMail />
                    <span>mhhasanul@gmail.com</span>
                  </a>
                  
                  <a href="tel:1234567890" className="flex items-center gap-2 py-2">
                    <MdPhone />
                    <span>(12345)67890</span>
                  </a>

                  <div className="border-t border-violet-600 pt-4">
                    {/* Filter Dropdown */}
                    <div className="py-2">
                      <button 
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => toggleMobileDropdown('filter')}
                      >
                        <span>Filter: {selectedFilter.label}</span>
                        <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'filter' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeMobileDropdown === 'filter' && (
                        <div className="bg-violet-700 rounded-lg mt-2">
                          {filters.map((filter) => (
                            <button
                              key={filter.value}
                              className="w-full text-left px-4 py-2 hover:bg-violet-600"
                              onClick={() => handleOptionSelect(filter, 'filter')}
                            >
                              {filter.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Language Dropdown */}
                    <div className="py-2">
                      <button 
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => toggleMobileDropdown('language')}
                      >
                        <span>Language: {selectedLanguage.label}</span>
                        <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'language' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeMobileDropdown === 'language' && (
                        <div className="bg-violet-700 rounded-lg mt-2">
                          {languages.map((lang) => (
                            <button
                              key={lang.value}
                              className="w-full text-left px-4 py-2 hover:bg-violet-600"
                              onClick={() => handleOptionSelect(lang, 'language')}
                            >
                              {lang.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Currency Dropdown */}
                    <div className="py-2">
                      <button 
                        className="flex items-center justify-between w-full py-2"
                        onClick={() => toggleMobileDropdown('currency')}
                      >
                        <span>Currency: {selectedCurrency.label}</span>
                        <IoIosArrowDown className={`transition-transform ${activeMobileDropdown === 'currency' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeMobileDropdown === 'currency' && (
                        <div className="bg-violet-700 rounded-lg mt-2">
                          {currencies.map((curr) => (
                            <button
                              key={curr.value}
                              className="w-full text-left px-4 py-2 hover:bg-violet-600"
                              onClick={() => handleOptionSelect(curr, 'currency')}
                            >
                              {curr.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <a href="/login" className="flex items-center gap-2 py-2">
                      <FiUser />
                      <span>Login</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;