import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { EyeIcon } from '@heroicons/react/24/solid';
import {
   Card,
   CardHeader,
   Input,
   Typography,
   Button,
   CardBody,
   Chip,
   CardFooter,
   IconButton,
   Tooltip,
} from '@material-tailwind/react';

import { Link } from 'react-router-dom';

const TABLE_HEAD = ['Mã phiếu nhập', 'Nhà cung cấp', 'Số lượng', 'Trạng thái', 'Ngày tạo', ''];

const TABLE_ROWS = [
   {
      orderId: '12345',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Duc Cuong',
      email: 'john@creative-tim.com',
      supplier: 'Apple',
      quantity: '40',
      exported: true,
      date: '23/04/18',
   },
   {
      orderId: '12345',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      name: 'Duc Cuong',
      email: 'alexa@creative-tim.com',
      supplier: 'Cuong',
      quantity: '40',
      exported: false,
      date: '23/04/18',
   },
   {
      orderId: '12346',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
      name: 'Duc Cuong',
      email: 'laurent@creative-tim.com',
      supplier: 'Executive',
      quantity: '40',
      exported: false,
      date: '19/09/17',
   },
   {
      orderId: '12347',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
      name: 'Duc Cuong',
      email: 'michael@creative-tim.com',
      supplier: 'Cuong',
      quantity: '40',
      exported: true,
      date: '24/12/08',
   },
   {
      orderId: '1234',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
      name: 'Duc Cuong',
      email: 'richard@creative-tim.com',
      supplier: 'Apple',
      quantity: '40',
      exported: false,
      date: '04/10/21',
   },
];

function ReturnOrder() {
   return (
      <div className="wrapper">
         <Card className="block fixed top-20 left-84 h-full w-full max-w-screen-2xl">
            <CardHeader floated={false} shadow={false} className="rounded-none">
               <div className="mb-8 flex items-center justify-between gap-8">
                  <div>
                     <Typography variant="h5" color="blue-gray">
                        Danh sách phiếu trả
                     </Typography>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="w-full md:w-72">
                     <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                  </div>
               </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
               <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead>
                     <tr>
                        {TABLE_HEAD.map((head) => (
                           <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
                     {TABLE_ROWS.map(({ orderId, img, name, supplier, quantity, exported, date }, index) => {
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
                                 <div className="flex flex-col">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                       {supplier}
                                    </Typography>
                                 </div>
                              </td>
                              <td className={classes}>
                                 <Typography variant="small" color="blue-gray" className="font-normal">
                                    {quantity}
                                 </Typography>
                              </td>
                              <td className={classes}>
                                 <div className="w-max">
                                    <Chip
                                       variant="ghost"
                                       size="sm"
                                       value={exported ? 'Đã duyệt' : 'Chờ duyệt'}
                                       color={exported ? 'green' : 'blue-gray'}
                                    />
                                 </div>
                              </td>
                              <td className={classes}>
                                 <Typography variant="small" color="blue-gray" className="font-normal">
                                    {date}
                                 </Typography>
                              </td>
                              <td className={classes}>
                                 <Tooltip content="Xem chi tiết phiêu nhập">
                                    <Link to="/supplier/return-order-detail">
                                       <IconButton variant="text" color="blue-gray" className="h-6 w-6">
                                          <EyeIcon className="h-4 w-4" />
                                       </IconButton>
                                    </Link>
                                 </Tooltip>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
               <Typography variant="small" color="blue-gray" className="font-normal">
                  Page 1 of 10
               </Typography>
               <div className="flex gap-2">
                  <Button variant="outlined" color="blue-gray" size="sm">
                     Trước
                  </Button>
                  <Button variant="outlined" color="blue-gray" size="sm">
                     Tiếp theo
                  </Button>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}

export default ReturnOrder;
