import React from 'react'
import dynamic from 'next/dynamic';
import { LevelFYI } from '@/app/components/skills/levelFYI';

const SkillDesignChart = dynamic(() => import('@/app/components/skills/chart/SkillDesignChart'), { ssr: false });

export const Design = () => {
    return (
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-neutral-900 rounded-lg w-8/12">
            <h3 className="text-lg text-center font-bold text-gray-900 dark:text-white mb-2">Design</h3>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="w-40">コーポレートサイト</td>
                        <td className="w-32 text-center">◯</td>
                        <td className="w-40">フォーム</td>
                        <td className="w-32 text-center">◯</td>
                    </tr>
                    <tr>
                        <td className="w-40">プロモーションサイト</td>
                        <td className="w-32 text-center">×</td>
                        <td className="w-40">toB　システムデザイン</td>
                        <td className="w-32 text-center">◯</td>
                    </tr>
                    <tr>
                        <td className="w-40">toC　システムデザイン</td>
                        <td className="w-32 text-center">△</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex justify-between">
                <div className="w-5/12 text-center">
                    <SkillDesignChart />
                </div>
                <LevelFYI />
            </div>
        </div>
    )
}
