'use client'

import { useState } from "react";
import Link from "next/link";


const DropDown = ({title, link}) => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="text-left my-4">
                <div>
                    <button
                        type="button"
                        className=" text-left w-full px-4 py-3  text-2xl font-semibold text-white tracking-medium"
                        id="dropdown-button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                    >
                        <span>{title}</span>

                    </button>
                </div>

                {isOpen && (
                    <div className=" mb-5 w-full rounded-md  bg-[#383453]">
                        <div className="" role="none">
                            {/* Dropdown items */}
                            {link.map((item) => {
                            return (
                                <div className="w-full bg-[#F2F2F2] hover:bg-[#E5E5E5] px-4 py-3">
                                    <Link href='' className=" no-underline text-black">{item}</Link>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropDown