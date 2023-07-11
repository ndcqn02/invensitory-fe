import { React, useEffect, useState } from 'react';
import { Card, CardHeader, Typography, CardBody, Chip } from '@material-tailwind/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TABLE_HEAD = ['Mã sản phẩm', 'Sản phẩm', 'Số lượng'];

// const TABLE_ROWS = [
//    {
//       orderId: '12345',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
//       name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
//       email: 'john@creative-tim.com',
//       job: 'Manager',
//       org: 'Organization',
//       exported: true,
//       quantity: '20',
//    },
//    {
//       orderId: '12345',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
//       name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
//       email: 'alexa@creative-tim.com',
//       job: 'Programator',
//       org: 'Developer',
//       exported: false,
//       quantity: '20',
//    },
//    {
//       orderId: '12346',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
//       name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
//       email: 'laurent@creative-tim.com',
//       job: 'Executive',
//       org: 'Projects',
//       exported: false,
//       quantity: '5',
//    },
//    {
//       orderId: '12347',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
//       name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/ SSD 256GB',
//       email: 'michael@creative-tim.com',
//       job: 'Programator',
//       org: 'Developer',
//       exported: true,
//       quantity: '68',
//    },
//    {
//       orderId: '1234',
//       img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
//       name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/-SSD 256GB',
//       email: 'richard@creative-tim.com',
//       job: 'Manager',
//       org: 'Executive',
//       exported: false,
//       quantity: '68',
//    },
// ];

function ImportOrderDetail() {
   const { maPhieuNhap } = useParams();
   const [info, setInfo] = useState([]);
   const [status, setStatus] = useState(0);
   const [product, setProduct] = useState([]);

   // get api info nhanvien va info don hang
   useEffect(() => {
      axios
         .get(`http://localhost:8080/api/v1/import-order-detail/${maPhieuNhap}`)
         .then((res) => {
            setInfo(res.data.data);
         })
         .catch((err) => console.log(err));
   }, [status, maPhieuNhap]);

   //get api chi tiet phieu nhap hang gom nhung san pham nao
   useEffect(() => {
      axios
         .get(`http://localhost:8080/api/v1/product-io-detail/${maPhieuNhap}`)
         .then((res) => {
            setProduct(res.data.data);
         })
         .catch((err) => console.log(err));
   }, [maPhieuNhap]);

   const handleApproveImportRequest = async () => {
      let value = { maPhieuNhap: maPhieuNhap };

      await axios
         .put('http://localhost:8080/api/v1/approve-the-import-request', value)
         .then((res) => {
            toast.success('Duyệt đơn hàng thành công!');
            setStatus(1);
         })
         .catch((err) => {
            console.log('loi roi ma oi');
            console.log(err.message);
         });
   };

   const handleRejectImportRequest = async () => {
      let value = { maPhieuNhap: maPhieuNhap };
      await axios
         .put('http://localhost:8080/api/v1/reject-the-import-request', value)
         .then((res) => {
            toast.info('Đã từ chối nhập hàng!');
            setStatus(0);
         })
         .catch((err) => {
            console.error(err);
         });
   };

   return (
      <div className="wrapper">
         <div className="flex  flex-wrap -mx-3 py-6 ">
            {info.map((item, index) => {
               return (
                  <div
                     key={index}
                     className="grid grid-cols-3 gap-4 w-full max-w-full px-3 mt-6 shrink-0  md:flex-0 md:mt-0"
                  >
                     <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <Typography className="pt-6 pl-6" variant="h6" color="blue-gray">
                           Nhân viên
                        </Typography>
                        <div className="max-w-full p-6 pt-0 pb-6 mt-6 grid grid-cols-2 gap-4 ">
                           <h3>Nhân viên tạo:</h3>
                           <p className="text-right">{item.hoVaTenNV}</p>

                           <p>Ghi chú:</p>
                           <p className="text-right">{item.ghiChu}</p>

                           <p>Trạng thái:</p>
                           <div className="w-max ">
                              <Chip
                                 variant="ghost"
                                 size="sm"
                                 value={item.trangThai}
                                 color={
                                    item.trangThai === 'Đã duyệt'
                                       ? 'green'
                                       : item.trangThai === 'Đã từ chối'
                                       ? 'orange'
                                       : 'blue-gray'
                                 }
                              />
                           </div>
                        </div>
                     </div>

                     <div className="col-span-2 relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                        <Typography className="pt-6 pl-6" variant="h6" color="blue-gray">
                           Thông tin phiếu nhập
                        </Typography>
                        <div className="p-6 pb-6 grid grid-cols-2 gap-4">
                           <div>Mã phiếu nhập : </div>
                           <div className="text-right">{item.maPhieuNhap}</div>

                           <div>Nhà cung cấp: </div>
                           <div className="text-right">{item.hoVaTenNCC}</div>

                           <div>Ngày tạo : </div>
                           <div className="text-right">{new Date(item.thoiGianTao).toLocaleString()}</div>
                        </div>

                        <div className="border-black/12.5 rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
                           <div className="flex justify-end">
                              <button
                                 onClick={handleRejectImportRequest}
                                 type="button"
                                 className=" mr-5 hidden px-8 py-3 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-cyan-500 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                              >
                                 Từ chối
                              </button>
                              <button
                                 onClick={handleApproveImportRequest}
                                 type="button"
                                 className="hidden px-8 py-3 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-green-400 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                              >
                                 Duyệt
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
            <div className="w-full px-3 my-10 shrink-0 md:flex-0">
               <div className="relative flex flex-col min-w-fit break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <Card className="block h-full w-full">
                     <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-4 flex items-center justify-between gap-8">
                           <div>
                              <Typography variant="h5" color="blue-gray">
                                 Chi tiết phiếu nhập
                              </Typography>
                           </div>
                        </div>
                     </CardHeader>
                     <CardBody className=" px-0">
                        <table className=" w-full min-w-max table-auto text-left">
                           <thead>
                              <tr>
                                 {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                       <Typography
                                          variant="small"
                                          color="blue-gray"
                                          className="font-normal leading-none opacity-70"
                                       >
                                          {head}
                                       </Typography>
                                    </th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody>
                              {product.map((pro, index) => {
                                 const isLast = index === product.length - 1;
                                 const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
                                 return (
                                    <tr key={index}>
                                       <td className={classes}>
                                          <div className="flex flex-col">
                                             <Typography variant="small" color="blue-gray" className="font-normal">
                                                {pro.maSanPham}
                                             </Typography>
                                          </div>
                                       </td>
                                       <td className={classes}>
                                          <div className="flex items-center gap-3">
                                             <img className="h-16 " src={pro.hinhAnh} alt={pro.hinhAnh} size="sm" />
                                             <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                   {pro.tenSanPham}
                                                </Typography>
                                             </div>
                                          </div>
                                       </td>

                                       <td className={classes}>
                                          <Typography variant="small" color="blue-gray" className="font-normal">
                                             {pro.soLuong}
                                          </Typography>
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                     </CardBody>
                  </Card>
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
}

export default ImportOrderDetail;
