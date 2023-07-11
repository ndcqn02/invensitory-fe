import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from '@material-tailwind/react';

const TABS = [
    {
        label: 'Tất cả',
        value: 'all',
    },
    {
        label: 'Đã xuất',
        value: 'exported',
    },
    {
        label: 'Chưa xuất',
        value: 'unexported',
    },
];

const TABLE_HEAD = ['Mã đơn hàng', 'Khách hàng', 'Địa chỉ', 'Trạng thái', 'Ngày giao hàng', ''];

const TABLE_ROWS = [
    {
        orderId: '12345',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        job: 'Manager',
        org: 'Organization',
        exported: true,
        date: '23/04/18',
    },
    {
        orderId: '12345',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        job: 'Programator',
        org: 'Developer',
        exported: false,
        date: '23/04/18',
    },
    {
        orderId: '12346',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        job: 'Executive',
        org: 'Projects',
        exported: false,
        date: '19/09/17',
    },
    {
        orderId: '12347',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        job: 'Programator',
        org: 'Developer',
        exported: true,
        date: '24/12/08',
    },
    {
        orderId: '1234',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard Gran',
        email: 'richard@creative-tim.com',
        job: 'Manager',
        org: 'Executive',
        exported: false,
        date: '04/10/21',
    },
];

function Orders() {
    return (
        <div className="wrapper">
            <Card className="block fixed top-20 left-84 h-full w-full max-w-screen-2xl">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Tất cả đơn hàng
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Xem thông tin của từng đơn hàng
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value} className="w-fit">
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
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
                            {TABLE_ROWS.map(({ orderId, img, name, email, job, org, exported, date }, index) => {
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
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {job}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {org}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={exported ? 'Đã xuất hàng ' : 'Chưa xuất hàng'}
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

export default Orders;
