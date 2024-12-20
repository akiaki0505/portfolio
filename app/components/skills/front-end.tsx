import React from 'react'
import dynamic from 'next/dynamic';
import { LevelFYI } from '@/app/components/skills/levelFYI';

const SkillFrontEndChart = dynamic(() => import('@/app/components/skills/chart/SkillFrontEndChart'), { ssr: false });

export const FrontEnd = () => {
    return (
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-neutral-900 rounded-lg w-8/12">
            <h3 className="text-lg text-center font-bold text-gray-900 dark:text-white mb-2">Front-end</h3>
            <p>フロントエンドは実務で使うことは少ないですが、好きなので自己研鑽しています！！</p>

            <div className="flex justify-between">
                <div className="w-5/12 text-center">
                    <SkillFrontEndChart />
                </div>
                <LevelFYI />
            </div>
        </div>
    )
}
