import { React } from 'react';
import { Card, CardHeader, Typography, CardBody, Chip, CardFooter } from '@material-tailwind/react';

const TABLE_HEAD = ['Mã sản phẩm', 'Sản phẩm', 'Số lượng'];

const TABLE_ROWS = [
   {
      orderId: '12345',
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'john@creative-tim.com',
      job: 'staff',
      org: 'Organization',
      exported: true,
      quantity: '20',
   },
   {
      orderId: '12345',
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'alexa@creative-tim.com',
      job: 'Programator',
      org: 'Developer',
      exported: false,
      quantity: '20',
   },
   {
      orderId: '12346',
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'laurent@creative-tim.com',
      job: 'Executive',
      org: 'Projects',
      exported: false,
      quantity: '5',
   },
   {
      orderId: '12347',
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/ SSD 256GB',
      email: 'michael@creative-tim.com',
      job: 'Programator',
      org: 'Developer',
      exported: true,
      quantity: '68',
   },
   {
      orderId: '1234',
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/ SSD 256GB',
      email: 'richard@creative-tim.com',
      job: 'staff',
      org: 'Executive',
      exported: false,
      quantity: '68',
   },
];

function ReturnOrderDetail() {
   return (
      <div className="wrapper">
         <div class="flex flex-wrap -mx-3 py-6">
            <div class="grid grid-cols-3 gap-4 w-full max-w-full px-3 mt-6 shrink-0  md:flex-0 md:mt-0">
               <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <Typography className="pt-6 pl-6" variant="h6" color="blue-gray">
                     Nhân viên
                  </Typography>
                  <div class="max-w-full p-6 pt-0 pb-6 mt-6 grid grid-cols-2 gap-4 ">
                     <h3>Nhân viên tạo:</h3>
                     <p className="text-right">Nguyễn Đức Cường</p>

                     <p>Ghi chú:</p>
                     <p className="text-right">Hàng cần gấp</p>

                     <p>Trạng thái:</p>
                     <div className="w-max ">
                        <Chip variant="ghost" size="sm" value="Đã duyệt từ nhà cung cấp" color="green" />
                     </div>
                  </div>
               </div>

               <div className="col-span-2 relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <Typography className="pt-6 pl-6" variant="h6" color="blue-gray">
                     Thông tin phiếu trả
                  </Typography>
                  <div className="p-6 pb-6 grid grid-cols-2 gap-4">
                     <div>Nhà cung cấp: </div>
                     <div className="text-right">Apple</div>

                     <div>Ngày tạo : </div>
                     <div className="text-right">31/5/2023</div>

                     <div>Địa chỉ : </div>
                     <div className="text-right">48 Cao Thắng</div>
                     <div>Tổng số lượng : </div>
                     <div className="text-right">32</div>
                  </div>

                
               </div>
            </div>

            {/* right */}
            <div class="w-full px-3 my-10 shrink-0 md:flex-0">
               <div class="relative flex flex-col min-w-fit break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <Card className="block h-full w-full">
                     <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-4 flex items-center justify-between gap-8">
                           <div>
                              <Typography variant="h5" color="blue-gray">
                                 Chi tiết phiếu trả
                              </Typography>
                           </div>
                        </div>
                     </CardHeader>
                     <CardBody className=" px-0">
                        <table className=" w-full min-w-max table-auto text-left">
                           <thead>
                              <tr>
                                 {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                       <Typography
                                          variant="small"
                                          color="blue-gray"
                                          className="font-normal leading-none opacity-70"
                                       >anager
                                          {head}
                                       </Typography>
                                    </th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody>
                              {TABLE_ROWS.map(({ orderId, img, name, email, job, org, exported, quantity }, index) => {
                                 const isLast = index === TABLE_ROWS.length - 1;
                                 const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                                 return (
                                    <tr key={name}>
                                       <td className={classes}>
                                          <div className="flex flex-col">
                                             <Typography variant="small" color="blue-gray" className="font-normal">
                                                {orderId}
                                             </Typography>
                                          </div>
                                       </td>
                                       <td className={classes}>
                                          <div className="flex items-center gap-3">
                                             <img className="h-16 " src={img} alt={name} size="sm" />
                                             <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                   {name}
                                                </Typography>
                                             </div>
                                          </div>
                                       </td>

                                       <td className={classes}>
                                          <Typography variant="small" color="blue-gray" className="font-normal">
                                             {quantity}
                                          </Typography>
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                     </CardBody>
                     <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ReturnOrderDetail;
