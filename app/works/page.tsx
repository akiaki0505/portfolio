"use client";
import { Navbar } from '@/app/components/navber';
import React from 'react';
import style from '@/app/works/styles/style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import chatApp from "@/public/chat-app-login.png";
import { useDarkMode } from '@/hooks/useDarkMode';

export default function page() {
    const [darkMode, toggleDarkMode] = useDarkMode();
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <div className="flex justify-left">
                <div className="pt-44 pl-5 w-2/4">
                    <p className={`${darkMode ? style.dark_outlined_text : style.light_outlined_text}`}>01</p>
                    <p className={`${darkMode ? style.dark_app_name : style.light_app_name}`}>Chat-app</p>
                    <p className="pt-5 dark:text-white">
                        node.jsとSocket.IOを使ったリアルタイムチャットアプリを作りました。<br />
                        リアルタイムチャットアプリを目的にしているのでメンバーの追加や<br />
                        チャンネルの削除など足りない機能はたくさんあります。<br />
                        今後、時間がある時にアップデートを繰り返していく予定です。
                    </p>
                    <p className="pt-10 dark:text-teal-400">Next.js、React、TypeScript、node.js、Socket.IO</p>

                    <div className="border-b-2 border-slate-300/30 pt-5"></div>

                    <div className="pt-5 space-x-5">
                        <Link href="#">
                            <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600 dark:text-gray-300">
                                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"/>
                                    </svg>
                                </span>
                            </div>
                        </Link>

                        <Link href="https://github.com/akiaki0505/nextjs-chat-client">
                            <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600 dark:text-gray-300">
                                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"/>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="pt-56 pl-5 w-2/4">
                    <Image width={560} height={380} src={chatApp} alt="icon" />
                </div>
            </div>
        </>
    )
}
