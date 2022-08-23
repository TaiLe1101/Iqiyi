import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function Nav({ title, to }) {
  return (
    <Link to={to} className={cx('nav')}>
      {title}
    </Link>
  );
}

export default Nav;
