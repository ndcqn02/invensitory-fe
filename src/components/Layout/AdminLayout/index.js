import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './AdminLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
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

export default AdminLayout;
