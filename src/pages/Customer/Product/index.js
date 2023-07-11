import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// const listProduct = [
//    {
//       id: 1,
//       title: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
//       description:
//          'Lenovo V15 G2 15.6 Laptop Computer - Black; Intel Core i5 11th Gen 1135G7 2.4GHz Processor; 16GB DDR4-3200 RAM; 1TB Solid State Drive; Intel Iris Xe Graphics',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-card-50-compare-202209_GEO_VN?wid=480&hei=400&fmt=p-jpg&qlt=95&.v=1678777952357',
//       category: 'laptop',
//       brand: 'lenovo',
//       price: '30.000.000',
//       rating: '4.8/5',
//    },
//    {
//       id: 2,
//       title: 'Inspiron 14 Laptop',
//       description:
//          '12th Generation Intel® Core™ i5-1235U Windows 11 Home Single Language Intel® Iris®Graphics 16 GB, 2 x 8 GB, DDR4, 3200 MHz  512 GB, M.2, PCIe NVMe, SSD 35.5-cm. display Full HD (1920X1200)',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-card-40-s8-202303_GEO_VN?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1677356811724',
//       category: 'laptop',
//       brand: 'dell',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 3,
//       title: 'Apple Macbook Air M2 2022 8GB 256GB',
//       description:
//          '12th Gen Intel® Core™ i7-12700H Windows 11 Home Single Language NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6 16GB, 2x8GB, DDR5, 4800MHz 512 GB, M.2, PCIe, SSD 39.6-cm. display Full HD (1920X1080) 120Hz',
//       img: 'https://i.dell.com/sites/csimages/Banner_Imagery/en/indhs-g-series-15-5520-laptop-btc-D560822WIN9B.png',
//       category: 'laptop',
//       brand: 'Dell',
//       price: '30.000.000',
//       rating: '4.6/5',
//    },
//    {
//       id: 4,
//       title: 'Apple Macbook Air M2 2022 8GB 256GB',
//       description:
//          '11th Gen Intel® Core™ i5-1135G7 Windows 11 Home Single Language Intel® UHD Graphics 8 GB, 1 x 8 GB, DDR4, 2666 MHz 256GB M.2 PCIe NVMe Solid State Drive (Boot) + 1TB 5400 rpm 2.5inch SATA Hard Drive (Storage) 39.6-cm. display Full HD (1920X1080) Starting at 1.69 kg',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1664576115052',
//       category: 'laptop',
//       brand: 'HP',
//       price: '30.000.000',
//       rating: '4.6/5',
//    },
//    {
//       id: 5,
//       title: 'Apple Macbook Air M2 2022 8GB 256GB',
//       description:
//          '(MGN63) Space Gray Processor: Apple M1 chip with 8-core CPU and 7-core GPU RAM: 8GB, Storage: 256GB SSD Display: 13.3-inch 2560x1600 LED-backlit Retina Features: Backlit Magic Keyboard',
//       img: 'https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-228x228.webp',
//       category: 'laptop',
//       brand: 'apple',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 6,
//       title: 'Apple MacBook Pro 13.3-Inch',
//       description:
//          ' SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093',
//       category: 'laptop',
//       brand: 'apple',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 7,
//       title: 'Apple iPhone 14 Plus',
//       description:
//          ' 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg',
//       category: 'smartphone',
//       brand: 'apple',
//       price: '30.000.000',
//       rating: '4.8/5',
//    },
//    {
//       id: 8,
//       title: 'samsung-galaxy-s23-ultra-5g',
//       description:
//          ' M2 Chip 8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg',
//       category: 'smartphone',
//       brand: 'samsung',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 9,
//       title: 'Huawei P60 Pro',
//       description:
//          'Display M2 Chip 8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-p60-pro.jpg',
//       category: 'smartphone',
//       brand: 'Huawei',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 10,
//       title: 'Huawei Pocket S',
//       description:
//          '8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-pocket-s.jpg',
//       category: 'smartphone',
//       brand: 'Huawei',
//       price: '30.000.000',
//       rating: '4.9/5',
//    },
//    {
//       id: 11,
//       title: 'Colorful GeForce GT710-2GD3-V 2GB Graphics Card',
//       description:
//          'Single Fan No Power Supply Powered by GeForce GT710 Integrated with 2GB GDDR5 64-bit performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar',
//       img: 'https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-228x228.jpg',
//       category: 'graphics card',
//       brand: 'intel',
//       price: '30.000.000',
//       rating: '4/5',
//    },
// ];

const Product = () => {
   const [product, setProduct] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:8080/api/v1/all-product')
         .then((res) => {
            setProduct(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

  

   return (
      <div className="main">
         <div className="h-full  mt-4">
            <div className="">
               <h1 className="text-3xl lg:text-2xl font-semibold leading-7 lg:leading-9  text-gray-800">
                  Tất cả sản phẩm
               </h1>
            </div>
            <div className="max-w-7xl  my-10 grid grid-cols-4 gap-8 ">
               {product.map((pro, index) => {
                  return (
                     <div
                        key={index}
                        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   hover:shadow-xl hover:scale-105 duration-300 px-4 py-7  overflow-hidden"
                     >
                        <Link to={`/product/detail/${pro.maSanPham}`}>
                           <img src={pro.hinhAnh} className="px-8 pb-8 rounded-t-lg" alt="product" />

                           <div className="px-5 pb-5">
                              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                 {pro.tenSanPham}
                              </h5>

                              <div className="flex items-center mt-2.5 mb-5">
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                 </svg>
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <title>Second star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                 </svg>
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <title>Third star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                 </svg>
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <title>Fourth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                 </svg>
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <title>Fifth star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                 </svg>
                                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    5.0
                                 </span>
                              </div>
                              <div className="flex items-center justify-between">
                                 <span className="text-xl font-bold text-gray-900 dark:text-white">{(pro.giaBan).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                 <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Mua ngay
                                 </button>
                              </div>
                           </div>
                        </Link>
                     </div>
                  );
               })}
            </div>
         </div>
         <div></div>
      </div>
   );
};

export default Product;
