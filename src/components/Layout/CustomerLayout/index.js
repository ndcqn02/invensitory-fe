import classNames from 'classnames/bind';
import HeaderCustomer from '~/components/Layout/CustomerLayout/HeaderCustomer';
import Footer from '~/components/Layout/CustomerLayout/Footer';
import styles from './CustomerLayout.module.scss';

const cx = classNames.bind(styles);

function CustomerLayout({ children }) {
   return (
      <div>
         <HeaderCustomer />
         <div className={cx('container')}>
            <div className={cx('content')}> {children}</div>
         </div>
         <hr className='relative top-20 dark:border-gray-700 lg:my-8'/>
         <Footer />
      </div>
   );
}

export default CustomerLayout;
