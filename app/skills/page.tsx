"use client";
import React, { useEffect, useState } from 'react';
import { Navbar } from '@/app/components/navber';
import { Design } from '@/app/components/skills/design';
import { FrontEnd } from '@/app/components/skills/front-end';

export default function Skills() {
    const [design, setDesign] = useState("design");
    const [frontEnd, setFrontEnd] = useState("");

    const handleChange = (e:any) =>{
        useEffect(() => {
            if(e.target.id === "design"){
                setDesign("design");
            }
            if(e.target.id === "frontEnd"){
                setFrontEnd("frontEnd");
            }
        });
    
    }
    return (
        <>
            <Navbar />

            <div className="pt-44 pl-5 md:flex">
                <ul className="flex-column space-y space-y-24 pr-10 w-64 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                    <li>
                        <a 
                            href="#" 
                            id="design"
                            className="inline-flex items-center justify-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-emerald-500"
                            onClick={handleChange}
                        >
                            Design
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            id="frontEnd" 
                            className="inline-flex items-center justify-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={handleChange}
                        >
                            Front-end
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center justify-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white">
                            Back-end
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center justify-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white">
                            Other Skill
                        </a>
                    </li>
                </ul>
                {design && <Design />}
                {frontEnd && <FrontEnd />}
            </div>
        </>
    )
}
