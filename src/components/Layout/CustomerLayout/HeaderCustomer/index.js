import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function HeaderCustomer() {
   const totalItemsCart = useSelector((state) => state.counter.totalItemsCart);
   console.log('totalItemsCart', totalItemsCart)
   return (
      <header className={cx('wrapper')}>
         <nav
            className=" h-full bg-white relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-scroll="false"
         >
            <div className="flex items-center justify-between w-full py-1 mx-auto flex-wrap-inherit">
               <img alt="logo" src="https://i.imgur.com/oE5Tzmg.png" />

               <nav>
                  <ul className="flex items-center ml-60">
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Trang chủ</li>
                     </NavLink>
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Danh mục sản phẩm</li>
                     </NavLink>
                     <NavLink to="/">
                        <li className="mx-4 font-bold text-lg hover:text-blue-500">Liên hệ</li>
                     </NavLink>
                  </ul>
               </nav>

               <div className="flex items-center  mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                  <div className="flex items-center md:ml-auto md:pr-4">
                     <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                           <i className="fas fa-search"></i>
                        </span>
                        <input
                           type="text"
                           className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                           placeholder="Type here..."
                        />
                     </div>
                  </div>
                  <ul className="flex flex-row  pl-0 mb-0 list-none md-max:w-full ml-1">
                     <li className="flex items-center p-3">
                        <Link to="/sign-in">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeLinecap="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                              strokeWidth="2"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                           </svg>
                        </Link>
                     </li>

                     <li className="relative flex items-center pr-2 p-3">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeLinecap="1.5"
                           stroke="currentColor"
                           className="w-6 h-6"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                           />
                        </svg>
                     </li>
                     <li className="relative flex items-center pr-2 p-3">
                        <Link to="/cart">
                           <button
                              className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                              aria-label="Cart"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-6 w-6"
                                 fill="none"
                                 strokeWidth="2"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                 />
                              </svg>
                              <span className="absolute inset-0 object-right-top -mr-6">
                                 <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                    {totalItemsCart}
                                 </div>
                              </span>
                           </button>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default HeaderCustomer;
