import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import React from 'react';
import {
   Card,
   Typography,
   List,
   ListItem,
   ListItemPrefix,
   Accordion,

} from '@material-tailwind/react';
import {
   PresentationChartBarIcon,
   UserCircleIcon,
   Cog6ToothIcon,
   PowerIcon,
   ListBulletIcon,
   UsersIcon
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
   // const [open, setOpen] = React.useState(0);

   // const handleOpen = (value) => {
   //    setOpen(open === value ? 0 : value);
   // };
   return (
      <div className={cx('wrapperSidebar')}>
         <Card className="block fixed top-20 h-[calc(100vh-2rem)] w-full max-w-[18rem] p-2 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
               <Typography variant="h5" color="blue-gray">
                  Admin
               </Typography>
            </div>
            <List>
               <Accordion>
                  <Link to="/">
                     <ListItem>
                        <ListItemPrefix>
                           <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                           Dashboard
                        </Typography>
                     </ListItem>
                  </Link>
               </Accordion>
               <Accordion>
                  <Link to="/admin/accounts">
                     <ListItem>
                        <ListItemPrefix>
                           <ListBulletIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                           Danh sách tài khoản
                        </Typography>
                     </ListItem>
                  </Link>
               </Accordion>
               <Accordion>
                  <Link to="/admin/account-types">
                     <ListItem>
                        <ListItemPrefix>
                           <UsersIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                           Loại tài khoản
                        </Typography>
                     </ListItem>
                  </Link>
               </Accordion>

           

               <hr className="my-2 border-blue-gray-50" />

               <Link to="/admin/profile">
                  <ListItem>
                     <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                     </ListItemPrefix>
                     Thông tin cá nhân
                  </ListItem>
               </Link>
               <ListItem>
                  <ListItemPrefix>
                     <Cog6ToothIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Cài đặt
               </ListItem>
               <ListItem>
                  <ListItemPrefix>
                     <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Đăng xuất
               </ListItem>
            </List>
         </Card>
      </div>
   );
}

export default Sidebar;
