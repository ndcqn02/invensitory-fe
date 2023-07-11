import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { totalItemsCart } from '../../../redux/counter'

function ProductDetail() {
   const { maSanPham } = useParams();
   const [product, setProduct] = useState([]);
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
   const dispatch = useDispatch()

   useEffect(() => {
      axios
         .get(`http://localhost:8080/api/v1/product-detail/${maSanPham}`)
         .then((res) => {
            let pr = res.data.data;
            pr.soLuongDat = 1;
            setProduct(pr);
         })
         .catch((err) => console.log(err));
   }, [maSanPham]);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(totalItemsCart())
   }, [cart]);

   return (
      <div className="main">
         <section className="flex flex-col gap-16 pt-20 pb-28 bg-gray-100">
            <div className="container mx-auto flex flex-row justify-around  items-center w-[80%]">
               <div className="w-96 basis-1/3">
                  <img
                     src={product.hinhAnh}
                     alt={product.tenSanPham}
                     className="w-full select-none  border-gray-200 rounded-lg"
                  />
               </div>
               <div className=" basis-2/5 flex flex-col gap-3">
                  <p className="text-gray-500">
                     {'Home/'}
                     {<Link to="/">product</Link>}
                     {`/${product.tenSanPham}`}
                  </p>
                  <h2 className="text-4xl">{product.tenSanPham}</h2>
                  <span className="font-semibold">
                     Giá:
                     <span className="text-2xl">
                        {parseInt(product.giaBan).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                     </span>
                  </span>
                  <div className="flex flex-col gap-2">
                     <h1 className="text-2xl">Tính năng </h1>
                     <p className="text-gray-800">{product.moTa}</p>
                  </div>
                  <h3 className="flex justify-between text-gray-700 text-lg">
                     <span>Danh mục: {product.tenDanhMuc}</span>
                     <span>
                        Đánh giá: <span className="text-rose-500 font-bold">{4}</span>
                        <span>/{5}</span>
                     </span>
                  </h3>

                  <button
                     onClick={() => {
                        setCart([...cart, product]);
                        toast.success('Đã thêm vào giỏ hàng!');
                        
                     }}
                     className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full   text-white p-2 mt-8  border-gray-200 rounded-lg"
                  >
                     Thêm vào giỏ hàng
                     
                  </button>
               </div>
            </div>
            <Link to="/" className="text-xl py-1 text-center hover:text-cyan-500 duration-300 select-none">
               &larr; Trở về sản phẩm
            </Link>
         </section>
         <ToastContainer />
      </div>
   );
}

export default ProductDetail;
