import React from 'react'
import { CardIcon } from '@/app/components/projects/cardIcon';

interface cardProps {
    pDate: String
    pClient: String
    pName: String
    pContent: String
    icon: String[];

}

export const Card: React.FC<cardProps> = ({ pDate, pClient, pName, pContent, icon }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:text-white dark:bg-neutral-900">
            <h3 className="p-5 border-b-2 border-gray-100 dark:border-gray-700">
                <span>{pDate}</span>
                <span className="pl-5">{pClient}</span>
                <span className="pl-5">{pName}</span>
            </h3>
            <div className="p-5">
                <p>{pContent}</p>
                <p className="pt-10">使用技術</p>

                <div className="flex justify-left space-x-3">
                    {icon.map((item, index) => (
                        <CardIcon key={index} iconName={item}/>
                    ))}
                </div>

            </div>
        </div>
     )
}
