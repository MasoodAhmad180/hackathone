'use client'

import {  faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

import { Sen, Roboto } from 'next/font/google'
import HoverDropDown from "../hoverDropDown/HoverDropDown"
import DropDown from "../dropDown/DropDown"

const sen = Sen({ subsets: ['latin'], weight: "800" })
const roboto = Roboto({ subsets: ['cyrillic'], weight: "300" })

const Navbar = ({total}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Top Navabr */}

            <div className="px-2 bg-[#F2F2F2] flex justify-between px-3 py-3">
                <div>
                    <Link href='#' className="no-underline text-[#4D4D4D] text-xl">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                        <span> (+92)-312-6692029</span>
                    </Link>
                    <Link href='#' className="no-underline text-[#4D4D4D] text-xl ml-2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        <span> (+92)-344-1879513</span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <span className="text-[#4D4D4D] text-xl">Opening hours 9 a.m. - 6 p.m.</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shipping-fast" class="svg-inline--fa fa-shipping-fast fa-w-20 text-theme-color ms-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#EE4A00" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
                </div>

                <div className="flex gap-7 justify-between">
                    <Link href='/shipping' className="no-underline text-[#4D4D4D] text-xl">Shipping</Link>
                    <Link href='/about' className="no-underline text-[#4D4D4D] text-xl">About</Link>
                </div>
            </div>


            {/*  Navabr */}

            <nav className="mt-4">
                <div className="mx-auto">
                    <div className="flex lg:flex-col md:flex-col justify-between">
                        <div className="flex justify-between items-baseline px-3 my-4 ">
                            <div>
                                <Link href='/' style={sen.style} className="no-underline text-5xl text-black font-extrabold">Brand Shop</Link>
                            </div>
                            <div className="items-center hidden md:block">
                                <p style={roboto.style} className="text-[#4D4D4D] text-xl">Welcome to our shop. We are working for you!</p>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex ">
                                    <div className="bg-[#EE4A00] py-3 px-4">
                                    <Link href='/cartPage'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                                    </Link>
                                    </div>
                                    <div className="bg-[#F2F2F2] py-3 px-4">
                                        <span>{total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:inline-block mt-2">
                            <div className="flex items-baseline space-x-5 bg-[#EE4A00] w-full px-5">
                                
                                <div>
                                    <HoverDropDown
                                     title='iPhone cases'
                                     href1='/iphone7'
                                     href2='/iphone7Plus'
                                     href3='/iphone6'
                                     href4='/iphone5'
                                     link1='IPhone 7'
                                     link2= 'IPhone 7Plus'
                                     link3= 'IPhone 6'
                                     link4='IPhone 5/5s'/>
                                </div>
                                <div>
                                    <HoverDropDown
                                     title='iPad cases'
                                     href1='/ipadMini'
                                     href2='/ipadAir'
                                     href3='/ipad2'
                                     link1='IPad mini 3/ mini2/ mini'
                                     link2='IPad Air 2/ Air'
                                     link3='IPad 4/ 3/ 2' />
                                </div>

                                <div className="text-white text-lg font-semibold px-3 py-3 hover:bg-[#F2F2F2] hover:text-black">
                                    <Link href='' className=" no-underline text-white hover:text-black">Cases for Samsung</Link>
                                </div>
                              
                                <div>
                                    <HoverDropDown
                                     title='Collections'
                                     link1='For Women'
                                     link2='For Men'
                                     link3='With Picture'
                                     link4='With Charger'/>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className=" text-white bg-[#EE4A00] px-3"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <FontAwesomeIcon
                                    icon={faBars}
                                    size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="  space-y-1 sm:px-3 fixed  right-0 bg-gray-900 w-96">
                        <div>
                        <DropDown
                            title='iPhone cases'
                            link={['IPhone 7', 'IPhone 7Plus', 'IPhone 6', 'IPhone 5/5s']}/>
                        </div>
                        <div>
                        <DropDown
                             title='iPad cases'
                             link={['IPad mini 3/ mini2/ mini', 'IPad Air 2/ Air', 'IPad 4/ 3/ 2']}/>
                        </div>
                        <div className="text-white text-lg font-semibold px-3 py-3 hover:bg-[#F2F2F2] hover:text-black">
                                    <Link href='' className=" no-underline text-white hover:text-black">Cases for Samsung</Link>
                                </div>
                        <div>
                        <DropDown
                              title='Collections'
                              link={['For Women', 'For Men', 'With Picture', 'With Charger']}/>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar