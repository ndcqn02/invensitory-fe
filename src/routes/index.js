import { AdminLayout, CustomerLayout, StaffLayout, SupplierLayout } from '~/components/Layout'
import Home from '~/pages/Manager/Home'
import Profile from '~/pages/Manager/Profile'
import ProfileStaff from '~/pages/Staff/Profile'
import Upload from '~/pages/Manager/Upload'
import Orders from '~/pages/Manager/Orders'
import ImportOrder from '~/pages/Manager/ImportOrder'
import PurchaseOrderStaff from '~/pages/Staff/PurchaseOrder'
import PurchaseOrderSupplier from '~/pages/Supplier/PurchaseOrder'
import ExportOrder from '~/pages/Manager/ExportOrder'
import ExportOrderStaff from '~/pages/Staff/ExportOrder'
import Products from '~/pages/Manager/Products'
import ProductsStaff from '~/pages/Staff/Products'
import ProductCatalog from '~/pages/Manager/ProductCatalog'
import ProductCatalogStaff from '~/pages/Staff/ProductCatalog'
import AddNewProduct from '~/pages/Manager/AddNewProduct'
import ImportOrderDetail from '~/pages/Manager/ImportOrderDetail'
import PopUpProductCatalogStaff from '~/pages/Staff/PopUpProductCatalog'
import PurchaseOrderDetailSupplier from '~/pages/Supplier/PopUpProductCatalog'
import ReturnOrder from '~/pages/Manager/ReturnOrder'
import ReturnOrderStaff from '~/pages/Staff/ReturnOrder'
import ReturnOrderSupplier from '~/pages/Supplier/ReturnOrder'
import ReturnOrderDetail from '~/pages/Manager/ReturnOrderDetail'
import ReturnOrderDetailStaff from '~/pages/Staff/ReturnOrderDetail'
import ReturnOrderDetailSupplier from '~/pages/Supplier/ReturnOrderDetail'
import ExportRequest from '~/pages/Manager/ExportRequest'
import ExportRequestStaff from '~/pages/Staff/ExportRequest'
import AccountsAdmin from '~/pages/Admin/Accounts'
import AccountTypesAdmin from '~/pages/Admin/AccountTypes'
import Cart from '~/pages/Customer/Cart'
import SignIn from '~/pages/User/Signin'
import Signup from '~/pages/User/Signup'
import Product from '~/pages/Customer/Product'
import ProductDetail from '~/pages/Customer/ProductDetail'



//Route khong can dang nhap van xem dc
const publicRoutes = [

    //Route customer
    {path: '/', component: Product, layout: CustomerLayout},
    {path: '/cart', component: Cart, layout: CustomerLayout},
    {path: '/sign-in', component: SignIn, layout: CustomerLayout},
    {path: '/sign-up', component: Signup, layout: CustomerLayout},
    {path: '/product/detail/:maSanPham', component: ProductDetail, layout: CustomerLayout},

    //Route manager 
    {path: '/manager', component: Home},
    {path: '/manager/profile', component: Profile},
    {path: '/manager/orders', component: Orders},
    {path: '/manager/import-order', component: ImportOrder},
    {path: '/manager/export-order', component: ExportOrder},
    {path: '/manager/all-product', component: Products},
    {path: '/manager/product-catalog', component: ProductCatalog},
    {path: '/manager/add-new-products', component: AddNewProduct},
    {path: '/manager/import-order-detail/:maPhieuNhap', component: ImportOrderDetail},
    {path: '/manager/export-request', component: ExportRequest},
    {path: '/manager/return-order', component: ReturnOrder},
    {path: '/manager/return-order-detail', component: ReturnOrderDetail},
    {path: '/manager/upload', component: Upload , layout : null},

    //Route staff
    {path: '/staff', component: Home, layout : StaffLayout},
    {path: '/staff/purchase-order', component: PurchaseOrderStaff, layout : StaffLayout},
    {path: '/staff/profile', component: ProfileStaff, layout : StaffLayout},
    {path: '/staff/export-order', component: ExportOrderStaff, layout : StaffLayout},
    {path: '/staff/export-request', component: ExportRequestStaff, layout : StaffLayout},
    {path: '/staff/all-product', component: ProductsStaff, layout : StaffLayout},
    {path: '/staff/product-catalog', component: ProductCatalogStaff, layout : StaffLayout},
    {path: '/staff/return-order', component: ReturnOrderStaff, layout: StaffLayout},
    {path: '/staff/return-order-detail', component: ReturnOrderDetailStaff, layout: StaffLayout},
    {path: 'staff/popup-product-catalog', component: PopUpProductCatalogStaff, layout : StaffLayout},

    //Route supplier
    {path: '/supplier', component: Home, layout : SupplierLayout},
    {path: '/supplier/profile', component: Profile, layout : SupplierLayout},
    {path: '/supplier/purchase-order', component: PurchaseOrderSupplier, layout : SupplierLayout},
    {path: '/supplier/purchase-order-detail', component: PurchaseOrderDetailSupplier, layout : SupplierLayout},
    {path: '/supplier/return-order', component: ReturnOrderSupplier, layout : SupplierLayout},
    {path: '/supplier/return-order-detail', component: ReturnOrderDetailSupplier, layout : SupplierLayout},

    //Route admin
    {path: '/admin', component: Home, layout : AdminLayout},
    {path: '/admin/profile', component: Profile, layout : AdminLayout},
    {path: '/admin/accounts', component: AccountsAdmin, layout : AdminLayout},
    {path: '/admin/account-types', component: AccountTypesAdmin, layout : AdminLayout},

]

const privateRoutes = [
]


export {publicRoutes, privateRoutes} 