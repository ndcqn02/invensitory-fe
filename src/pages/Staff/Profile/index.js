import { Card } from '@material-tailwind/react';

function Profile() {
   return (
      <div className="wrapper">
         <Card className="block   h-full w-full max-w-screen-2xl">
            <form className="m-4">
               <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                     <h2 className="text-base font-semibold leading-7 text-gray-900">Thông tin cá nhân</h2>

                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                           <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                              Ảnh đại điện
                           </label>
                           <div className="mt-2 flex items-center gap-x-3">
                              <svg
                                 className="h-12 w-12 text-gray-300"
                                 viewBox="0 0 24 24"
                                 fill="currentColor"
                                 aria-hidden="true"
                              >
                                 <path
                                    fillRule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                              <button
                                 type="button"
                                 className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                 Thay đổi
                              </button>
                           </div>
                        </div>

                        <div className="col-span-full">
                           <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                              Ảnh bìa
                           </label>
                           <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              <div className="text-center">
                                 <svg
                                    className="mx-auto h-12 w-12 text-gray-300"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                                 <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                       htmlFor="file-upload"
                                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                       <span>Tải lên 1 file</span>
                                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">hoặc kéo và thả </p>
                                 </div>
                                 <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                     <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                           <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                              Họ và tên đệm
                           </label>
                           <div className="mt-2">
                              <input
                                 type="text"
                                 name="first-name"
                                 id="first-name"
                                 autoComplete="given-name"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>

                        <div className="sm:col-span-3">
                           <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                              Tên
                           </label>
                           <div className="mt-2">
                              <input
                                 type="text"
                                 name="last-name"
                                 id="last-name"
                                 autoComplete="family-name"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>

                        <div className="sm:col-span-4">
                           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                              Địa chỉ email
                           </label>
                           <div className="mt-2">
                              <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 autoComplete="email"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>
                        <div className="sm:col-span-4">
                           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                              Mật khẩu
                           </label>
                           <div className="mt-2">
                              <input
                                 id="password"
                                 name="password"
                                 type="password"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>

                        <div className="sm:col-span-4">
                           <label className="block text-sm font-medium text-gray-900">Giới tính</label>
                           <div className="mt-4 space--6">
                              <div className="flex items-center gap-x-3">
                                 <input
                                    id="male"
                                    name="gender"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 />
                                 <label
                                    htmlFor="push-everything"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                 >
                                    Nam
                                 </label>
                              </div>
                              <div className="flex items-center gap-x-3">
                                 <input
                                    id="female"
                                    name="gender"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 />
                                 <label
                                    htmlFor="push-email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                 >
                                    Nữ
                                 </label>
                              </div>
                           </div>
                        </div>

                        <div className="col-span-full">
                           <label
                              htmlFor="street-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Địa chỉ
                           </label>
                           <div className="mt-2">
                              <input
                                 type="text"
                                 name="street-address"
                                 id="street-address"
                                 autoComplete="street-address"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-6  pb-20 flex items-center justify-end gap-x-6">
                  <button
                     type="submit"
                     className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Cập nhật thông tin
                  </button>
               </div>
            </form>
         </Card>
      </div>
   );
}

export default Profile;
