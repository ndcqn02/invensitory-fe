import axios from 'axios';
import { stringify } from 'postcss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
   const [email, setEmail] = useState('');
   const [matKhau, setMatKhau] = useState('');
   const navigate = useNavigate();

   const handleLogin = async () => {
      const values = {
         email: email,
         matKhau: matKhau,
      };

      console.log('front end value', values);
      await axios
         .post('http://localhost:8080/api/v1/login', values)
         .then((res) => {
            console.log(res);
            if (res.data.message === 'Đăng nhập thành công') {
               if (res.data.maLoaiTaiKhoan === 'KH') {
                  navigate('/');
               } else if (res.data.maLoaiTaiKhoan === 'NQL') {
                  navigate('/manager');
               } else if (res.data.maLoaiTaiKhoan === 'NV') {
                  navigate('/staff');
               } else if (res.data.maLoaiTaiKhoan === 'Admin') {
                  navigate('/admin');
               } else {
                  navigate('/supplier');
               }
            }

            localStorage.setItem('user', JSON.stringify(res.data.user)) 
         })
         .catch((err) => console.error(err));
   };

   return (
      <div className="main">
         <div className="flex h-screen text-gray-900 ">
            <div className="w-11/12 p-8 m-auto bg-blue-gray-100 rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
               <div className="space-y-2">
                  <div>
                     <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">Đăng nhập</h1>
                  </div>
                  <div>
                     <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>Chưa có tài khoản?</span>
                        <a className="font-semibold text-blue-500" href="/sign-up">
                           Đăng ký
                        </a>
                     </div>
                  </div>
               </div>
               <div className="mt-10">
                  <form className="text-base">
                     <div className="space-y-4">
                        <div className="relative flex items-center">
                           <svg
                              className="absolute w-5 h-5 ml-3 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                           </svg>
                           <input
                              className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </div>
                        <div className="relative flex items-center">
                           <svg
                              className="absolute w-5 h-5 ml-3 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                           </svg>
                           <input
                              className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                              type="password"
                              name="password"
                              placeholder="Password"
                              required
                              value={matKhau}
                              onChange={(e) => setMatKhau(e.target.value)}
                           />
                        </div>
                        <div className="flex items-start space-x-2 md:items-center">
                           <input className="focus:outline-none" type="checkbox" name="terms" id="serviceTerms" />
                           <label className="-mt-1 text-sm sm:mt-0" htmlFor="serviceTerms">
                              <span>Nhớ tài khoản</span>
                           </label>
                        </div>
                        {/* <div>
                           <button className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
                              Đăng nhập
                           </button>
                        </div> */}
                     </div>
                  </form>
                  <div className="mt-4">
                     <button
                        onClick={handleLogin}
                        className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                     >
                        Đăng nhập
                     </button>
                  </div>
                  <div className="mt-4">
                     <button className="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg">
                        <span className="flex items-center justify-center gap-4">
                           <img
                              className="w-5 h-5 text-xs"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                              alt="google_logo"
                           />
                           <span>Tiếp tục với Google</span>
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SignIn;
