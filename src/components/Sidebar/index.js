import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logoR from '../../assets/images/logo-r.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faIndeed } from '@fortawesome/free-brands-svg-icons';
import indeed from '../../assets/images/indeed.svg';

const SideBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-logo' to='/'>
        <img src={logoR} alt='logo-home-link' />
        <h1 className="sub-logo">ChrisRDavila</h1>
      </Link>
      <nav>
      <NavLink 
        exact='true' 
        activeclassname='active' 
        to='/'>
        <FontAwesomeIcon icon={faHome} color='4d4d4e' />
      </NavLink>
      <NavLink 
      exact='true' 
      activeclassname='active' 
      className='about-link'
      to='/about'>
        <FontAwesomeIcon icon={faUser} color='4d4d4e' />
      </NavLink>
      <NavLink 
        exact='true' 
        activeclassname='active' 
        className='contact-link' 
        to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
      </NavLink>
    </nav>
      <ul>
        <li>
          <a target='_blank' 
          rel='noreferrer' 
          href='https://www.linkedin.com/in/christopher-davila-004408269/'>
            <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' 
          rel='noreferrer' 
          href='https://github.com/ChrisRDavila'>
            <FontAwesomeIcon icon={faGithub} color='4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;