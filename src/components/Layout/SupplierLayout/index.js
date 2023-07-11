import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './SupplierLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function SupplierLayout({ children }) {
   return (
      <div>
         <Header />
         <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}> {children}</div>
         </div>
      </div>
   );
}

export default SupplierLayout;
