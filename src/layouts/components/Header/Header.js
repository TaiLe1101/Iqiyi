import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import configs from '~/configs';
import styles from './Header.module.scss';
import Nav from './Nav';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left')}>
          <Link className={cx('logo')} to={configs.routes.home}>
            <img src={images.logo} alt="" />
          </Link>
          <Nav to={configs.routes.home} title="For You"></Nav>
          <Nav to={configs.routes.sweetOn} title="SWEET ON"></Nav>
          <Nav to="#" title="More"></Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
