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
                    pDate="2018/05" 
                    pClient="某老舗ホテル会社" 
                    pName="会員サイト構築"
                    pContent="ユーザーマイページには「クーポンの配布」や会員ランクに応じた「バッチ」を表示させることで施設内の割引を行えるような制度を構築。管理画面では顧客の属性に合わせてデータをセグメントして一斉メールの配信などの機能を構築しました。また顧客のマスターでは基幹システムにあるのでそこと日時のバッチ処理連携を行っています。"
                    icon={ ["html5", "css3", "javascript", "php"] }
                />
            </div>

            <div className="pt-10 pl-5 pr-5 w-full">
                <Card 
                    pDate="2019/10" 
                    pClient="某大手自動車会社" 
                    pName="サブリクション管理システム"
                    pContent="車のサブリクション申込のAPIを構築。管理画面では申込から納車までをステータス管理できるシステムを構築しました。またサブリクションの売り上げを管理するシステムは別にあるのでそことのデータ連携も行える仕組みを構築しました。"
                    icon={ ["html5", "css3", "javascript", "php"] }
                />
            </div>

            <div className="pt-10 pl-5 pr-5 w-full">
                <Card 
                    pDate="2023/09" 
                    pClient="某BPO会社" 
                    pName="管理画面"
                    pContent="不動産管理会社向けに物件を管理できるプロダクトを開発しました。基本的に物件の空き埋まりやポータルサイトへの募集/募集停止を行えるシステムです。他にも毎月の契約件数や売上などを確認できるレポート機能なども構築しました。"
                    icon={ ["html5", "css3", "jquery", "laravel"] }
                />
            </div>

            <div className="pt-10"></div>

        </>
    )
}
