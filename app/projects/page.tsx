"use client";
import React from 'react'
import { Navbar } from '@/app/components/navber';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Card } from '@/app/components/projects/card';

export default function Projects() {
    const [darkMode, toggleDarkMode] = useDarkMode();
    return (
        <>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
          
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            <div className="pt-28 pl-5 pr-5 w-full">
                <Card 
                    pDate="yyyy/mm" 
                    pClient="某老舗ホテル会社" 
                    pName="会員サイト構築"
                    pContent="システムの概要"
                    icon={ ["html5", "css3", "javascript", "php"] }
                />
            </div>

            <div className="pt-10 pl-5 pr-5 w-full">
                <Card 
                    pDate="yyyy/mm" 
                    pClient="某大手自動車会社" 
                    pName="サブリクション管理システム"
                    pContent="システムの概要"
                    icon={ ["html5", "css3", "javascript", "php"] }
                />
            </div>

            <div className="pt-10 pl-5 pr-5 w-full">
                <Card 
                    pDate="yyyy/mm" 
                    pClient="某BPO会社" 
                    pName="管理画面"
                    pContent="システムの概要"
                    icon={ ["html5", "css3", "jquery", "laravel"] }
                />
            </div>

        </>
    )
}
