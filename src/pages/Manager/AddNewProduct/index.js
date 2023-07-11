import { Card } from '@material-tailwind/react';

function AddNewProducts() {
    return (
        <div className="wrapper">
            <Card className="block  top-20 left-84 h-full w-full max-w-screen-2xl">
                <div className="border-b m-4 p-4 border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Thêm mới sản phẩm</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Tên sản phẩm</label>
                            <div className="mt-2">
                                <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3 sm:col-start-1">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Loại sản phẩm
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>MacBook</option>
                                    <option>Laptop</option>
                                    <option>Mobile</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2 ">
                            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                Số lượng
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Mô tả
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows="3"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>

                        <div className="col-span-full ">
                            <button
                                type="submit"
                                className="float-right rounded-md w-48 mx-auto bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Thêm mới sản phẩm
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default AddNewProducts;
