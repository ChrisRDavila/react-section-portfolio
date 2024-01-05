import './index.scss';
import { Link } from 'react-router-dom';
import logoR from '../../assets/images/logo-r.jpeg';

const SideBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-logo' to='/'>
        <img src={logoR} alt='logo-home-link' />
        <h1 className="sub-logo">ChrisRDavila</h1>
      </Link>
    </div>
  );
}

export default SideBar;