import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { totalItemsCart } from '../../../redux/counter';


const currentDateTime = () => {
   const now = new Date();
   const year = now.getFullYear();
   const month = String(now.getMonth() + 1).padStart(2, '0');
   const day = String(now.getDate()).padStart(2, '0');
   const hours = String(now.getHours()).padStart(2, '0');
   const minutes = String(now.getMinutes()).padStart(2, '0');
   const seconds = String(now.getSeconds()).padStart(2, '0');

   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const Cart = () => {
   const customer  = JSON.parse(localStorage.getItem('user'));
   console.log('at cart customer', customer);
   const [itemsCart, setItemsCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
   const [address, setAddress] = useState(customer.diaChi);
   const [name, setName] = useState(customer.hoVaTen);
   const [phoneNumber, setPhoneNumber] = useState(customer.sdt);
   let total = 0;
   const dispatch = useDispatch();

   const value = {
      maKhachHang: customer.maKhachHang,
      ngayTaoDonHang: currentDateTime(),
      diaChiGiaoHang: address,
      trangThaiDonHang: 'Chưa giao',
      itemsCart: itemsCart,
   };

   const handleQuantityUpdate = (index, newQuantity, update) => {
      if (index >= 0 && index < itemsCart.length) {
         const updatedProducts = [...itemsCart];
         const quantity = parseInt(updatedProducts[index].soLuongDat);
         let updateQuantity = parseInt(newQuantity);
         console.log(' updateQuantity', updateQuantity);
         console.log('typeof updateQuantity', typeof updateQuantity);
         if (Number.isNaN(updateQuantity)) {
            updateQuantity = null;
         }

         console.log('update: ', update);
         console.log(typeof update);
         if ((update === 'increment' && quantity >= 1) || (update === 'decrement' && quantity > 1) || update == null) {
            updatedProducts[index].soLuongDat = updateQuantity;
            setItemsCart(updatedProducts);
            localStorage.setItem('cart', JSON.stringify(updatedProducts));
            dispatch(totalItemsCart());
            console.log(updatedProducts);
         }
      } else {
         console.log('Invalid index');
      }
   };

   const handleOrder = async () => {
      await axios
         .post('http://localhost:8080/api/v1/create-order', value)
         .then((res) => {
            console.log(res);
            localStorage.removeItem('cart');
            setItemsCart([]);
            dispatch(totalItemsCart());
            toast.success('Đặt hàng thành công!');
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleRemoveItem = (index) => {
      if (index >= 0 && index < itemsCart.length) {
         itemsCart.splice(index, 1);
         localStorage.setItem('cart', JSON.stringify(itemsCart));
         setItemsCart(JSON.parse(localStorage.getItem('cart')));
         dispatch(totalItemsCart())
      } else {
         console.log('Invalid index');
      }
   };

   return (
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
         <div className="mt-10 flex flex-col rounded xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
               {/* Nội dung chi tiết sản phẩm */}
               <div className="flex flex-col justify-start items-start bg-gray-50 rounded-lg md:py-6 md:p-6 xl:p-8 w-full">
                  <div className="w-full">
                     <div className="w-full">
                        <div className="flex justify-between border-b pb-8">
                           <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                           <h2 className="font-semibold">{itemsCart.length} sản phẩm</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                           <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Chi tiết sản phẩm</h3>
                           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Số lượng</h3>
                           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Giá</h3>
                           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                              Thành tiền
                           </h3>
                           <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                              Hành động
                           </h3>
                        </div>

                        {itemsCart.map((item, index) => {
                           total = total + item.soLuongDat * item.giaBan;
                           return (
                              <div key={index} className="flex items-center hover:bg-white -mx-6 px-6 py-5 border-b">
                                 <div className="flex w-2/5">
                                    <div className="w-20">
                                       <img className="rounded" src={item.hinhAnh} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                       <span className="font-bold text-sm">{item.tenSanPham}</span>
                                       <span className="text-red-500 text-xs">{item.tenDanhMuc}</span>
                                    </div>
                                 </div>
                                 <div className="flex justify-center w-1/5">
                                    <svg
                                       className="fill-current text-gray-600 w-3 hover:text-blue-700"
                                       viewBox="0 0 448 512"
                                       onClick={() => handleQuantityUpdate(index, item.soLuongDat - 1, 'decrement')}
                                    >
                                       <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>

                                    <input
                                       className="mx-2 border text-center w-8"
                                       type="text"
                                       value={item.soLuongDat}
                                       onChange={(event) => handleQuantityUpdate(index, event.target.value)}
                                    />

                                    <svg
                                       className="fill-current text-gray-600 w-3 hover:text-blue-700"
                                       viewBox="0 0 448 512"
                                       onClick={() => handleQuantityUpdate(index, item.soLuongDat + 1, 'increment')}
                                    >
                                       <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                 </div>
                                 <span className="text-center w-1/5 font-semibold text-sm">
                                    {item.giaBan.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                 </span>
                                 <span className="text-center w-1/5 font-semibold text-sm">
                                    {(item.giaBan * item.soLuongDat).toLocaleString('vi-VN', {
                                       style: 'currency',
                                       currency: 'VND',
                                    })}
                                 </span>
                                 <span className="w-1/5 flex align-center justify-center ">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       strokeWidth={1.5}
                                       stroke="currentColor"
                                       className="w-6 h-6 hover:text-red-500"
                                       onClick={() => handleRemoveItem(index)}
                                    >
                                       <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                       />
                                    </svg>
                                 </span>
                              </div>
                           );
                        })}

                        <a
                           href="/#"
                           className="flex font-semibold text-blue-700 hover:text-cyan-500 duration-300 text-sm mt-10"
                        >
                           <svg className="fill-current mr-2   w-4" viewBox="0 0 448 512">
                              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                           </svg>
                           Tiếp tục mua hàng
                        </a>
                     </div>
                  </div>
               </div>

               <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col rounded-lg px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                     <h3 className="text-xl font-semibold leading-5 text-gray-800">Thông tin</h3>
                     <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                        <div className="flex justify-between  w-full">
                           <p className="text-base leading-4 text-gray-800">Họ và tên</p>
                           <input
                              type="text"
                              className="p-2 text-base leading-4 text-gray-800"
                              value={name}
                              onChange={(e) => {
                                 setName(e.target.value);
                              }}
                           />
                        </div>
                        <div className="flex justify-between items-center w-full">
                           <p className="text-base leading-4 text-gray-800">Địa chỉ</p>
                           <input
                              type="text"
                              className="p-2 text-base leading-4 text-gray-800"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                           />
                        </div>
                        <div className="flex justify-between items-center w-full">
                           <p className="text-base leading-4 text-gray-800">Số điện thoại</p>
                           <input
                              type="text"
                              className="p-2 text-base leading-4 text-gray-800"
                              value={phoneNumber}
                              onChange={(e) => {
                                 setPhoneNumber(e.target.value);
                              }}
                           />
                        </div>
                     </div>
                     <div className="flex justify-between items-center w-full">
                        <p className="text-base font-semibold leading-4 text-gray-800">Tổng tiền</p>
                        <p className="text-base font-semibold leading-4 text-gray-600">
                           {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col rounded-lg justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                     <h3 className="text-xl font-semibold leading-5 text-gray-800">Đặt hàng</h3>
                     <div className="flex justify-between items-start w-full">
                        <div className="flex justify-center items-center space-x-4">
                           <div className="w-8 h-8">
                              <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                           </div>
                           <div className="flex flex-col justify-start items-center">
                              <p className="text-lg leading-6 font-semibold text-gray-800">
                                 DPD Vận chuyển
                                 <br />
                                 <span className="font-normal">Giao hàng trong 24h</span>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="w-full flex justify-center items-center">
                        <button
                           onClick={handleOrder}
                           className="rounded-lg  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-offset-2 focus:ring-blue-800 p-4 w-96 md:w-full text-base font-medium leading-4 text-white"
                        >
                           Đặt hàng
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Cart;
