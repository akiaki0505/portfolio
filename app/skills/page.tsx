"use client";
import React, { useState } from 'react';
import { Navbar } from '@/app/components/navber';
import { Design } from '@/app/components/skills/design';
import { FrontEnd } from '@/app/components/skills/front-end';
import { BackEnd } from '@/app/components/skills/back-end';
import { OtherSkill } from '@/app/components/skills/otherSkill';

export default function Skills() {
    const [selectSkill, setSelectSkill] = useState("design");

    const handleChange = (e: any) =>{
        const { id } = e.target;
        if(id === "design"){
            setSelectSkill("design");
        }
        if(id === "frontEnd"){
            setSelectSkill("frontEnd");
        }
        if(id === "backEnd"){
            setSelectSkill("backEnd");
        }
        if(id === "otherSkill"){
            setSelectSkill("otherSkill");
        }
    
    }

    const getClass = (id: string) => {
        const isSelect = selectSkill === id;
        return `inline-flex items-center justify-center px-4 py-3 rounded-lg w-full 
        ${isSelect ? "text-white bg-blue-700 dark:bg-emerald-500" : "hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-gray-700 dark:hover:text-white"}`;
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
                            className={getClass("design")}
                            onClick={handleChange}
                        >
                            Design
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            id="frontEnd" 
                            className={getClass("frontEnd")}
                            onClick={handleChange}
                        >
                            Front-end
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            id="backEnd" 
                            className={getClass("backEnd")}
                            onClick={handleChange}
                        >
                            Back-end
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#"
                            id="otherSkill" 
                            className={getClass("otherSkill")}
                            onClick={handleChange}
                        >
                            Other Skill
                        </a>
                    </li>
                </ul>
                {selectSkill === "design"     && <Design />}
                {selectSkill === "frontEnd"   && <FrontEnd />}
                {selectSkill === "backEnd"    && <BackEnd />}
                {selectSkill === "otherSkill" && <OtherSkill />}
            </div>
        </>
    )
}
