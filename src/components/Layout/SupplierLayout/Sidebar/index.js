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
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className={cx('wrapperSidebar')}>
            <Card className="block fixed top-20 h-[calc(100vh-2rem)] w-full max-w-[18rem] p-2 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        Nhà cung cấp
                    </Typography>
                </div>
                <List>
                    {/* <Accordion
             
                    >
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
                    </Accordion> */}
           
                   
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <DocumentTextIcon className="h-5 w-5" />
                                </ListItemPrefix>

                                <Typography color="blue-gray" className="mr-auto font-normal">
                                   Xác nhận
                                </Typography>
                            </AccordionHeader>
                        </ListItem>

                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to="/supplier/purchase-order">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Nhập hàng
                                    </ListItem>
                                </Link>
                    
                                <Link to="/supplier/return-order">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Trả hàng
                                    </ListItem>
                                </Link>
                            </List>
                        </AccordionBody>
                    </Accordion>

                    <hr className="my-2 border-blue-gray-50" />
                  
                    <Link to="/supplier/profile">
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
