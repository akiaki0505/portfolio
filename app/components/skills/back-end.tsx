import React from 'react'
import dynamic from 'next/dynamic';
import { LevelFYI } from '@/app/components/skills/levelFYI';

const SkillBackEndChart = dynamic(() => import('@/app/components/skills/chart/SkillBackEndChart'), { ssr: false });

export const BackEnd = () => {
    return (
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-neutral-900 rounded-lg w-8/12">
            <h3 className="text-lg text-center font-bold text-gray-900 dark:text-white mb-2">Back-end</h3>
            <p>メインで行なっている業務なので得意領域です。</p>

            <div className="flex justify-between">
                <div className="w-5/12 text-center">
                    <SkillBackEndChart />
                </div>
                <LevelFYI />
            </div>
        </div>
    )
}
