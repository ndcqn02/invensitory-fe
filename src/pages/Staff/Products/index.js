import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import {
   Card,
   CardHeader,
   Input,
   Typography,
   Button,
   CardBody,
   CardFooter,
   IconButton,
   Tooltip,
} from '@material-tailwind/react';

const TABLE_HEAD = ['Sản phẩm', 'Mã sản phẩm', 'Loại sản phẩm', 'Số lượng', ''];

const TABLE_ROWS = [
   {
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      orderId: '12345',
      name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/ SSD 256GB',
      email: 'john@creative-tim.com',
      category: 'MacBook',
      quantity: 100,
      exported: true,
      date: '23/04/18',
   },
   {
      img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481',
      orderId: '12345',
      name: 'Macbook Pro Touchbar 15 inch 2019 i7 2.6 Ghz/ RAM 16GB/ SSD 256GB',
      email: 'alexa@creative-tim.com',
      category: 'MacBook',
      quantity: 100,
      exported: false,
      date: '23/04/18',
   },
   {
      img: 'https://ngocnguyen.vn/cdn/images/202304/goods_img/macbook-pro-touchbar-15-inch-2019-i7-26-ghz-ram-16gb-ssd-256gb-G7356-1680834307250.jpg',
      orderId: '12346',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'laurent@creative-tim.com',
      category: 'Laptop',
      quantity: 100,
      exported: false,
      date: '19/09/17',
   },
   {
      img: 'https://ngocnguyen.vn/cdn/images/202304/goods_img/macbook-pro-touchbar-15-inch-2019-i7-26-ghz-ram-16gb-ssd-256gb-G7356-1680834307250.jpg',
      orderId: '12347',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'michael@creative-tim.com',
      category: 'Laptop',
      quantity: 100,
      exported: true,
      date: '24/12/08',
   },

   {
      img: 'https://ngocnguyen.vn/cdn/images/202304/goods_img/macbook-pro-touchbar-15-inch-2019-i7-26-ghz-ram-16gb-ssd-256gb-G7356-1680834307250.jpg',
      orderId: '1234',
      name: 'Laptop Asus ExpertBook B3402FEA-EC0316T',
      email: 'richard@creative-tim.com',
      category: 'Laptop',
      quantity: 100,
      exported: false,
      date: '04/10/21',
   },
   
];

function Products() {

   return (
      <div className="wrapper">
         <Card className="block fixed  h-full w-full max-w-screen-2xl">
            <CardHeader floated={false} shadow={false} className="rounded-none">
               <div className="mb-8 flex items-center justify-between gap-8">
                  <div>
                     <Typography variant="h5" color="blue-gray">
                        Danh sách sản phẩm
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
                     {TABLE_ROWS.map(({ orderId, img, name, category, quantity }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                        return (
                           <tr key={index}>
                              <td className={classes}>
                                 <div className="flex items-center gap-3">
                                    <img className="h-16" src={img} alt={name} size="sm" />
                                    <div className="flex flex-col">
                                       <Typography variant="small" color="blue-gray" className="font-normal">
                                          {name}
                                       </Typography>
                                    </div>
                                 </div>
                              </td>
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
                                       {category}
                                    </Typography>
                                 </div>
                              </td>
                              <td className={classes}>
                                 <div className="w-max">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                       {quantity}
                                    </Typography>
                                 </div>
                              </td>

                              <td className={classes}>
                                 <Tooltip content="View User">
                                    <IconButton variant="text" color="blue-gray" className="h-6 w-6">
                                       <EyeIcon className="h-4 w-4" />
                                    </IconButton>
                                 </Tooltip>
                                 <Tooltip content="Edit User">
                                    <IconButton variant="text" color="blue-gray" className="h-6 w-6">
                                       <PencilIcon className="h-4 w-4" />
                                    </IconButton>
                                 </Tooltip>
                                 <Tooltip content="Delete User">
                                    <IconButton variant="text" color="blue-gray" className="h-6 w-6">
                                       <TrashIcon className="h-4 w-4" />
                                    </IconButton>
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

export default Products;
