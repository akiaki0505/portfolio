"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null); // クリックされたリンクを保持

  // ページ読み込み時に localStorage から状態を復元
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedActiveLink = localStorage.getItem('activeLink');

    if (savedDarkMode === 'true') setDarkMode(true);
    if (savedActiveLink) setActiveLink(savedActiveLink);
  }, []);

  // ダークモード切替時に状態を保存
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // リンククリック時にクラスを更新し、localStorage に保存
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    localStorage.setItem('activeLink', href);
  };

  // クリックされたリンクにクラスを付与
  const getLinkClass = (href: string) =>
    `block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent ${
      activeLink === href ? 'md:text-blue-700' : 'text-gray-900'
    } dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-neutral-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="/" className={getLinkClass('/')} onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" className={getLinkClass('/skills')} onClick={() => handleLinkClick('/skills')}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className={getLinkClass('/projects')} onClick={() => handleLinkClick('/projects')}>
                Projects
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Experience
              </a>
            </li>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" />
                </svg>
              )}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
