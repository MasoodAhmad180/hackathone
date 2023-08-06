'use client'

import { useState } from "react";
import Link from "next/link";

const HoverDropDown = ({ title, link1, link2, link3, link4, href1, href2, href3, href4}) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownOpen = () => {
        setDropdownOpen(true);
    };

    const handleDropdownClose = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            <div className="h-full">
                <button
                    className=" text-white hover:text-gray-800 text-xl font-semibold px-3 py-3 hover:bg-[#F2F2F2]"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                >
                    <span className="text-white hover:text-gray-800">{title}</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 ms-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                </button>
                {isDropdownOpen && (
                    <div
                        className="absolute bg-white w-60 shadow-md bg-[#F2F2F2]"
                        onMouseEnter={handleDropdownOpen}
                        onMouseLeave={handleDropdownClose}
                    >
                                <div className="w-full bg-[#F2F2F2] hover:bg-[#E5E5E5] px-4 py-3">
                                    <a href={href1} className=" no-underline text-black">{link1}</a>
                                </div>
                                <div className="w-full bg-[#F2F2F2] hover:bg-[#E5E5E5] px-4 py-3">
                                    <a href={href2} className=" no-underline text-black">{link2}</a>
                                </div>
                                <div className="w-full bg-[#F2F2F2] hover:bg-[#E5E5E5] px-4 py-3">
                                    <a href={href3} className=" no-underline text-black">{link3}</a>
                                </div>
                                <div className="w-full bg-[#F2F2F2] hover:bg-[#E5E5E5] px-4 py-3">
                                    <a href={href4} className=" no-underline text-black">{link4}</a>
                                </div>
                            
                        

                    </div>
                )}
            </div>
        </>
    )
}

export default HoverDropDown