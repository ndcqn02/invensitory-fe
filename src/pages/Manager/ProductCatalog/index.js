import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
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

const TABLE_HEAD = ['Mã danh mục', 'Tên danh mục', 'Mô tả', ''];

const TABLE_ROWS = [
   {
      orderId: '12345',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'John Michael',
      email: 'john@creative-tim.com',
      job: 'MacBook',
      org: 'Organization',
      exported: 'MacBook',
      date: '23/04/18',
   },
   {
      orderId: '12345',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      job: 'Laptop',
      org: 'MacBook',
      exported: 'Laptop',
      date: '23/04/18',
   },
   {
      orderId: '12346',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      job: 'Mobile',
      org: 'Projects',
      exported: 'Mobile',
      date: '19/09/17',
   },
   {
      orderId: '12347',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
      name: 'Michael Levi',
      email: 'michael@creative-tim.com',
      job: 'Keyboard',
      org: 'Developer',
      exported: 'Keyboard',
      date: '24/12/08',
   },
   {
      orderId: '1234',
      img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
      name: 'Richard Gran',
      email: 'richard@creative-tim.com',
      job: 'Mouse',
      org: 'Executive',
      exported: 'Mouse',
      date: '04/10/21',
   },
];

function ProductCatalog() {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpenForm = () => {
      setIsOpen(true);
   };

   const handleCloseForm = () => {
      setIsOpen(false);
   };
   return (
      <div className="wrapper">
         {isOpen ? (
            <form>
               <Card className="block  top-20 left-84 h-full w-full max-w-screen-2xl">
                  <div className="border-b m-4 p-4 border-gray-900/10 pb-12">
                     <h2 className="text-base font-semibold leading-7 text-gray-900">Thêm mới danh mục</h2>

                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                           <label className="block text-sm font-medium leading-6 text-gray-900">Tên danh mục</label>
                           <div className="mt-2">
                              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                           </div>
                        </div>

                        <div className="col-span-full">
                           <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                              Mô tả
                           </label>
                           <div className="mt-2">
                              <textarea
                                 id="description"
                                 name="description"
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
                              Thêm mới danh mục
                           </button>
                        </div>
                     </div>
                  </div>
               </Card>
               <button type="button" onClick={handleCloseForm}>
                  Đóng form
               </button>
            </form>
         ) : (
            <Card className="block fixed top-20 left-84 h-full w-full max-w-screen-2xl">
               <CardHeader floated={false} shadow={false} className="rounded-none">
                  <div className="mb-8 flex items-center justify-between gap-8">
                     <div>
                        <Typography variant="h5" color="blue-gray">
                           Danh mục danh mục
                        </Typography>
                     </div>
                     <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button className="flex items-center gap-3" color="blue" size="sm" onClick={handleOpenForm}>
                           <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm danh mục
                        </Button>
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
                        {TABLE_ROWS.map(({ orderId, job, exported }, index) => {
                           const isLast = index === TABLE_ROWS.length - 1;
                           const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                           return (
                              <tr key={index}>
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
                                          {job}
                                       </Typography>
                                    </div>
                                 </td>
                                 <td className={classes}>
                                    <div className="w-max">
                                       <Typography variant="small" color="blue-gray" className="font-normal">
                                          {exported}
                                       </Typography>
                                    </div>
                                 </td>

                                 <td className={classes}>
                                    <Link to="">
                                       <Tooltip content="View User">
                                          <IconButton variant="text" color="blue-gray" className="h-6 w-6">
                                             <EyeIcon className="h-4 w-4" />
                                          </IconButton>
                                       </Tooltip>
                                    </Link>
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
         )}
      </div>
   );
}

export default ProductCatalog;
