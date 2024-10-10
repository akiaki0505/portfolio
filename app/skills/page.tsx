import React, { PureComponent }  from 'react';
import { Navbar } from '@/app/components/navber';

export default function Skills() {
  return (
    <>
        <Navbar />

        <div className="pt-44 pl-5 md:flex">
            <ul className="flex-column space-y space-y-4 pr-10 w-64 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <li>
                    <a href="#" className="inline-flex items-center justify-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-emerald-500">
                        Design
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white">
                        Front-end
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white">
                        Back-end
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white">
                        Other Skill
                    </a>
                </li>
            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-neutral-900 rounded-lg w-8/12">
                <h3 className="text-lg text-center font-bold text-gray-900 dark:text-white mb-2">Design</h3>
                <table className="w-full">
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
                </table>
            </div>
        </div>
    </>
    
  )
}
