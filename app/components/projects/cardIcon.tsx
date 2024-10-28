import React from 'react'
import internal from 'stream'

interface cardIconProps {
    iconName: String
}

export const CardIcon: React.FC<cardIconProps> = ({ iconName }) => {
    const tooltipId = `tooltip-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    return (
        <>
            <div 
                data-tooltip-target={tooltipId} 
                className="w-24 p-5 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <i className={`devicon-${iconName}-plain text-5xl dark:text-teal-400`}></i>
            </div>
            <div 
                id={tooltipId} 
                role="tooltip" 
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {iconName}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    )
}
